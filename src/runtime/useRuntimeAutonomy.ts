"use client";

import { runtimeAutonomyEngine }
  from "./runtime-autonomy.engine";

export function useRuntimeAutonomy() {
  return runtimeAutonomyEngine.evaluate();
}