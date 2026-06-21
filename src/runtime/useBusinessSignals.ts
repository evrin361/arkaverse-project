"use client";

import { useRuntimeInspector } from "./useRuntimeInspector";
import { useIdentityInspector } from "./useIdentityInspector";
import { businessSignalsEngine } from "./business-signals.engine";

export function useBusinessSignals() {
const runtime = useRuntimeInspector();
const identity = useIdentityInspector();

return businessSignalsEngine.evaluate({
runtimeState: runtime.runtimeState,
identityState: identity.identityState,
});
}
