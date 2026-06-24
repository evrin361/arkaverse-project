import { runtimeAuditEngine } from "./runtime-audit.engine";

export function useRuntimeAudit() {
  return runtimeAuditEngine.audit();
}