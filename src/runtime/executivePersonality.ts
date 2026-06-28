let personality = "Balanced";

export function updateExecutivePersonality(
  behavior: string
) {

  switch (behavior) {

    case "confident":
      personality = "Decisive";
      break;

    case "stable":
      personality = "Reliable";
      break;

    case "uncertain":
      personality = "Cautious";
      break;

    default:
      personality = "Balanced";

  }

}

export function getExecutivePersonality() {
  return personality;
}