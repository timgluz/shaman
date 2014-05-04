# shaman

[![Build Status](https://travis-ci.org/timgluz/shaman.svg)](https://travis-ci.org/timgluz/shaman)


Shaman is a Clojure/ClojureScript client for Prediction.IO API. 
With Shaman you can manage your datasets on the recommender engine, get topN recommendations for the user or requests topN similar items.

[shaman "0.2.0-SNAPSHOT"]

[API reference](http://timgluz.github.io/shaman/shaman.core.html)

## Notes about Clojurescript

All functions that are making a request to the API endpoints are returning Core.async channel, which allowed me to keep library similar to Clojure's library, keep workflow still async without using callbacks.

And it's worth to mention that PredictionIO API **doesnt** support [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) for very simple reason: the Play webframework they are using just doesnt support it. I'm using Vagrant machine (*check resources folder*) with nginx proxy to workaround this issue. 


## Usage

#### Clojure

```

(require '[shaman.core :as shaman])

(def api-key "YourAPIKey")
(def client (shaman/make-client "http://10.0.10.2" api-key))

;; working with data
(shaman/add-user client "user1")
(shaman/add-user client "user2" {:pio_latlng "52.34,45.23"})
(shaman/delete-user client "user1")
(shaman/add-item client "beer1" ["beer" "belgium" "duval"])
(shaman/add-action client "user2" "beer1" :likes)

;; getting recommendations

(shaman/recommend-topn client "item-rec1" "user2" 5)
(shaman/suggest-topn client "item-sim1" "beer1" 5)
```

#### Clojurescript

You can use Shaman's Clojurescript library exactly the same way as Clojure's, only keep in mind that on Clojurescript all the api-functions will return Core.async **channel** with max 1 item on the buffer.

Here's simple session on bREPL showing the example workflow with Clojurescript.

```
;; on clojurescript REPL

(load-namespace 'shaman.core)
(def api-key "pK4cwVhBEMk7IWRTpXd869X5EUjKC9vNeISURqaRaZnXlpWnAeVTlJxWkZTZlkD0")
(def client (shaman.core/make-client "http://10.0.10.3" api-key :port 80))
(def resp-chan (shaman.core/get-user client "user1"))

(load-namespace 'cljs.core.async)
(load-namespace 'cljs.core.async.macros)

(cljs.core.async.macros/go 
	(.debug js/console (cljs.core.async/<! resp-chan)))

```


## License

Copyright © 2014 TimGluz

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
