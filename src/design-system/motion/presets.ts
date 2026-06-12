import { motion } from "../tokens/motion"

export const motionPresets = {
  fadeIn: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration:
          motion.duration.normal / 1000,
      },
    },
  },

  slideUp: {
    initial: {
      opacity: 0,
      y: 20,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration:
          motion.duration.normal / 1000,
        ease: motion.easing.arkaverse,
      },
    },
  },

  scaleIn: {
    initial: {
      opacity: 0,
      scale: 0.96,
    },

    animate: {
      opacity: 1,
      scale: 1,
    },
  },
}