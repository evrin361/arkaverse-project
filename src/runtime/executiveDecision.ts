import type { ReactorState } from "../components/living-core/types";

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

  return state;
}