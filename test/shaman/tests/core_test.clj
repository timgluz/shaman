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
