"use client";

import { getExecutiveIdentity } from "@/runtime/executiveIdentity";
import { getExecutiveMission } from "@/runtime/executiveMission";
import { Panel } from "@/components/ui/Panel";

export function ExecutivePanel() {
  const identity = getExecutiveIdentity();
  const mission = getExecutiveMission();

  return (
  <Panel title="Executive Core">
      

      <div className="space-y-2 text-sm">
        <div>
          <strong>Name:</strong> {identity.name}
        </div>

        <div>
          <strong>Version:</strong> {identity.version}
        </div>

        <div>
          <strong>Mode:</strong> {identity.mode}
        </div>

        <div>
          <strong>Mission:</strong> {mission}
        </div>
      </div>
     </Panel>
);
}