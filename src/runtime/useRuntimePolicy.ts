"use client";

import { runtimePolicyEngine }
  from "./runtime-policy.engine";

export function useRuntimePolicy() {
  return runtimePolicyEngine.evaluate();
}