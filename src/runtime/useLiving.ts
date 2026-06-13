"use client";

import { useState } from "react";
import { livingEngine } from "./living.engine";
import { UIEventType } from "./event.types";
import { LivingBehavior } from "./living.types";

export function useLiving() {
  const [behavior, setBehavior] = useState<LivingBehavior | null>(null);

  const trigger = (event: UIEventType) => {
    const result = livingEngine.react(event);
    setBehavior(result);
  };

  return {
    behavior,
    trigger,
  };
}