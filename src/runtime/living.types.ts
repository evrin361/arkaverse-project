import { UIEventType } from "./event.types";

export type LivingIntensity = "low" | "medium" | "high";

export interface LivingBehavior {
  event: UIEventType;
  intensity: LivingIntensity;
  scale: number;
  glow: "soft" | "medium" | "strong";
  blur: "sm" | "md" | "lg";
  duration: number;
}