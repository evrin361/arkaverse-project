type ExecutiveIdentity = {
  name: string;
  version: string;
  mode: string;
};

let identity: ExecutiveIdentity = {
  name: "ARKA Executive",
  version: "1.0",
  mode: "Strategic",
};

export function getExecutiveIdentity() {
  return identity;
}

export function setExecutiveMode(
  mode: string
) {
  identity = {
    ...identity,
    mode,
  };
}