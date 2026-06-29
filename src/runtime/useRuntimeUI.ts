"use client";

import { getRuntimeUI } from "./runtimeUIStore";
import { useRuntimeSubscription } from "./useRuntimeSubscription";

export function useRuntimeUI() {
  return useRuntimeSubscription(getRuntimeUI);
}