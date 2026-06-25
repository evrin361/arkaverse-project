import { runtimeExecutiveEngine } from "./runtime-executive.engine";
import { RuntimeStrategicOutput } from "./runtime-strategic.types";

export const runtimeStrategicEngine = {
  strategize(): RuntimeStrategicOutput {
    const executive =
      runtimeExecutiveEngine.execute();

    return {
      strategicActive:
        executive.executiveActive,
      strategicLevel: "strategic",
      executiveLevel:
        executive.executiveLevel,
    };
  },
};