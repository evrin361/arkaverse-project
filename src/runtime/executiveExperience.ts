import type { ReactorState } from "../components/living-core/types";

interface ExecutiveExperience {

  state: ReactorState;

  prediction: string;

  confidence: number;

  timestamp: number;

}

const experiences: ExecutiveExperience[] = [];

export function rememberExecutiveExperience(

  state: ReactorState,

  prediction: string,

  confidence: number

) {

  experiences.push({

    state,

    prediction,

    confidence,

    timestamp: Date.now(),

  });

}

export function getExecutiveExperience() {

  return experiences;

}

export function clearExecutiveExperience() {

  experiences.length = 0;

}