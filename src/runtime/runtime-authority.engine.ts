import { runtimeOversightEngine } from "./runtime-oversight.engine";
import { RuntimeAuthorityOutput } from "./runtime-authority.types";

export const runtimeAuthorityEngine = {
  authorize(): RuntimeAuthorityOutput {
    const oversight =
      runtimeOversightEngine.oversee();

    return {
      authorityActive:
        oversight.oversightActive,
      authorityLevel: "authorized",
      oversightLevel:
        oversight.oversightLevel,
    };
  },
};