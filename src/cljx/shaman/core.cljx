(ns shaman.core
  #+cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
    #+clj [org.httpkit.client :as http]
    #+clj [cheshire.core :refer [parse-string generate-string]]
    #+clj [taoensso.timbre :as log]
    #+cljs [ajax.core :as http]
    #+cljs [cljs.core.async :refer [<! >! close! chan timeout]]))

#+clj (set! *warn-on-reflection* true)


;; helper functions
(defn to-csv-line
  "converts vector of string into commaseparated string"
  [strings]
  (apply str (interpose \, strings)))

;;only needed for Clojure, cljs-ajax parses json for us
#+clj
(defn parse-json
  [^String json-string]
  (try
    (parse-string json-string true)
    (catch Exception e
      (log/error "Invalid json-string\n" json-string "\n" (.getMessage e)))))

(defn to-json
  "converts Clojure data into JSON"
  [data]
  #+clj (generate-string data)
  #+cljs (clj->js data))

#+clj
(defn response-handler
  "handles api responses"
  [{:keys [status body error] :as resp}]
  ;;(log/debug resp)
  (if (and
        (nil? error)
        (< 199 status 300))
    (parse-json body)
    (log/error "API error: " (or error body))))

;; -- CLIENT protocols
(defprotocol RPC
  (build-url [this path])
  (execute-request [this request-map])
  (rpc-get [this path] [this path params])
  (rpc-post [this path data] [this path data params])
  (rpc-delete [this path] [this path param]))

;; -- Clients
(defrecord RpcClient [host port api-key]
  RPC
  (build-url [this path]
    (str (:host this) ":" (:port this) path))

  (execute-request [this request-map]
    #+clj (response-handler @(http/request request-map))
    #+cljs (let [response-channel (chan 1)]
             ;; run request
             (http/ajax-request
                (:url request-map)
                (:method request-map)
                {:params (:query-params request-map)
                 :format (http/json-format {:keywords? true})
                 :handler (fn [resp-items]
                            ;(.debug js/console (str "Handler got: " resp-items))
                            (go
                              (>! response-channel resp-items)
                              (close! response-channel)))})
             response-channel))

  (rpc-get [this path]
    (rpc-get this path nil))
  (rpc-get [this path params]
    (execute-request this
                    {:method :get
                      :url (build-url this path)
                      :query-params (merge
                                      {:pio_appkey (:api-key this)}
                                      params)}))
  (rpc-post [this path data]
    (rpc-post this path data {}))
  (rpc-post [this path data params]
    (execute-request this
                    {:method :post
                      :url (build-url this path)
                      :query-params (merge
                                      {:pio_appkey (:api-key this)}
                                      params)
                      :body (to-json data)}))
  (rpc-delete [this path]
    (rpc-delete this path {}))
  (rpc-delete [this path params]
    (execute-request this
                    {:method :delete
                      :url (build-url this path)
                      :query-params (merge
                                      {:pio_appkey (:api-key this)}
                                      params)})))

(defn make-client
  "builds the new api-client"
  [^String host ^String api-key & {:keys [port] :or {port 8000}}]
  (RpcClient. host port api-key))

;; -- User functions
(defn get-user
  "returns user data from the recommender dataset

  Arguments:
    client  - an initialized RpcClient
    user-id - an id of the user

  Usage:
    (get-user client \"user1\")"
  [^RpcClient client ^String user-id]
  (rpc-get client (str "/users/" user-id ".json")))

(defn add-user
  "add or update user info

  Arguments:
    client  -  an initialized RpcClient
    user-id - an id of the user

  Optional arguments:
    user-params - a clojure map with arguments for PredictionIO user API
                  for example {:pio_latlng \"69.32,23.43\", :pio_inactive false}

  Usage:
    (add-user client \"user1\")
    (add-user client \"user2\" {:pio_inactive false, :pio_latlng \"0.0,0.0\"})"
 ([^RpcClient client ^String user-id]
    (add-user client user-id {}))
  ([^RpcClient client ^String user-id user-params]
    (rpc-post client
              "/users.json" "" ;; post empty content
              (merge
                {:pio_uid user-id}
                (dissoc user-params :pio_ct)))))

(defn delete-user
  "deletes user by user-id

  Arguments:
    client  - an initialized RpcClient
    user-id = an id of the user
  Usage:
    (delete-user client \"user1\")"
  [^RpcClient client ^String user-id]
  (rpc-delete client (str "/users/" user-id ".json")))

;; ITEM
(defn add-item
  "adds new item into the dataset
  Arguments:
    client      - an initialized RpcClient
    item-id     - an id of the item
    item-types  - a vector of string with item's types
  Optional arguments:
    params  - a Clojure map with additional descriptors
  Usage:
    (add-item client \"item1\" [\"beer\" \"belgium\" \"duval\"]
    (add-item client \"item1\" [] {:pio_price 5.40 :pio_profit 0.24}))"
  ([^RpcClient client ^String item-id item-types]
    (add-item client item-id item-types {}))
  ([^RpcClient client ^String item-id item-types params]
    (rpc-post
      client "/items.json" ""
      (merge
        {:pio_iid item-id
         :pio_itypes (to-csv-line item-types)}
        (dissoc params :pio_ct)))))

(defn get-item
  "request item from recommender's dataset
  Arguments:
    client  - an initialized RpcClient
    item-id - an id of the item
  Usage:
    (get-item client \"item1\")"
  [^RpcClient client ^String item-id]
  (rpc-get client (str "/items/" item-id ".json")))

(defn delete-item
  "remove item from recommender's dataset
  Arguments:
    client  - an initialized RpcClient
    item-id - an id of the item
  Usage:
    (delete-item client \"item1\")"
  [^RpcClient client ^String item-id]
  (rpc-delete client (str "/items/" item-id ".json")))

;; USER to ITEM behavior
(defn add-action
  "adds action that connects the user and the item

  Arguments:
    client    - an initialized RpcClient
    user-id   - an id of the user
    item-id   - an id of the item
    action    - a keyword or a string with action name,
              builtin actions [:rate :like :dislike :view :conversion]
  Optional arguments:
    rate          - a value of rate action on the scale 1..5
    extra-params  - an additional arguments to pass into API
  Usage:
    (add-action client \"user1\" \"item1\" :like)
    (add-action client \"user2\" \"item1\" :rate 5
    (add-action client \"user3\" \"item2\" :dislike 0 {:pio_t \"2013-09..\"}))"
  ([^RpcClient client ^String user-id ^String item-id action]
   (add-action client user-id item-id action 0 {}))
  ([^RpcClient client ^String user-id ^String item-id action rate]
   (add-action client user-id item-id action rate {}))
  ([^RpcClient client ^String user-id ^String item-id action rate extra-params]
    (let [action_ (if (keyword? action)
                    (name action)
                    (str action))]
      (rpc-post client
                "/actions/u2i.json"
                "" ;; send a emtpy body
                (merge
                  {:pio_uid user-id
                  :pio_iid item-id
                  :pio_action action_ }
                  (when (= "rate" action_)
                    {:pio_rate rate})
                  extra-params)))))

;; RECOMMEND
(defn recommend-topn
  "recommends topN items to user

  Required arguments:
    client      - a initialized RpcClient
    engine-name - a name of recommendation engine
    user-id     - a id of user
    max-n       - a number of result should it return

  Optional arguments:
    :item-types - a vector of string of item's type, [\"soup\", \"cheap\"]
    :attributes - a vector of string with names of attributes to return
    :latlng     - a tuple of coordinates, [59.345 34.234]
    :within     - to specify a bounding distance
    :unit       - a unit of length of the :within argument

    You can also pass raw optional arguments (:pio_<argname>)
    as it's specified on the official PredictionIO API documentation,
    but then you have to take care of proper formatting by yourself
  Usage:
    (recommend-topn client \"oracle1\" \"user1\" 10)
    (recommend-topn client \"oracle1\" \"user2\" 5
      :item-types [\"soup\" \"spicey\"] :pio_attributes \"price,name\")"
  [^RpcClient client ^String engine-name ^String user-id ^Long max-n
    & {:keys [item-types attributes latlng unit within]
       :or {item-types [] attributes [] latlng [] unit "km"}
       :as extra-params}]
  (rpc-get
    client
    (str "/engines/itemrec/" engine-name "/topn.json")
    (merge
      {:pio_uid user-id
       :pio_n max-n}
      (dissoc extra-params :item-types :attributes :latlng :within :unit)
      (when-not (empty? item-types)
        {:pio_itypes (to-csv-line item-types)})
      (when-not (empty? attributes)
        {:pio_attributes (to-csv-line item-types)})
      (when-not (empty? latlng)
        {:pio_latlng (to-csv-line latlng)})
      (when-not (nil? within)
        {:pio_within within
         :pio_unit unit}))))


(defn suggest-topn
  "suggests topN most similar items"
  [^RpcClient client ^String engine-name ^String item-id ^Long max-n
   & {:keys [item-types attributes latlng within unit]
      :or {unit "km"}
      :as extra-params}]
  (rpc-get
    client
    (str "/engines/itemsim/" engine-name "/topn.json")
    (merge
      {:pio_iid item-id :pio_n max-n}
      (dissoc extra-params :item-types :attributes :latlng :within :unit)
      (when-not (nil? item-types)
        {:pio_itypes (to-csv-line item-types)}
      (when-not (nil? attributes)
        {:pio_attributes (to-csv-line item-types)})
      (when-not (nil? latlng)
        {:pio_latlng (to-csv-line latlng)})
      (when-not (nil? within)
        {:pio_within within
         :pio_unit unit})))))

