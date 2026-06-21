"use client";

import { useBusinessSignals } from "./useBusinessSignals";
import { recommendationEngine } from "./recommendation.engine";

export function useRecommendation() {
const business = useBusinessSignals();

return recommendationEngine.evaluate({
readiness: business.systemReadiness,
engagement: business.engagementLevel,
stability: business.operationalStability,
});
}
