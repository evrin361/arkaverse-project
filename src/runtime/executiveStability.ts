let stability = 1;

export function setExecutiveStability(
  value: number
) {
  stability = Math.max(
    0,
    Math.min(1, value)
  );
}

export function getExecutiveStability() {
  return stability;
}