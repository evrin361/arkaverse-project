import { runtimeStrategicEngine } from "./runtime-strategic.engine";
import { RuntimeIntelligenceOutput } from "./runtime-intelligence.types";

export const runtimeIntelligenceEngine = {
  think(): RuntimeIntelligenceOutput {
    const strategic =
      runtimeStrategicEngine.strategize();

    return {
      intelligenceActive:
        strategic.strategicActive,
      intelligenceLevel: "intelligent",
      strategicLevel:
        strategic.strategicLevel,
    };
  },
};