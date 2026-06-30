
"use client";

import { useLivingRuntime } from "@/runtime/useLivingRuntime";
import { Panel } from "@/components/ui/Panel";

export function LivingRuntimePanel() {
      const runtime = useLivingRuntime();

  const snapshot = runtime.snapshot;

  return (
<Panel title="Living Core">
          

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
</Panel>  );
}