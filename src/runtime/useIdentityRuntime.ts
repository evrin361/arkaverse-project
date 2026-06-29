
"use client";

import { identityEngine } from "./identityEngine";

export function useIdentityRuntime() {
  const snapshot = identityEngine.inspect();

  return {
    snapshot,
  };
}