export const motion = {
  duration: {
    instant: 100,
    fast: 200,
    normal: 300,
    slow: 500,
    slower: 800,
    cinematic: 1200,
  },

  easing: {
    linear: "linear",

    smooth: "cubic-bezier(0.4,0,0.2,1)",

    accelerate: "cubic-bezier(0.4,0,1,1)",

    decelerate: "cubic-bezier(0,0,0.2,1)",

    spring: "cubic-bezier(0.175,0.885,0.32,1.275)",

    arkaverse:
      "cubic-bezier(0.22,1,0.36,1)"
  },

  scale: {
    hover: 1.03,
    active: 0.98,
    cardHover: 1.015,
  },

  opacity: {
    hidden: 0,
    visible: 1,
  }
} as const