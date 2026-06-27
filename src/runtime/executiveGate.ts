import type { ReactorState } from "../components/living-core/types";

export function shouldExecuteDecision(
  previous: ReactorState,
  proposed: ReactorState
): boolean {

  if (previous === proposed) {
    return false;
  }

  return true;
}