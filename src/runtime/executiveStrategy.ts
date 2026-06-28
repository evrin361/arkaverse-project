import type { ReactorState } from "../components/living-core/types";

let currentStrategy = "";

export function buildExecutiveStrategy(
  state: ReactorState
) {

  switch (state) {

    case "idle":
      currentStrategy = "Observe First";
      break;

    case "focused":
      currentStrategy = "Collect Before Acting";
      break;

    case "thinking":
      currentStrategy = "Evaluate Alternatives";
      break;

    case "processing":
      currentStrategy = "Execute Safely";
      break;

  }

}

export function getExecutiveStrategy() {

  return currentStrategy;

}