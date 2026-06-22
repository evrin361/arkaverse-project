import { recommendationHistoryEngine } from "./recommendation-history.engine";
import { OperationalHealthOutput } from "./operational-health.types";

export const operationalHealthEngine = {
  inspect(): OperationalHealthOutput {
    const recommendations =
      recommendationHistoryEngine.getAll();

    const count = recommendations.length;

    const score =
      count >= 10
        ? 100
        : count >= 5
        ? 75
        : count >= 1
        ? 50
        : 25;

    const status =
      score >= 75
        ? "Healthy"
        : score >= 50
        ? "Warning"
        : "Critical";

    return {
      status,
      score,
      recommendationCount: count,
    };
  },
};