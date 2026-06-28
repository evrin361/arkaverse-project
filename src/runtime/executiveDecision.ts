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
  getExecutiveConfidence,
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

import {

  rememberExecutiveExperience,

  getExecutiveExperience,

} from "./executiveExperience";

import {
  updateExecutiveBehavior,
  getExecutiveBehavior,
} from "./executiveBehavior";


import {
  updateExecutivePersonality,
  getExecutivePersonality,
} from "./executivePersonality";

import {
  setExecutiveGoal,
  getExecutiveGoal,
} from "./executiveGoals";


import {
  buildExecutivePlan,
  getExecutivePlan,
} from "./executivePlanning";


import {
  buildExecutiveStrategy,
  getExecutiveStrategy,
} from "./executiveStrategy";

import {
  evaluateExecutiveDecision,
  getExecutiveEvaluation,
} from "./executiveEvaluation";

import {
  adaptExecutiveBehavior,
  getExecutiveAdaptation,
} from "./executiveAdaptation";

import {
  getExecutiveMission,
} from "./executiveMission";

import {
  getExecutiveIdentity,
} from "./executiveIdentity";

export function makeExecutiveDecision(
  state: ReactorState
): ReactorState {

  const intent = getExecutiveIntent();

const memory = getLastState();

const context = buildExecutiveContext(state);

const mission =
  getExecutiveMission();

  const identity =
  getExecutiveIdentity();

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
  mission,
  identity,
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


rememberExecutiveExperience(

  state,

  prediction,

  memory === state ? 1 : 0.75

);

console.log(

  "[Experience]",

  getExecutiveExperience()

);


if (memory === state) {

  setExecutiveConfidence(1);

} else {

  setExecutiveConfidence(0.75);

}

updateExecutiveBehavior(
  getExecutiveConfidence()
);

console.log(
  "[Behavior]",
  getExecutiveBehavior()
);

updateExecutivePersonality(
  getExecutiveBehavior()
);

console.log(
  "[Personality]",
  getExecutivePersonality()
);


if (
  getExecutiveBehavior() === "confident"
) {

  setExecutiveGoal(
    "Optimize Runtime"
  );

} else if (
  getExecutiveBehavior() === "stable"
) {

  setExecutiveGoal(
    "Maintain Stability"
  );

} else {

  setExecutiveGoal(
    "Reduce Uncertainty"
  );

}

console.log(
  "[Goal]",
  getExecutiveGoal()
);


buildExecutivePlan(state);

buildExecutiveStrategy(state);

evaluateExecutiveDecision(state);

adaptExecutiveBehavior(
  getExecutiveEvaluation()
);


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

console.log(
  "[Planning]",
  getExecutivePlan()
);


const reasoning =
  buildExecutiveReasoning(state);

  console.log(
  "[Strategy]",
  getExecutiveStrategy()
);

console.log(
  "[Evaluation]",
  getExecutiveEvaluation()
);


console.log(
  "[Adaptation]",
  getExecutiveAdaptation()
);


console.log(
  "[Mission]",
  mission
);

console.log(
  "[Identity]",
  identity
);


console.log(
  "[Reasoning]",
  reasoning
);




return resolveConflict(
  state,
  memory
);
}