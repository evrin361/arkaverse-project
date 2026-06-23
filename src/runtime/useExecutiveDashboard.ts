"use client";

import { executiveDashboardEngine }
from "./executive-dashboard.engine";

export function useExecutiveDashboard() {
  return executiveDashboardEngine.build();
}