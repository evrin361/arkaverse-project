
"use client";

import { useIdentityRuntime } from "@/runtime/useIdentityRuntime";

export function IdentityPanel() {
  const runtime = useIdentityRuntime();

  const { identity, summary, operational } =
    runtime.snapshot;

  return (
    <div className="rounded-lg border border-slate-700/30 p-5">
      <h2 className="mb-4 text-lg font-semibold">
        Identity Core
      </h2>

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
          State: {identity.state}
        </div>

        <hr className="border-slate-700/30 my-3" />

        <div>
          Summary: {summary}
        </div>

        <div>
          Operational: {operational}
        </div>
      </div>
    </div>
  );
}
