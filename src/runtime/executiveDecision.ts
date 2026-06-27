import type { ReactorState } from "../components/living-core/types";
import { resolveConflict } from "./executiveConflict";
import { shouldExecuteDecision } from "./executiveGate";
import { predictExecutiveOutcome } from "./executivePrediction";
import { buildExecutiveReasoning } from "./executiveReasoning";

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

import {
  learnExecutiveDecision,
  getExecutiveLearning,
} from "./executiveLearning";

export function makeExecutiveDecision(
  state: ReactorState
): ReactorState {

  const intent = getExecutiveIntent();

const memory = getLastState();

const context = buildExecutiveContext(state);

const prediction =
  predictExecutiveOutcome(state);




console.log(
  "[Context]",
  context
);


console.log(
  "[Prediction]",
  prediction
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

learnExecutiveDecision(
  state,
  prediction
);

console.log(
  "[Learning]",
  getExecutiveLearning()
);


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

const reasoning =
  buildExecutiveReasoning(state);

console.log(
  "[Reasoning]",
  reasoning
);




return resolveConflict(
  state,
  memory
);
}