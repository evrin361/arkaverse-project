export type OperationalSignals = {
health: string;
activity: string;
attention: string;
};

export const operationalSignalsEngine = {
evaluate({
runtimeState,
identityState,
}: {
runtimeState: string;
identityState: string;
}): OperationalSignals {
return {
health:
runtimeState === "interacting"
? "Healthy"
: "Stable",

  activity:
    runtimeState === "interacting"
      ? "Active"
      : "Idle",

  attention:
    identityState === "focused"
      ? "Focused"
      : "Normal",
};

},
};
