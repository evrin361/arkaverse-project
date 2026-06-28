import type { ReactorState } from "../components/living-core/types";

let lastEvaluation = "";

export function evaluateExecutiveDecision(
  state: ReactorState
) {

  switch (state) {

    case "idle":
      lastEvaluation = "Stable";
      break;

    case "focused":
      lastEvaluation = "Productive";
      break;

    case "thinking":
      lastEvaluation = "Reasonable";
      break;

    case "processing":
      lastEvaluation = "Successful";
      break;

  }

}

export function getExecutiveEvaluation() {

  return lastEvaluation;

}