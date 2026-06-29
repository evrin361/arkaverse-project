
import {
  getIdentity,
} from "./identityRuntimeActions";

export const identityEngine = {
  inspect() {
    const identity = getIdentity();

    return {
      identity,

      summary: `${identity.name} • ${identity.role}`,

      operational:
        identity.state === "booting"
          ? "Initializing"
          : "Operational",
    };
  },
};