import { runtimePolicyEngine } from "./runtime-policy.engine";
import { RuntimeComplianceOutput } from "./runtime-compliance.types";

export const runtimeComplianceEngine = {
  verify(): RuntimeComplianceOutput {
    const policy =
      runtimePolicyEngine.evaluate();

    return {
      compliant: policy.compliant,
      complianceLevel: policy.level,
      policy: policy.policy,
    };
  },
};