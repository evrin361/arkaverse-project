"use client";

import { runtimeGovernanceEngine }
  from "./runtime-governance.engine";

export function useRuntimeGovernance() {
  return runtimeGovernanceEngine.govern();
}