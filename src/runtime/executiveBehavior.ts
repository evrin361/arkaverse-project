let behavior = "neutral";

export function getExecutiveBehavior() {
  return behavior;
}

export function updateExecutiveBehavior(
  confidence: number
) {

  if (confidence > 0.9) {

    behavior = "confident";

  } else if (confidence > 0.7) {

    behavior = "stable";

  } else {

    behavior = "uncertain";

  }

}