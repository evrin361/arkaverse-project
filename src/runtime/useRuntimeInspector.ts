"use client";

import { runtimeInspectorEngine } from "./runtime-inspector.engine";

export function useRuntimeInspector() {
  return runtimeInspectorEngine.inspect();
}