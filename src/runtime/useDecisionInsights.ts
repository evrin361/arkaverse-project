"use client";

import { decisionInsightsEngine }
from "./decision-insights.engine";

export function useDecisionInsights() {
  return decisionInsightsEngine.inspect();
}