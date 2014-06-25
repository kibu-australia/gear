(ns gear.core
  (:require [gear.calculator :as calc]
            [reagent.core :as reagent :refer [atom]]))

(def sprockets (range 11 25))
(def chainrings (range 28 59))
(def inches [30 143])

(def chainring (atom 42))
(def sprocket (atom 16))
(def wheel (atom 27))

(defn slider [value range]
  [:input {:type "range"
           :value @value
           :min (apply min range)
           :max (apply max range)
           :style {:width "100%"}
           :on-change #(reset! value (-> % .-target .-value))}])

(defn gear-ratio []
  (-> (calc/gear-inch @wheel @chainring @sprocket)
              (.toFixed 2)))

(defn inch-slider []
  [:input {:type "range"
           :value (gear-ratio)
           :min (apply min inches)
           :max (apply max inches)
           :style {:width "100%"}
           :on-change #(let [v (-> % .-target .-value)
                             s (calc/find-sprocket @wheel @chainring v)]
                         (if (and (>= s (apply min sprockets))
                                  (<= s (apply max sprockets)))
                           (reset! sprocket s)
                           nil))}])

(defn my-component []
  [:div
   [:div "Chainring: " @chainring
    [slider chainring chainrings]]
   [:div "Sprocket: " @sprocket
    [slider sprocket sprockets]]
   [:div [:h1.result (gear-ratio) " gear inches"]
    [inch-slider]]])

(reagent/render-component [my-component]
                          (.getElementById js/document "main"))
