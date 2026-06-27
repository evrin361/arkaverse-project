let confidence = 1;

export function setExecutiveConfidence(
  value: number
) {
  confidence = Math.max(
    0,
    Math.min(1, value)
  );
}

export function getExecutiveConfidence() {
  return confidence;
}