import { runtimeExecutiveEngine } from "./runtime-executive.engine";

export function useRuntimeExecutive() {
  return runtimeExecutiveEngine.execute();
}