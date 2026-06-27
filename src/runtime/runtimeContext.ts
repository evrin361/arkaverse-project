export type RuntimeContext = {
  activeUsers: number;

  aiBusy: boolean;

  memoryLoaded: boolean;

  systemHealthy: boolean;
};

export const defaultRuntimeContext: RuntimeContext = {
  activeUsers: 0,

  aiBusy: false,

  memoryLoaded: false,

  systemHealthy: true,
};