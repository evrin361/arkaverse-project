import type { ReactorState } from "../components/living-core/types";

type LearningRecord = {
  state: ReactorState;
  prediction: string;
  timestamp: number;
};

const history: LearningRecord[] = [];

export function learnExecutiveDecision(
  state: ReactorState,
  prediction: string
) {

  history.push({
    state,
    prediction,
    timestamp: Date.now(),
  });

}

export function getExecutiveLearning() {
  return history;
}