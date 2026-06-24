"use client";

import { runtimeAdaptationEngine }
  from "./runtime-adaptation.engine";

export function useRuntimeAdaptation() {
  return runtimeAdaptationEngine.adapt();
}