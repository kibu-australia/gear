(ns ratio.core)

(def sprockets (range 11 25))
(def chainrings (range 28 59))

(defn gear-inch
  "Returns the gear inches for a given chainring/sprocket combination"
  [wheel chainring sprocket]
  (* wheel (double (/ chainring sprocket))))

(defn find-chainring
  "Returns the closest chainring for the desired gear inch/sprocket combination"
  [wheel sprocket gear-inch]
  (int (Math/ceil (* sprocket (/ gear-inch wheel)))))

(defn find-sprocket
  "Returns the closest sprocket for the desired gear inch/chainring combination"
  [wheel chainring gear-inch]
  (int (Math/ceil (* chainring (double (/ wheel gear-inch))))))

(defn suggest-ratio
  "Returns a vector of vectors containing chainring/sprocket combinations
   closest to desired gear inch"
  [wheel gear-inch]
  (for [chainring chainrings]
    (let [sprocket (find-sprocket wheel chainring gear-inch)]
      (when (and (>= sprocket (apply min sprockets))
                 (<= sprocket (apply max sprockets)))
        [chainring sprocket]))))
