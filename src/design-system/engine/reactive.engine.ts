import { motion } from "../tokens/motion";
import { visual } from "../tokens/visual.tokens";
import { orbEngine } from "./orb.engine";
export type ReactiveState = "idle" | "hover" | "active" | "loading";

export const reactiveEngine = {
  state: "idle" as ReactiveState,

  setState(state: ReactiveState) {
    this.state = state;

    // sync with orb system
    if (state === "loading") orbEngine.setState("loading");
    if (state === "active") orbEngine.setState("active");
    if (state === "idle") orbEngine.setState("idle");
  },

  getMotion() {
    switch (this.state) {
      case "hover":
        return {
          scale: motion.scale.hover,
          transition: motion.easing.arkaverse,
        };

      case "active":
        return {
          scale: motion.scale.active,
          transition: motion.easing.smooth,
        };

      case "loading":
        return {
          scale: 1.08,
          transition: motion.easing.accelerate,
        };

      default:
        return {
          scale: 1,
          transition: motion.easing.decelerate,
        };
    }
  },

  getVisual() {
    switch (this.state) {
      case "hover":
        return {
          glow: visual.glow.medium,
          blur: visual.blur.sm,
        };

      case "active":
        return {
          glow: visual.glow.strong,
          blur: visual.blur.md,
        };

      case "loading":
        return {
          glow: visual.glow.neon,
          blur: visual.blur.lg,
        };

      default:
        return {
          glow: visual.glow.soft,
          blur: visual.blur.sm,
        };
    }
  },
};