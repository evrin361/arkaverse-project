export type MemoryInspectorOutput = {
  systemStatus: string | null;

  lastEventType: string | null;
  lastEventTimestamp: number | null;

  lastBehaviorState: string | null;
  lastBehaviorIntensity: string | null;
};