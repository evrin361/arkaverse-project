"use client";

import { getLastState } from "./executiveMemory";

export function useExecutiveMemory() {
  return {
    lastState: getLastState(),
  };
}