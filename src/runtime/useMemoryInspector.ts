"use client";

import { memoryInspectorEngine } from "./memory-inspector.engine";

export function useMemoryInspector() {
  const memory = memoryInspectorEngine.inspect();

  return {
    memory,
  };
}