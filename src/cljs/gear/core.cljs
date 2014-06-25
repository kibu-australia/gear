(ns gear.core
  (:require [gear.calculator :as calc]
            [reagent.core :as reagent :refer [atom]]))

(defn some-component []
  [:div [:h3 "Turn up"]])

(reagent/render-component [some-component]
                            (.-body js/document))
