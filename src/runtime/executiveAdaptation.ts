let adaptation = "Stable";

export function adaptExecutiveBehavior(
  evaluation: string
) {

  switch (evaluation) {

    case "Successful":
      adaptation = "Maintain";
      break;

    case "Productive":
      adaptation = "Improve";
      break;

    case "Reasonable":
      adaptation = "Adjust";
      break;

    default:
      adaptation = "Recover";

  }

}

export function getExecutiveAdaptation() {

  return adaptation;

}