"use client";

import { runtimeComplianceEngine }
  from "./runtime-compliance.engine";

export function useRuntimeCompliance() {
  return runtimeComplianceEngine.verify();
}