"use client";

import { useEffect, useState } from "react";

import {
  subscribeRuntime,
} from "./runtimeObservable";

export function useRuntimeSubscription<T>(
  read: () => T
) {
  const [state, setState] = useState(read());

  useEffect(() => {
    return subscribeRuntime(() => {
      setState(read());
    });
  }, [read]);

  return state;
}