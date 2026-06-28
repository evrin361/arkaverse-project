import type { ReactorState } from "../components/living-core/types";

let currentPlan = "";

export function buildExecutivePlan(
  state: ReactorState
) {

  switch (state) {

    case "idle":
      currentPlan = "Observe";
      break;

    case "focused":
      currentPlan = "Collect Information";
      break;

    case "thinking":
      currentPlan = "Generate Solution";
      break;

    case "processing":
      currentPlan = "Execute Response";
      break;

  }

}

export function getExecutivePlan() {

  return currentPlan;

}