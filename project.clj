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
  :plugins [[lein-midje "3.1.3"]
            [lein-shell "0.4.0"]
            [codox "0.6.8"]]
  :profiles {:dev
              {:dependencies [[midje "1.6.3"]
                              [http-kit.fake "0.2.2"]]}}
  :codox {:output-dir "docs/codox"
          :writer codox.writer.html/write-docs
          :src-dir-uri "http://github.com/timgluz/shaman/blob/master"
          :src-linenum-anchor-prefix "L"})

