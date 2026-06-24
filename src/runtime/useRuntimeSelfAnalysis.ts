"use client";

import { runtimeSelfAnalysisEngine }
  from "./runtime-self-analysis.engine";

export function useRuntimeSelfAnalysis() {
  return runtimeSelfAnalysisEngine.analyze();
}