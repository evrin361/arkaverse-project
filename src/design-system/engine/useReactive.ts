"use client";

import { useState } from "react";
import { reactiveEngine, ReactiveState } from "./reactive.engine";

export function useReactive() {
  const [state, setState] = useState<ReactiveState>("idle");

  const setReactiveState = (newState: ReactiveState) => {
    setState(newState);
    reactiveEngine.setState(newState);
  };

  return {
    state,
    setReactiveState,

    motion: reactiveEngine.getMotion(),
    visual: reactiveEngine.getVisual(),
  };
}