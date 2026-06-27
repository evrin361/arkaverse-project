import { getRuntimeContext } from "./runtimeStore";

export function isSystemBusy() {
  const runtime = getRuntimeContext();

  return (
    runtime.aiBusy ||
    runtime.activeUsers > 3
  );
}

export function isSystemHealthy() {
  return getRuntimeContext().systemHealthy;
}

export function hasMemoryLoaded() {
  return getRuntimeContext().memoryLoaded;
}