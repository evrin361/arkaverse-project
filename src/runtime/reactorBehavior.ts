import type { ReactorState } from "../components/living-core/types";

export type ReactorBehavior = {
  energy: "slow" | "medium" | "fast";

  signalSpeed: number;
  signalGlow: number;

  coreGlow: number;
  coreScale: number;
};

export function getReactorBehavior(
  state: ReactorState
): ReactorBehavior {
  switch (state) {

  case "idle":
    return {
      energy: "slow",
      signalSpeed: 0.6,
      signalGlow: 0.25,
      coreGlow: 0.45,
coreScale: 1,
    };

  case "focused":
    return {
      energy: "medium",
      signalSpeed: 1,
      signalGlow: 0.45,
      coreGlow: 0.70,
coreScale: 1.02,
    };

  case "thinking":
    return {
      energy: "medium",
      signalSpeed: 1.4,
      signalGlow: 0.70,
      coreGlow: 0.85,
coreScale: 1.05,
    };

  case "processing":
    return {
      energy: "fast",
      signalSpeed: 2,
      signalGlow: 1,
      coreGlow: 1,
coreScale: 1.08,
    };
}
}