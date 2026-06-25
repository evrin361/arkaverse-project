import { runtimeAuthorityEngine } from "./runtime-authority.engine";
import { RuntimeExecutiveOutput } from "./runtime-executive.types";

export const runtimeExecutiveEngine = {
  execute(): RuntimeExecutiveOutput {
    const authority =
      runtimeAuthorityEngine.authorize();

    return {
      executiveActive:
        authority.authorityActive,
      executiveLevel: "executive",
      authorityLevel:
        authority.authorityLevel,
    };
  },
};