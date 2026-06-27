import type { ReactorState } from "../components/living-core/types";

import { buildExecutiveContext } from "./executiveContext";

export function buildExecutiveReasoning(
  state: ReactorState
): string {

  const context = buildExecutiveContext(state);

  if (!context.changed) {
    return "Maintaining current state because no meaningful change was detected.";
  }

  return `Transitioning from ${context.previousState} to ${context.currentState} with intent "${context.intent}".`;
}