(defproject shaman "0.2.0-SNAPSHOT"
  :description "clojure client for predictionIO API"
  :url "https://github.com/timgluz/shaman"
  :scm "https://github.com/timgluz/shaman"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[potemkin "0.3.2"]]

  :profiles {:dev
              {:dependencies [[midje "1.6.3"]
                              [http-kit.fake "0.2.2"]
                              [http-kit "2.1.18"]
                              [cheshire "5.3.1"]
                              [com.taoensso/timbre "3.1.6"]
                              [org.clojure/clojurescript "0.0-2030"]
                              [cljs-ajax "0.2.3"]
                              [com.keminglabs/cljx "0.3.1"]
                              [org.clojure/tools.nrepl "0.2.3"]]
               :plugins [[lein-midje "3.1.3"]
                          [lein-shell "0.4.0"]
                          [codox "0.6.8"]
                          [com.keminglabs/cljx "0.3.1"]
                          [lein-cljsbuild "0.3.2"]
                          [com.cemerick/austin "0.1.3"]
                          [com.cemerick/clojurescript.test "0.2.2"]]
               :hooks [leiningen.cljsbuild]
               :repl-options
                {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl
                                    cljx.repl-middleware/wrap-cljx]}
               :cljx
                {:builds [{:source-paths ["src/cljx"]
                           :output-path "target/generated/src/clj"
                           :rules :clj}
                          {:source-paths ["src/cljx"]
                           :output-path "target/generated/src/cljs"
                           :rules :cljs}]}}
            :1.6
              {:dependencies [[org.clojure/clojure "1.6.0"]]}}
  :aliases {"all" ["with-profile" "dev,1.6"]}
  :jar-exclusions [#"\.cljx|\.swp|\.swo|\.DS_Store"]
  :lein-release {:deploy-via :shell
                 :shell ["lein" "deploy" "clojars"]}
  :prep-tasks ["cljx" "javac" "compile"]
  :source-paths ["src/clj" "target/generated/src/clj"]
  :resource-paths ["target/generated/src/cljs"]
  :test-paths ["target/generated/test/clj" "test"]
  :cljsbuild {:test-commands
                {"unit" ["phantomjs" :runner
                         "this.literal_js_was_evaluated=true"
                         "target/unit-test.js"]}
              :builds
                {:dev {:source-paths ["target/generated/src/cljs"]
                       :compiler {:output-to "target/main.js"
                                  :optimization :whitespace
                                  :pretty-print true}}
                 :test {:source-paths ["test/cljs"]
                        :compiler {:output-to "target/unit-test.js"
                                   :optimization :whitespace
                                   :pretty-print true}}}}
  :codox {:output-dir "docs/codox"
          :writer codox.writer.html/write-docs
          :src-dir-uri "http://github.com/timgluz/shaman/blob/master/"
          :src-linenum-anchor-prefix "L"})

