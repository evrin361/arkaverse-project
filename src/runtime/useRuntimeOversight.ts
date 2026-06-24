import { runtimeOversightEngine } from "./runtime-oversight.engine";

export function useRuntimeOversight() {
  return runtimeOversightEngine.oversee();
}