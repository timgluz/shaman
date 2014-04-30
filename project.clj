(defproject shaman "0.1.0-SNAPSHOT"
  :description "clojure client for predictionIO API"
  :url "https://github.com/timgluz/shaman"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [http-kit "2.1.18"]
                 [cheshire "5.3.1"]
                 [midje "1.6.3"]
                 [com.taoensso/timbre "3.1.6"]]
  :plugins [[lein-midje "3.1.3"]]
  :profiles {:dev
              {:dependencies [[midje "1.6.3"]
                              [http-kit.fake "0.2.2"]]}})

