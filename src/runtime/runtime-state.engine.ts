import { operationalHealthEngine } from "./operational-health.engine";
import { trendVisibilityEngine } from "./trend-visibility.engine";
import { statusSummaryEngine } from "./status-summary.engine";
import { executiveDashboardEngine } from "./executive-dashboard.engine";

import { RuntimeStateOutput } from "./runtime-state.types";

export const runtimeStateEngine = {
  evaluate(): RuntimeStateOutput {
    const health =
      operationalHealthEngine.inspect();

    const trend =
      trendVisibilityEngine.analyze();

    const summary =
      statusSummaryEngine.summarize();

    const executive =
      executiveDashboardEngine.build();

    let overallState = "Stable";

    if (
      health.status === "Healthy" &&
      trend.direction === "Growing"
    ) {
      overallState = "Growing";
    }

    if (
      health.status === "Healthy" &&
      trend.direction === "Stable"
    ) {
      overallState = "Focused";
    }

    return {
      health: health.status,
      trend: trend.direction,
      summary: summary.summary,
      executiveHealth: executive.health,
      executiveTrend: executive.trend,
      overallState,
    };
  },
};