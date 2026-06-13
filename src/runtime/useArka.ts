"use client";

import { useState } from "react";
import { orchestrator } from "../core/orchestrator/arka.orchestrator";
import { LivingBehavior } from "./living.types";

export function useArka() {
  const [state, setState] = useState<LivingBehavior | null>(null);

  const trigger = (event: "click" | "hover" | "focus" | "load") => {
    const result = orchestrator.handle(event);
    setState(result);
  };

  return {
    state,
    trigger,
  };
}