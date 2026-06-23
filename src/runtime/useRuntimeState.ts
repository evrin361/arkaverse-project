"use client";

import { runtimeStateEngine } from "./runtime-state.engine";

export function useRuntimeState() {
  return runtimeStateEngine.evaluate();
}