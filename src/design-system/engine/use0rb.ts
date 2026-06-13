"use client";

import { useState } from "react";
import { orbEngine, OrbState } from "./orb.engine";

export function useOrb() {
  const [state, setState] = useState<OrbState>("idle");

  const setOrbState = (newState: OrbState) => {
    setState(newState);
    orbEngine.setState(newState);
  };

  return {
    state,
    setOrbState,

    glow: orbEngine.getGlow(),
    scale: orbEngine.getScale(),
    blur: orbEngine.getBlur(),
  };
}