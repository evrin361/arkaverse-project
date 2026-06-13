import { identityEngine } from "../design-system/engine/identity.engine";
export type RuntimeState =
  | "booting"
  | "idle"
  | "interacting"
  | "processing"
  | "error";

class ArkaSphereRuntime {
  private state: RuntimeState = "booting";

  setState(newState: RuntimeState) {
    this.state = newState;

    // Sync with identity layer
    switch (newState) {
      case "interacting":
        identityEngine.setState("active");
        break;

      case "processing":
        identityEngine.setState("loading");
        break;

      case "idle":
      default:
        identityEngine.setState("idle");
        break;
    }
  }

  getState() {
    return this.state;
  }

  boot() {
    this.setState("idle");
  }
}

export const runtime = new ArkaSphereRuntime();