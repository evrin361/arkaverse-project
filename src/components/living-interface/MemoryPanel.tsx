"use client";

import { useExecutiveMemory } from "@/runtime/useExecutiveMemory";
import { Panel } from "@/components/ui/Panel";
export function MemoryPanel() {
const { lastState } = useExecutiveMemory();
  return (
  <Panel title="Memory Core">
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
      </Panel>
);
}