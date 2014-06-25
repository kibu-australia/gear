(ns gear.core
  (:require [gear.calculator :as calc]
            [reagent.core :as reagent :refer [atom]]))

(def chainring (atom 42))
(def sprocket (atom 16))
(def wheel (atom 27))


(defn slider [value rng]
  [:input {:type "range"
           :value @value
           :min (apply min rng)
           :max (apply max rng)
           :style {:width "100%"}
           :on-change #(reset! value (-> % .-target .-value))}])

(defn my-component []
  [:div
   [:h3 "Gear Ratio Calculator"]
   [:div
    "Chainring: " @chainring
    [slider chainring calc/chainring]]
   [:div "Sprocket: " @sprocket
    [slider sprocket calc/sprockets]]
   [:div
    [:strong
     "= "
     (calc/gear-inch @wheel @chainring @sprocket)
     " gear inches"]]])

(reagent/render-component [my-component]
                          (.-body js/document))
