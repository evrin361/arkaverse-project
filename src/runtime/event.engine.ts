import { runtime } from "./arkasphere.runtime";
import { identityEngine } from "../design-system/engine/identity.engine";
import { UIEvent } from "./event.types";

export const eventEngine = {
  dispatch(event: UIEvent) {
    switch (event.type) {
      case "click":
        runtime.setState("interacting");
        identityEngine.setState("active");
        break;

      case "hover":
        runtime.setState("interacting");
        identityEngine.setState("active");
        break;

      case "focus":
        identityEngine.setState("focused");
        break;

      case "load":
        runtime.setState("processing");
        identityEngine.setState("loading");
        break;

      default:
        runtime.setState("idle");
        identityEngine.setState("idle");
    }
  },
};