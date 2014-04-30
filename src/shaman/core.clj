(ns shaman.core
  (:require [org.httpkit.client :as http]
            [cheshire.core :refer [parse-string generate-string]]
            [taoensso.timbre :as log]))

;; helper functions

(defn parse-json
  [json-string]
  (try
    (parse-string json-string true)
    (catch Exception e
      (log/error "Invalid json-string\n" json-string "\n" (.getMessage e)))))

(defn response-handler
  "handles api responses"
  [{:keys [status body error] :as resp}]
  (log/debug resp)
  (if (and
        (nil? error)
        (< 199 status 300))
    (parse-json body)
    (log/error "API error: " (or error body))))

(defn build-url
  "builds proper URL for predictionIO API"
  [client path]
  (str "http://" (:host client) ":" (:port client) path))

;; -- CLIENT protocols
(defprotocol RPC
  (rpc-get [this path] [this path params])
  (rpc-post [this path data] [this path data params])
  (rpc-delete [this path] [this path param]))

;; -- Client
(defrecord RpcClient [host port api-key]
  RPC
  (rpc-get [this path]
    (rpc-get this path nil))
  (rpc-get [this path params]
    (response-handler
      @(http/request {:method :get
                      :url (build-url this path)
                      :query-params (merge
                                      {:pio_appkey (:api-key this)}
                                      params)})))
  (rpc-post [this path data]
    (rpc-post this path data {}))
  (rpc-post [this path data params]
    (response-handler
      @(http/request {:method :post
                      :url (build-url this path)
                      :query-params (merge
                                      {:pio_appkey (:api-key this)}
                                      params)
                      :body (generate-string data)})))
  (rpc-delete [this path]
    (rpc-delete this path {}))
  (rpc-delete [this path params]
    (response-handler
      @(http/request {:method :delete
                      :url (build-url this path)
                      :query-params (merge
                                      {:pio_appkey (:api-key this)}
                                      params)}))))

(defn make-client
  "builds the new api-client"
  [host api-key & {:keys [port] :or {port 8000}}]
  (RpcClient. host port api-key))

;; -- User functions
(defn get-user
  "returns user data for user-id"
  [^RpcClient client ^String user-id]
  (rpc-get client (format "/users/%s.json" user-id)))

(defn add-user
  "add or update user info"
  ([^RpcClient client ^String user-id]
    (add-user client user-id {}))
  ([^RpcClient client ^String user-id user-params]
    (rpc-post client
              "/users.json" "" ;; post empty content
              (merge
                {:pio_uid user-id}
                (dissoc user-params :pio_ct)))))
(defn delete-user
  "deletes user by user-id"
  [^RpcClient client ^String user-id]
  (rpc-delete client (format "/users/%s.json" user-id)))

;; ITEM
(defn add-item
  "adds new item into the data set"
  ([^RpcClient client ^String item-id item-types]
    (add-item client item-id item-types {}))
  ([^RpcClient client ^String item-id item-types params]
    (rpc-post
      client "/items.json" ""
      (merge
        {:pio_iid item-id
         :pio_itypes (apply str (interpose "," item-types))}
        (dissoc params :pio_ct)))))

(defn get-item
  "request a data of the item"
  [^RpcClient client ^String item-id]
  (rpc-get client (format "/items/%s.json" item-id)))

(defn delete-item
  "delete item with the item-id"
  [^RpcClient client ^String item-id]
  (rpc-delete client (format "/items/%s.json" item-id)))

(comment

  (require '[shaman.core :as shaman] :reload)
  (def api-key "pK4cwVhBEMk7IWRTpXd869X5EUjKC9vNeISURqaRaZnXlpWnAeVTlJxWkZTZlkD0")
  (def client (shaman/make-client "10.0.10.2" api-key))

  )

