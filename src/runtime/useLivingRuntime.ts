
"use client";

import { useEffect } from "react";

import { livingEngine } from "./livingEngine";
import { refreshLivingRuntime } from "./livingRuntimeActions";
import { getLivingRuntime } from "./livingRuntimeStore";
import { useRuntimeSubscription } from "./useRuntimeSubscription";

export function useLivingRuntime() {
  const runtime =
    useRuntimeSubscription(getLivingRuntime);

  useEffect(() => {
    const snapshot =
      livingEngine.inspect();

    refreshLivingRuntime(snapshot);
  }, []);

  return runtime;
}

