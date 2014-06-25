(ns gear.calculator)

(defn gear-inch
  "Returns the gear inches for a given chainring/sprocket combination"
  [wheel chainring sprocket]
  (* wheel (/ chainring sprocket)))

(defn find-chainring
  "Returns the closest chainring for the desired gear inch/sprocket combination"
  [wheel sprocket gear-inch]
  (Math/round (* sprocket (/ gear-inch wheel))))

(defn find-sprocket
  "Returns the closest sprocket for the desired gear inch/chainring combination"
  [wheel chainring gear-inch]
  (Math/round (* chainring (/ wheel gear-inch))))

(defn suggest-ratio
  "Returns a vector of vectors containing chainring/sprocket combinations
   closest to desired gear inch"
  [wheel gear-inch sprockets]
  (for [chainring chainrings]
    (let [sprocket (find-sprocket wheel chainring gear-inch)]
      (when (and (>= sprocket (apply min sprockets))
                 (<= sprocket (apply max sprockets)))
        [chainring sprocket]))))
