import { LivingBehavior } from "./living.types";

export interface IdentityRenderOutput {
  scale: number;
  glow: string;
  blur: string;
  duration: number;
  intensity: string;
}

export interface IdentityRenderInput {
  behavior: LivingBehavior;
}