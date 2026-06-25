import { runtimeStrategicEngine } from "./runtime-strategic.engine";

export function useRuntimeStrategic() {
  return runtimeStrategicEngine.strategize();
}