
"use client";

import { useRuntimeSnapshot } from "@/runtime/useRuntimeSnapshot";

export function RuntimeOverviewPanel() {
  const { snapshot } = useRuntimeSnapshot();

  return (
    <div className="rounded-lg border border-cyan-700/30 p-5">
      <h2 className="mb-4 text-lg font-semibold">
        Runtime Overview
      </h2>

      <div className="space-y-4 text-sm">
        <div>
          <strong>Identity</strong>
          <div>{snapshot.identity.summary}</div>
        </div>

        <div>
          <strong>Memory</strong>
          <div>Status: {snapshot.memory.systemStatus}</div>
        </div>

        <div>
          <strong>Living</strong>
          <div>Life State: {snapshot.living.lifeState}</div>
        </div>
      </div>
    </div>
  );
}
