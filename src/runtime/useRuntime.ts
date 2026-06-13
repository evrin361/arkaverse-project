"use client";

import { useState } from "react";
import { runtime, RuntimeState } from "./arkasphere.runtime";

export function useRuntime() {
  const [state, setState] = useState<RuntimeState>("booting");

  const setRuntimeState = (newState: RuntimeState) => {
    setState(newState);
    runtime.setState(newState);
  };

  return {
    state,
    setRuntimeState,
    boot: () => runtime.boot(),
  };
}