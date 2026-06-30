
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
          <div>{snapshot.identity.summary}</div>
        </div>

        <div>
          <strong>Memory</strong>
<div className="mt-1">
  <Badge>{snapshot.memory.systemStatus}</Badge>
</div>        </div>

        <div>
          <strong>Living</strong>
<div className="mt-1">
  <Badge>{snapshot.living.lifeState}</Badge>
</div>        </div>
      </div>
    </Panel>
  );
}
