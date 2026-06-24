import { runtimeValidationEngine } from "./runtime-validation.engine";

export function useRuntimeValidation() {
  return runtimeValidationEngine.validate();
}