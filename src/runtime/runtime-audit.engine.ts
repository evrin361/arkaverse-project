import { runtimeValidationEngine } from "./runtime-validation.engine";
import { RuntimeAuditOutput } from "./runtime-audit.types";

export const runtimeAuditEngine = {
  audit(): RuntimeAuditOutput {
    const validation =
  runtimeValidationEngine.validate();

    return {
      audited: validation.valid,
      auditLevel: validation.validationLevel,
      validationLevel:
        validation.validationLevel,
    };
  },
};