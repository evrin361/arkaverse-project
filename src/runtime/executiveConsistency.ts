let consistency = 1;

export function getExecutiveConsistency() {
  return consistency;
}

export function setExecutiveConsistency(value: number) {
  consistency = Math.max(
    0,
    Math.min(1, value)
  );
}