import { UIEventType } from "./event.types";
import { LivingBehavior } from "./living.types";

export const livingEngine = {
  react(event: UIEventType): LivingBehavior {
    switch (event) {
      case "click":
        return {
          event,
          intensity: "high",
          scale: 1.1,
          glow: "strong",
          blur: "sm",
          duration: 180,
        };

      case "hover":
        return {
          event,
          intensity: "medium",
          scale: 1.05,
          glow: "medium",
          blur: "sm",
          duration: 220,
        };

      case "focus":
        return {
          event,
          intensity: "high",
          scale: 1.08,
          glow: "strong",
          blur: "md",
          duration: 250,
        };

      default:
        return {
          event,
          intensity: "low",
          scale: 1,
          glow: "soft",
          blur: "sm",
          duration: 300,
        };
    }
  },
};