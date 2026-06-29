
"use client";

import { useLivingRuntime } from "@/runtime/useLivingRuntime";

export function LivingRuntimePanel() {
      const runtime = useLivingRuntime();

  const snapshot = runtime.snapshot;

  return (
    <div className="rounded-lg border border-slate-700/30 p-5">
      <h2 className="mb-4 text-lg font-semibold">
        Living Core
      </h2>

      {!snapshot ? (
        <div>Initializing...</div>
      ) : (
        <div className="space-y-2 text-sm">
          <div>
            Life State: {snapshot.lifeState}
          </div>

          <div>
            Energy: {snapshot.energy}
          </div>

          <div>
            Presence: {snapshot.presence}
          </div>

          <div>
            Activity: {snapshot.activity}
          </div>

          <div>
            Heartbeat: {snapshot.heartbeat}
          </div>
        </div>
      )}
    </div>
  );
}