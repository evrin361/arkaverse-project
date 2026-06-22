"use client";

import { operationalHealthEngine } from "./operational-health.engine";

export function useOperationalHealth() {
  return operationalHealthEngine.inspect();
}