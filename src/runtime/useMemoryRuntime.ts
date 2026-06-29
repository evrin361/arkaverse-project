"use client";

import { useEffect } from "react";

import { refreshMemoryRuntime } from "./memoryRuntimeActions";
import { getMemoryRuntime } from "./memoryRuntimeStore";
import { useRuntimeSubscription } from "./useRuntimeSubscription";

export function useMemoryRuntime() {
  const runtime =
    useRuntimeSubscription(getMemoryRuntime);

  useEffect(() => {
    refreshMemoryRuntime();
  }, []);

  return runtime;
}