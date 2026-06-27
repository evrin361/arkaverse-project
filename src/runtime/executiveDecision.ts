import type { ReactorState } from "../components/living-core/types";
import { resolveConflict } from "./executiveConflict";
import { shouldExecuteDecision } from "./executiveGate";
import {
  getExecutiveIntent,
} from "./executiveIntent";

import {
  getLastState,
} from "./executiveMemory";

import {
  setExecutiveConfidence,
} from "./executiveConfidence";


import {
  setExecutiveStability,
} from "./executiveStability";

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

if (
  !shouldExecuteDecision(
    memory,
    state
  )
) {

  console.log(
    "[Decision] Stable State"
  );

  return memory;

}


if (memory === state) {

  setExecutiveConfidence(1);

} else {

  setExecutiveConfidence(0.75);

}

if (memory === state) {

  setExecutiveStability(1);

} else {

  setExecutiveStability(0.6);

}

return resolveConflict(
  state,
  memory
);
}