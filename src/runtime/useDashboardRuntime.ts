import { useRuntimeSnapshot } from "@/runtime/useRuntimeSnapshot";

export function useDashboardRuntime() {
  const { snapshot } = useRuntimeSnapshot();
const cognitiveState =
  snapshot.living.lifeState === "active"
    ? "Operational"
    : "Standby";

    const systemReadiness =
  snapshot.living.lifeState === "active" &&
  snapshot.memory.systemStatus === "READY"
    ? "Ready"
    : "Initializing";

    
  return {
    snapshot,

    identity: snapshot.identity,
    living: snapshot.living,
    memory: snapshot.memory,

    cognitiveState,
    systemReadiness,

    
  };
}