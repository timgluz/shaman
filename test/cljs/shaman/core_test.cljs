(ns shaman.core-test
  (:require-macros [cemerick.cljs.test :refer [is deftest testing]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cemerick.cljs.test :as t]
            [cljs.core.async :refer (<! timeout)]
            [shaman.core :as shaman]))

(def configs {:host "http://10.0.10.3"
              :port 80
              :api-key "pK4cwVhBEMk7IWRTpXd869X5EUjKC9vNeISURqaRaZnXlpWnAeVTlJxWkZTZlkD0"})

(deftest make-client
  (testing "creating new client"
    (let [client (shaman/make-client (:host configs) (:api-key configs))]
      (is (= (:host configs) (:host client)))
      (is (= (:api-key configs) (:api-key client)))
      (is (= 8000 (:port client))))
  (testing "supports additional :port argument"
    (let [client (shaman/make-client (:host configs)
                                     (:api-key configs)
                                     :port (:port configs))]
      (is (= (:host configs) (:host client)))
      (is (= (:api-key configs) (:api-key client)))
      (is (= (:port configs) (:port client)))))))

(def client (shaman/make-client (:host configs)
                                (:api-key configs)`
                                :port (:port configs)))

;; TODO: make it work
;; doesnt work with clojurescript.test < 0.3, but 0.3 brokes deps
(deftest ^:async dummy-async
  (let [resp-channel (shaman/get-user client "user1")]
    (println "go-loop starts")
    (js/setTimeout
      (fn []
        (go-loop []
          (if-let [response (<! resp-channel)]
            (do
              (println "go-loop got response")
              (println
                (str  "Response: " (.stringify js/JSON (clj->js response)))))
            (do
              (<! (timeout 500))
              (println "go-loop still waiting")
              (recur)))))
        1000)
    (println "go-loop ends")))

(deftest get-user
  (testing "creates user"
    (let [resp-channel (shaman/get-user client "user1")]
      (go
        (let [response (<! resp-channel)]
          (println (.stringify js/JSON (clj->js response)))))
      (go (is (= 42 (<! resp-channel)))))))

