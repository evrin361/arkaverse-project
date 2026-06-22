import { operationalHealthEngine } from "./operational-health.engine";
import { trendVisibilityEngine } from "./trend-visibility.engine";
import { StatusSummaryOutput } from "./status-summary.types";

export const statusSummaryEngine = {
  summarize(): StatusSummaryOutput {
    const health =
      operationalHealthEngine.inspect();

    const trend =
      trendVisibilityEngine.analyze();

    let summary =
      "System is operating normally.";

    if (
      health.status === "Healthy" &&
      trend.direction === "Growing"
    ) {
      summary =
        "System is healthy and showing positive momentum.";
    }

    if (
      health.status === "Warning"
    ) {
      summary =
        "System requires attention and monitoring.";
    }

    if (
      health.status === "Critical"
    ) {
      summary =
        "System requires immediate intervention.";
    }

    return {
      health: health.status,
      trend: trend.direction,
      summary,
    };
  },
};