import { memoryInspectorEngine } from "./memory-inspector.engine";
import { updateMemoryRuntime } from "./memoryRuntimeStore";

export function refreshMemoryRuntime() {
  const snapshot =
    memoryInspectorEngine.inspect();

  updateMemoryRuntime({
    snapshot,
  });
}