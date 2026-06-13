"use client";

import { useState } from "react";

export type IdentityState =
  | "idle"
  | "hover"
  | "active"
  | "loading"
  | "focused";

export function useIdentity() {
  const [state, setState] = useState<IdentityState>("idle");

  const setIdentity = (newState: IdentityState) => {
    setState(newState);
  };

  return {
    state,
    setIdentity,

    // live values from engine
    visual: {
      glow: "dynamic",
      blur: "dynamic",
    },
    motion: {
      scale: "dynamic",
      transition: "dynamic",
    },
  };
}