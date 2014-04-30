(ns shaman.core
  (:require [org.httpkit.client :as http]
            [clojurewerkz.meltdown.reactor :as reactor]
            [clojurewerkz.meltdown.selectors :refer [$]]))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(comment

  (require '[org.httpkit.client :as http])

  (def app-key "pK4cwVhBEMk7IWRTpXd869X5EUjKC9vNeISURqaRaZnXlpWnAeVTlJxWkZTZlkD0")
  (http/request {:method :post
                 :url "http://10.0.10.2:8000/users.json"
                 :query-params {:pio_appkey app-key
                                :pio_uid "user1"}})
  )
