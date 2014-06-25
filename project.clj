(defproject gear "0.1.0-SNAPSHOT"
  :description "Cljs demo"
  :plugins [[com.keminglabs/cljx "0.4.0"]]
  :url "https://github.com/kibu-australia/gear"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2234"]
                 [reagent "0.4.2"]
                 [com.keminglabs/cljx "0.4.0"]]
  :profiles {:dev 
             {:dependencies [[figwheel "0.1.3-SNAPSHOT"]]
              :plugins [[com.cemerick/clojurescript.test "0.3.1"]
                        [lein-cljsbuild "1.0.3"]
                        [lein-figwheel "0.1.3-SNAPSHOT"]]
              :test-commands {"unit-tests" ["phantomjs" :runner
                                            "target/cljs/testable.js"]}
              :cljsbuild {:builds [{:id "dev"
                                    :source-paths ["src/cljs"]
                                    :compiler {:preamble ["reagent/react.js"]
                                               :output-to "resources/public/js/gear.js"
                                               :output-dir "resources/public/js/out"
                                               :source-map true
                                               :optimizations :none}}]}}})
