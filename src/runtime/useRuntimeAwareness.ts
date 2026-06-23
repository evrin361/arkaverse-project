"use client";

import { runtimeAwarenessEngine } from "./runtime-awareness.engine";

export function useRuntimeAwareness() {
  return runtimeAwarenessEngine.evaluate();
}