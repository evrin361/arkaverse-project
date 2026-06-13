import { orbEngine, OrbState } from "./orb.engine";
import { reactiveEngine, ReactiveState } from "./reactive.engine";

type IdentityState = OrbState | ReactiveState;

export const identityEngine = {
  state: "idle" as IdentityState,

  setState(state: IdentityState) {
    this.state = state;

    // sync all systems
    orbEngine.setState(state as OrbState);
    reactiveEngine.setState(state as ReactiveState);
  },

  getVisual() {
    return reactiveEngine.getVisual();
  },

  getMotion() {
    return reactiveEngine.getMotion();
  },

  getGlow() {
    return orbEngine.getGlow();
  },

  getScale() {
    return orbEngine.getScale();
  },

  getBlur() {
    return orbEngine.getBlur();
  },
};