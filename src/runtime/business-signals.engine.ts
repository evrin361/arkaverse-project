import { operationalSignalsEngine } from "./operational-signals.engine";
import { BusinessSignals } from "./business-signals.types";

export const businessSignalsEngine = {
evaluate({
runtimeState,
identityState,
}: {
runtimeState: string;
identityState: string;
}): BusinessSignals {
const signals =
operationalSignalsEngine.evaluate({
runtimeState,
identityState,
});

return {
  systemReadiness:
    signals.health === "Healthy"
      ? "High"
      : "Normal",

  engagementLevel:
    signals.activity === "Active"
      ? "High"
      : "Low",

  operationalStability:
    signals.attention === "Focused"
      ? "Stable"
      : "Monitoring",
};

},
};
