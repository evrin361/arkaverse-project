"use client";

import { runtimeSelfEvolutionEngine }
  from "./runtime-self-evolution.engine";

export function useRuntimeSelfEvolution() {
  return runtimeSelfEvolutionEngine.evolve();
}