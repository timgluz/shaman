(ns shaman.tests.core-test
  (:require [midje.sweet :refer :all]
            [shaman.core :as shaman]
            [cheshire.core :refer [generate-string]]
            [org.httpkit.fake :refer [with-fake-http]]))

(facts "make-client"
  (fact "creates correct client with default settings"
    (let [client (shaman/make-client "10.0.10.2" "abc")]
      (:host client) => "10.0.10.2"
      (:api-key client) => "abc"
      (:port client) => 8000))
  (fact "supports :port argument"
    (let [client (shaman/make-client "10.0.10.2" "abc" :port 1234)]
      (:host client) => "10.0.10.2"
      (:api-key client) => "abc"
      (:port client) => 1234)))


(facts "get-user"
  (let [client (shaman/make-client "10.0.10.2" "abc")]
    (fact "returns proper user data if user exists"
      (with-fake-http [#"/users" {:status 200
                                  :body (generate-string
                                          {:pio_uid "313"})}]
        (shaman/get-user client "313") => {:pio_uid "313"}))
    (fact "returns nil if user doesnt exists"
      (with-fake-http [#"/users" {:status 404
                                  :body (generate-string
                                          {:message "Cannot find user"})}]
        (shaman/get-user client "313") => nil))))

(facts "add-user"
  (let [client (shaman/make-client "10.0.10.2" "abc")]
    (fact "creates new user"
      (with-fake-http [#"/users" {:status 201
                                  :body (generate-string {:message "User created"})}]
        (shaman/add-user client "313") => {:message "User created"}
        (shaman/add-user client "313" {:pio_latlng "0.0,0.0"})
          => {:message "User created"}))))

(facts "delete-user"
  (let [client (shaman/make-client "10.0.10.2" "abc")]
    (fact "removes user from collection"
      (with-fake-http [#"/users" {:status 200
                                  :body (generate-string {:message "User deleted"})}]
        (shaman/delete-user client "313") => {:message "User deleted"}))))

(facts "add-item"
  (let [client (shaman/make-client "10.0.10.2" "abc")
        success-msg {:message "Item created"}]
    (fact "add new item into the dataset"
      (with-fake-http [#"/items" {:status 201
                                  :body (generate-string success-msg)}]
        (shaman/add-item client "item1" ["kikka" "kukka"]) => success-msg
        (shaman/add-item client "item2" ["kukka"] {:prop "active"}) => success-msg))))

(facts "get-item"
  (let [client (shaman/make-client "10.0.10.2" "abc")
        success-msg {:pio_iid "item1" :pio_itypes ["kikka" "kukka"]}]
    (fact "returns expected answer if item exists"
      (with-fake-http [#"/items" {:status 200
                                  :body (generate-string success-msg)}]
        (shaman/get-item client "item1") => success-msg))
    (fact "returns nil if the item doesn exist"
      (with-fake-http [#"/items" {:status 404
                                  :body (generate-string {:message "Cannot find item"})}]
        (shaman/get-item client "item2") => nil))))

(facts "delete-item"
  (let [client (shaman/make-client "10.0.10.2" "abc")
        success-msg {:message "Item deleted"}]
    (fact "deletes item if the item exists"
      (with-fake-http [#"/items" {:status 200
                                  :body (generate-string success-msg)}]
        (shaman/delete-item client "item1") => success-msg
        ;; test with not existing item
        (shaman/delete-item client "item2") => success-msg))))
