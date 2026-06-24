import { runtimeComplianceEngine } from "./runtime-compliance.engine";
import { RuntimeValidationOutput } from "./runtime-validation.types";

export const runtimeValidationEngine = {
  validate(): RuntimeValidationOutput {
    const compliance =
  runtimeComplianceEngine.verify();

    const valid =
      compliance.compliant;

    return {
      valid,
      validationLevel:
        valid ? "VALID" : "INVALID",
      complianceLevel:
        compliance.complianceLevel,
    };
  },
};