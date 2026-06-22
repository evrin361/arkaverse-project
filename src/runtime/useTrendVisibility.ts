"use client";

import { trendVisibilityEngine } from "./trend-visibility.engine";

export function useTrendVisibility() {
  return trendVisibilityEngine.analyze();
}