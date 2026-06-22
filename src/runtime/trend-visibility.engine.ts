import { recommendationHistoryEngine } from "./recommendation-history.engine";
import { TrendVisibilityOutput } from "./trend-visibility.types";

export const trendVisibilityEngine = {
  analyze(): TrendVisibilityOutput {
    const history =
  recommendationHistoryEngine.getAll();

    const count = history.length;

    return {
      direction:
        count >= 5
          ? "Growing"
          : "Stable",

      strength:
        count >= 10
          ? "Strong"
          : count >= 5
          ? "Medium"
          : "Weak",

      recommendationCount: count,
    };
  },
};