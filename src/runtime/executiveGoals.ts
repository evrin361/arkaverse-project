let currentGoal = "Maintain Stability";

export function setExecutiveGoal(
  goal: string
) {
  currentGoal = goal;
}

export function getExecutiveGoal() {
  return currentGoal;
}