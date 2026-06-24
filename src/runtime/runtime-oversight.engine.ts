import { runtimeAuditEngine } from "./runtime-audit.engine";
import { RuntimeOversightOutput } from "./runtime-oversight.types";

export const runtimeOversightEngine = {
  oversee(): RuntimeOversightOutput {
    const audit =
      runtimeAuditEngine.audit();

    return {
      oversightActive: audit.audited,
      auditLevel: audit.auditLevel,
      oversightLevel: "supervised",
    };
  },
};