import { operationalHealthEngine } from "./operational-health.engine";
import { trendVisibilityEngine } from "./trend-visibility.engine";
import { statusSummaryEngine } from "./status-summary.engine";
import { ExecutiveDashboardOutput } from "./executive-dashboard.types";

export const executiveDashboardEngine = {
  build(): ExecutiveDashboardOutput {
    const health =
      operationalHealthEngine.inspect();

    const trend =
      trendVisibilityEngine.analyze();

    const summary =
      statusSummaryEngine.summarize();

    return {
      health: health.status,
      trend: trend.direction,
      summary: summary.summary,
    };
  },
};