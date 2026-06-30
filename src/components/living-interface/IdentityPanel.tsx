
"use client";

import { useIdentityRuntime } from "@/runtime/useIdentityRuntime";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";

export function IdentityPanel() {
  const runtime = useIdentityRuntime();

  const { identity, summary, operational } =
    runtime.snapshot;

  return (
<Panel title="Identity Core">
         

      <div className="space-y-2 text-sm">
        <div>
          Name: {identity.name}
        </div>

        <div>
          Version: {identity.version}
        </div>

        <div>
          Role: {identity.role}
        </div>

        <div>
          Mission: {identity.mission}
        </div>

        <div>
          Mode: {identity.mode}
        </div>

<div>
  State:
  <div className="mt-1">
    <Badge>{identity.state}</Badge>
  </div>
</div>
        <hr className="border-slate-700/30 my-3" />

        <div>
          Summary: {summary}
        </div>

        <div>
          Operational: {operational}
        </div>
      </div>
</Panel>  );
}
