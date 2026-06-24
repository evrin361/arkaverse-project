import { runtimeOptimizationEngine } from "./runtime-optimization.engine";
import { RuntimeAutonomyOutput } from "./runtime-autonomy.types";

export const runtimeAutonomyEngine = {
  evaluate(): RuntimeAutonomyOutput {
    const optimization =
  runtimeOptimizationEngine.optimize();

    let autonomyLevel = "moderate";

    if (
      optimization.optimizationLevel
        .toLowerCase()
        .includes("high")
    ) {
      autonomyLevel = "high";
    }

    return {
      autonomyLevel,
      decisionMode:
        autonomyLevel === "high"
          ? "autonomous"
          : "assisted",
      optimizationLevel:
        optimization.optimizationLevel,
      requiresHumanIntervention:
        autonomyLevel !== "high",
    };
  },
};