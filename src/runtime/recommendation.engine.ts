import { RecommendationOutput } from "./recommendation.types";

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
return {
title: "Ready",
action: "Proceed with execution",
};
}


if (engagement === "Low") {
  return {
    title: "Engagement",
    action: "Increase interaction",
  };
}

if (stability === "Monitoring") {
  return {
    title: "Stability",
    action: "Observe system behavior",
  };
}

return {
  title: "Normal",
  action: "Continue monitoring",
};


},
};
