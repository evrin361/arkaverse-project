
export type LivingRuntimeSnapshot = {
  lifeState: "idle" | "active" | "focused";

  energy: number;

  presence: number;

  activity: number;

  heartbeat: number;
};

export type LivingRuntimeState = {
  snapshot: LivingRuntimeSnapshot | null;
};
