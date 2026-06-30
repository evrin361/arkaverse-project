
"use client";

import { useRuntimeSnapshot } from "@/runtime/useRuntimeSnapshot";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";

export function RuntimeOverviewPanel() {
  const { snapshot } = useRuntimeSnapshot();

  return (
<Panel title="Runtime Overview">  
      

      <div className="space-y-4 text-sm">
        <div>
          <strong>Identity</strong>
          <div>{snapshot.runtimes.identity.summary}</div>
        </div>

        <div>
          <strong>Memory</strong>
<div className="mt-1">
  <Badge>{snapshot.runtimes.memory.systemStatus}</Badge>
</div>        </div>

        <div>
          <strong>Living</strong>
<div className="mt-1">
  <Badge>{snapshot.runtimes.living.lifeState}</Badge>
</div>        </div>
      </div>
    </Panel>
  );
}
