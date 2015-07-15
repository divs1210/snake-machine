(ns snake-cljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; Environment
;; ============
(def env
  {:block-size 20
   :width  600
   :height 400})


;; Helpers
;; =======
(defn rand-color []
  (int (q/random 50 150)))

(defn rand-int-in [max]
  (-> max q/random int))

(defn add-points [p1 p2]
  (let [[x y] (map + p1 p2)
        block-size (:block-size env)]
    [(mod x (-> env :width  (/ block-size)))
     (mod y (-> env :height (/ block-size)))]))

(defn scale-point [point]
  (map #(* % (:block-size env)) point))


;; Game
;; ====
(defn make-snake []
  {:body [[1 1] [2 0]]
   :dir  [1 0]
   :can-turn? true})

(defn make-frog []
  [(-> env :width  (/ (:block-size env)) rand-int-in)
   (-> env :height (/ (:block-size env)) rand-int-in)])

(defn make-game []
  {:snake (make-snake)
   :frog  (make-frog)})


(defn draw-block [block]
  (let [[x y] (scale-point block)
        size  (:block-size env)]
    (q/rect x y size size)))

(defn draw-snake [snake]
  (let [color (repeatedly 3 rand-color)]
    (apply q/fill color)
    (doseq [block (:body snake)]
      (draw-block block))))

(defn draw-frog [frog]
  (let [d     (:block-size env)
        [x y] (map #(-> d (/ 2) (+ %))
                   (scale-point frog))]
    (apply q/fill (repeatedly 3 rand-color))
    (q/ellipse x y d d)
    (q/fill 170)
    (q/ellipse x y (/ d 2) (/ d 2))))


(defn grow-snake [snake]
  (update-in snake [:body] conj (add-points (:dir snake) (-> snake :body last))))

(defn eating? [snake frog]
  (= frog (-> snake :body last)))


(defn key-press [state e]
  (if (-> state :snake :can-turn?)
    (-> (condp = (:key e)
          :up    (update-in state [:snake :dir] #(if (= % [ 0  1]) [ 0  1] [ 0 -1]))
          :down  (update-in state [:snake :dir] #(if (= % [ 0 -1]) [ 0 -1] [ 0  1]))
          :left  (update-in state [:snake :dir] #(if (= % [ 1  0]) [ 1  0] [-1  0]))
          :right (update-in state [:snake :dir] #(if (= % [-1  0]) [-1  0] [ 1  0]))
          state)
        (assoc-in [:snake :can-turn?] false))
    state))


;; Quil
;; ====
(defn setup []
  (q/smooth)
  (q/frame-rate 10)
  (make-game))

(defn update-state [state]
  (let [frog  (:frog  state)
        state (if (contains? (-> state :snake :body butlast set)
                             (-> state :snake :body last))
                (make-game) state)
        state (update-in state [:snake] grow-snake)
        state (if ((comp not eating?) (:snake state) frog)
                (update-in state [:snake :body] (comp vec rest))
                (assoc state :frog (make-frog)))]
    (assoc-in state [:snake :can-turn?] true)))

(defn draw-state [state]
  (q/background 170)
  (draw-frog  (:frog  state))
  (draw-snake (:snake state)))

(q/defsketch quil-test
  :host "snake-cljs"
  :features [:keep-on-top true]
  :title "Snake"
  :size [(:width env) (:height env)]
  :setup setup
  :update update-state
  :draw draw-state
  :key-pressed key-press
  :middleware [m/fun-mode])
