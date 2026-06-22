import { DecisionInsights } from "./decision-insights.types";

export const decisionInsightsEngine = {
  inspect(): DecisionInsights {
    return {
      mostFrequentRecommendation: null,
      count: 0,
    };
  },
};