import type { MemoryInspectorOutput } from "./memory-inspector.types";

export interface MemoryRuntime {
  snapshot: MemoryInspectorOutput | null;
}

export const defaultMemoryRuntime: MemoryRuntime = {
  snapshot: null,
};