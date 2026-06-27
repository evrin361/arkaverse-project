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
  signalSpeed: 0.45,
  signalGlow: 0.20,
  coreGlow: 0.35,
  coreScale: 0.96,
};

  case "focused":
    return {
  energy: "medium",
  signalSpeed: 0.85,
  signalGlow: 0.60,
  coreGlow: 0.75,
  coreScale: 1.02,
};

  case "thinking":
    return {
  energy: "medium",
  signalSpeed: 0.35,
  signalGlow: 1.00,
  coreGlow: 1.05,
  coreScale: 1.08,
};

  case "processing":
    return {
  energy: "fast",
  signalSpeed: 1.60,
  signalGlow: 1.30,
  coreGlow: 1.35,
  coreScale: 1.15,
};
}
}