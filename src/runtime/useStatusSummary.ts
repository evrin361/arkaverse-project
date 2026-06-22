"use client";

import { statusSummaryEngine } from "./status-summary.engine";

export function useStatusSummary() {
  return statusSummaryEngine.summarize();
}