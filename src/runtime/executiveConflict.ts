import type { ReactorState } from "../components/living-core/types";

export function resolveConflict(
  proposed: ReactorState,
  previous: ReactorState
): ReactorState {

  if (
    previous === "processing" &&
    proposed === "focused"
  ) {
    return previous;
  }

  return proposed;
}