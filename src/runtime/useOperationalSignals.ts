"use client";

import { useRuntimeInspector } from "./useRuntimeInspector";
import { useIdentityInspector } from "./useIdentityInspector";
import { operationalSignalsEngine } from "./operational-signals.engine";

export function useOperationalSignals() {
const runtime = useRuntimeInspector();
const identity = useIdentityInspector();

return operationalSignalsEngine.evaluate({
runtimeState: runtime.runtimeState,
identityState: identity.identityState,
});
}
