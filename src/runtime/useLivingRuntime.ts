
"use client";

import { useEffect } from "react";

import { livingRuntimeEngine } from "./living-runtime.engine";
import { refreshLivingRuntime } from "./livingRuntimeActions";
import { getLivingRuntime } from "./livingRuntimeStore";
import { useRuntimeSubscription } from "./useRuntimeSubscription";

export function useLivingRuntime() {
  const runtime =
    useRuntimeSubscription(getLivingRuntime);

  useEffect(() => {
    const snapshot =
      livingRuntimeEngine.inspect();

    refreshLivingRuntime(snapshot);
  }, []);

  return runtime;
}

