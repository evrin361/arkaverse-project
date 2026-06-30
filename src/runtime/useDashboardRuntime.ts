import { useRuntimeSnapshot } from "@/runtime/useRuntimeSnapshot";

export function useDashboardRuntime() {
  const { snapshot } = useRuntimeSnapshot();
const cognitiveState =
  snapshot.runtimes.living.lifeState === "active"
    ? "Operational"
    : "Standby";

    const systemReadiness =
  snapshot.runtimes.living.lifeState === "active" &&
  snapshot.runtimes.memory.systemStatus === "READY"
    ? "Ready"
    : "Initializing";

    
  return {
    snapshot,

    identity: snapshot.runtimes.identity,
    living: snapshot.runtimes.living,
    memory: snapshot.runtimes.memory,

    cognitiveState,
    systemReadiness,

    
  };
}