"use client";

import { runtimeOptimizationEngine }
  from "./runtime-optimization.engine";

export function useRuntimeOptimization() {
  return runtimeOptimizationEngine.optimize();
}