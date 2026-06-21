import { RecommendationOutput } from "./recommendation.types";
import { recommendationHistoryEngine }
from "./recommendation-history.engine";
export const recommendationEngine = {
evaluate({
readiness,
engagement,
stability,
}: {
readiness: string;
engagement: string;
stability: string;
}): RecommendationOutput {
if (
readiness === "High" &&
engagement === "High"
) {

recommendationHistoryEngine.add({
  title: "...",
  action: "...",
  timestamp: Date.now(),
});

return {
title: "Ready",
action: "Proceed with execution",
};
}


if (engagement === "Low") {
recommendationHistoryEngine.add({
  title: "...",
  action: "...",
  timestamp: Date.now(),
});

  return {
    title: "Engagement",
    action: "Increase interaction",
  };
}

if (stability === "Monitoring") {

recommendationHistoryEngine.add({
  title: "...",
  action: "...",
  timestamp: Date.now(),
});

  return {
    title: "Stability",
    action: "Observe system behavior",
  };
}

recommendationHistoryEngine.add({
  title: "...",
  action: "...",
  timestamp: Date.now(),
});

return {
  title: "Normal",
  action: "Continue monitoring",
};


},
};
