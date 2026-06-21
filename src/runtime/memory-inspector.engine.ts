import { memoryStore } from "../core/memory/memory-store";
import { MemoryInspectorOutput } from "./memory-inspector.types";

export const memoryInspectorEngine = {
  inspect(): MemoryInspectorOutput {
    const systemStatus =
      (memoryStore.get("system.status") as string) ?? null;

    const lastEvent =
      (memoryStore.get("last.event") as {
        type?: string;
        timestamp?: number;
      }) ?? {};

    const lastBehavior =
      (memoryStore.get("last.behavior") as {
        state?: string;
        intensity?: string;
      }) ?? {};

    return {
      systemStatus,

      lastEventType: lastEvent.type ?? null,
      lastEventTimestamp: lastEvent.timestamp ?? null,

      lastBehaviorState: lastBehavior.state ?? null,
      lastBehaviorIntensity: lastBehavior.intensity ?? null,
    };
  },
};