import { IdentityRenderInput, IdentityRenderOutput } from "./identity-render.types";

export const identityRenderEngine = {
  render(input: IdentityRenderInput): IdentityRenderOutput {
    const b = input.behavior;

    return {
      scale: b.scale,
      glow: b.glow,
      blur: b.blur,
      duration: b.duration,
      intensity: b.intensity,
    };
  },
};