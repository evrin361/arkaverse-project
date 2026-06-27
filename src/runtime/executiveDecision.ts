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

import {
  setExecutiveConsistency,
  getExecutiveConsistency,
} from "./executiveConsistency";

import {
  buildExecutiveContext,
} from "./executiveContext";

export function makeExecutiveDecision(
  state: ReactorState
): ReactorState {

  const intent = getExecutiveIntent();

const memory = getLastState();

const context = buildExecutiveContext(state);

console.log(
  "[Context]",
  context
);

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

if (memory === state) {

  setExecutiveConsistency(1);

} else {

  setExecutiveConsistency(0.7);

}

console.log(
  "[Consistency]",
  getExecutiveConsistency()
);

return resolveConflict(
  state,
  memory
);
}