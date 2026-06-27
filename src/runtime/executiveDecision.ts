import type { ReactorState } from "../components/living-core/types";
import { resolveConflict } from "./executiveConflict";
import {
  getExecutiveIntent,
} from "./executiveIntent";

import {
  getLastState,
} from "./executiveMemory";

export function makeExecutiveDecision(
  state: ReactorState
): ReactorState {

  const intent = getExecutiveIntent();

const memory = getLastState();
  console.log(
    "[Decision]",
    {
      state,
      intent,
      memory,
    }
  );

if (memory === state) {

  console.log(
    "[Decision] Stable State"
  );

  return memory;

}

return resolveConflict(
  state,
  memory
);
}