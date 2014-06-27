(ns gear.core
  (:require [gear.calculator :as calc]
            [reagent.core :as reagent :refer [atom]]))

(def sprockets (range 11 25))
(def chainrings (range 28 59))
(def inches [30 143])

(def chainring (atom 42))
(def sprocket (atom 16))
(def inch (atom (apply min inches)))
(def wheel (atom 27))

(defn slider [value range]
  [:input {:type "range"
           :value @value
           :min (apply min range)
           :max (apply max range)
           :style {:width "100%"}
           :on-change #(reset! value (-> % .-target .-value))}])

(defn input-number [value]
  [:input {:type "number"
           :min (apply min inches)
           :max (apply max inches)
           :value @value
           :on-change #(reset! value (-> % .-target .-value js/Number))}])

(defn gear-ratio []
  (-> (calc/gear-inch @wheel @chainring @sprocket)
      (.toFixed 2)))

(defn my-calculator []
  [:div
   [:div "Chainring: " @chainring
    [slider chainring chainrings]]
   [:div "Sprocket: " @sprocket
    [slider sprocket sprockets]]
   [:div [:h1.result (gear-ratio) " gear inches"]]])

(defn my-navigation []
  [:ul.nav
   [:li {:on-click render-calculator} "Calculate"]
   [:li {:on-click render-suggestions} "Suggest"]])

(defn my-suggestion []
  [:div
   [:div [input-number inch]]
   [:div (when @inch
           (str (calc/suggest-ratio @wheel @inch chainrings sprockets)))]])

(defn render [id body]
  (reagent/render-component body (.getElementById js/document id)))

(defn render-calculator []
  (render "main" [my-calculator]))

(defn render-suggestions []
  (render "main" [my-suggestion]))

(defn render-nav []
  (render "nav" [my-navigation]))

(render-calculator)
(render-nav)
