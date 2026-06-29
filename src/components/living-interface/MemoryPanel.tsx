"use client";

import { useExecutiveMemory } from "@/runtime/useExecutiveMemory";
export function MemoryPanel() {
const { lastState } = useExecutiveMemory();
  return (
    <div className="rounded-lg border border-slate-700/30 p-5 space-y-3">
      <div className="text-xl font-bold">
        Memory Core
      </div>

      <div>
        Last Reactor State: <strong>{lastState}</strong>
      </div>

      <div>
        Memory Status: Ready
      </div>

      <div>
        Working Memory
      </div>

      <div>
        Long-term Memory
      </div>

      <div>
        Experience Log
      </div>

      <div>
        Learning State
      </div>
    </div>
  );
}