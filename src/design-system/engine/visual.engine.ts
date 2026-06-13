import { visual } from "../tokens/visual.tokens";

export const visualEngine = {
  getGlow(level: keyof typeof visual.glow) {
    return visual.glow[level];
  },

  getGlass(intensity: keyof typeof visual.glass) {
    return visual.glass[intensity];
  },

  getBlur(size: keyof typeof visual.blur) {
    return visual.blur[size];
  },

  getDepth(layer: keyof typeof visual.depth) {
    return visual.depth[layer];
  },
};