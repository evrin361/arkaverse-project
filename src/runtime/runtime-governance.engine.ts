import { runtimeAutonomyEngine } from "./runtime-autonomy.engine";
import { RuntimeGovernanceOutput } from "./runtime-governance.types";

export const runtimeGovernanceEngine = {
  govern(): RuntimeGovernanceOutput {
    const autonomy =
  runtimeAutonomyEngine.evaluate();
    const governanceLevel =
      autonomy.autonomyLevel === "high"
        ? "supervised"
        : "controlled";

    return {
      autonomyLevel:
        autonomy.autonomyLevel,

      governanceLevel,

      allowedActions: 12,

      restrictedActions: 3,

      policyState: "active",
    };
  },
};