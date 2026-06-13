import { motion } from "../tokens/motion";
import { visual } from "../tokens/visual.tokens";

export type OrbState = "idle" | "active" | "focused" | "loading";

export const orbEngine = {
  state: "idle" as OrbState,

  setState(state: OrbState) {
    this.state = state;
  },

  getGlow() {
    switch (this.state) {
      case "active":
        return visual.glow.medium;

      case "focused":
        return visual.glow.strong;

      case "loading":
        return visual.glow.neon;

      default:
        return visual.glow.soft;
    }
  },

  getScale() {
    switch (this.state) {
      case "active":
        return motion.scale.cardHover;

      case "focused":
        return motion.scale.hover;

      case "loading":
        return 1.08;

      default:
        return 1;
    }
  },

  getBlur() {
    if (this.state === "loading") return visual.blur.lg;
    if (this.state === "focused") return visual.blur.md;
    return visual.blur.sm;
  },
};