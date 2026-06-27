import type { ReactorState } from "../components/living-core/types";

import { getLastState } from "./executiveMemory";
import { getExecutiveIntent } from "./executiveIntent";

export type ExecutiveContext = {

  previousState: ReactorState;

  currentState: ReactorState;

  intent: string;

  changed: boolean;

};

export function buildExecutiveContext(
  currentState: ReactorState
): ExecutiveContext {

  const previousState = getLastState();

  return {

    previousState,

    currentState,

    intent: getExecutiveIntent(),

    changed: previousState !== currentState,

  };

}