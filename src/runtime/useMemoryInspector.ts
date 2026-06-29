"use client";

import { useMemoryRuntime } from "./useMemoryRuntime";

export function useMemoryInspector() {
  const runtime = useMemoryRuntime();

  return {
    memory: runtime.snapshot,
  };
}