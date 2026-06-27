export type ExecutiveIntent =
  | "Idle"
  | "Observing"
  | "Processing"
  | "Responding"
  | "Synchronizing";

let currentIntent: ExecutiveIntent = "Idle";

export function getExecutiveIntent() {
  return currentIntent;
}

export function setExecutiveIntent(
  intent: ExecutiveIntent
) {
  currentIntent = intent;
}