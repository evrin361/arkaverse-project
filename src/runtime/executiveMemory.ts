import type { ReactorState } from "../components/living-core/types";

let lastState: ReactorState = "idle";

export function getLastState() {
  return lastState;
}

export function rememberState(state: ReactorState) {
  lastState = state;
}