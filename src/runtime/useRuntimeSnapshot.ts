
"use client";

import { runtimeSnapshotCoordinator } from "./runtimeSnapshotCoordinator";

export function useRuntimeSnapshot() {
  const snapshot = runtimeSnapshotCoordinator.inspect();

  return {
    snapshot,
  };
}
