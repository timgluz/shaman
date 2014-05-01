# shaman

[![Build Status](https://travis-ci.org/timgluz/shaman.svg)](https://travis-ci.org/timgluz/shaman)

Shaman is a Clojure client for Prediction.IO API. Shaman helps you to manage datasets on the recommender engine and get recommendations for users or topN suggestions for similar items.

[shaman "0.1.0-SNAPSHOT"]

[API reference]()

## Usage

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


## License

Copyright © 2014 TimGluz

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
