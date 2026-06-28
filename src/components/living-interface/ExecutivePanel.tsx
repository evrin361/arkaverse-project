"use client";

import { getExecutiveIdentity } from "@/runtime/executiveIdentity";
import { getExecutiveMission } from "@/runtime/executiveMission";

export function ExecutivePanel() {
  const identity = getExecutiveIdentity();
  const mission = getExecutiveMission();

  return (
    <div className="rounded-lg border border-cyan-700/30 p-5">
      <h2 className="text-xl font-bold mb-4">
        Executive Core
      </h2>

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
    </div>
  );
}