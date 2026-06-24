import { runtimeGovernanceEngine } from "./runtime-governance.engine";
import { RuntimePolicyOutput } from "./runtime-policy.types";

export const runtimePolicyEngine = {
  evaluate(): RuntimePolicyOutput {
    const governance =
  runtimeGovernanceEngine.govern();

    let policy = "standard";

    let level = "normal";

const compliant = true;

    if (
      governance.governanceLevel
        ?.toLowerCase()
        .includes("high")
    ) {
      policy = "strict";
      level = "elevated";
    }

    return {
      policy,
      level,
      compliant,
    };
  },
};