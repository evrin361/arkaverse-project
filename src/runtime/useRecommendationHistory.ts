"use client";

import { recommendationHistoryEngine }
from "./recommendation-history.engine";

export function useRecommendationHistory() {
return recommendationHistoryEngine.getAll();
}
