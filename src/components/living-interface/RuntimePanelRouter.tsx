"use client";

import { useRuntimeUI } from "@/runtime/useRuntimeUI";
import { ExecutivePanel } from "./ExecutivePanel";

export function RuntimePanelRouter() {
  const ui = useRuntimeUI();

  return (
    <div className="mt-6 rounded-lg border border-cyan-700/30 p-4">
      <div className="text-sm opacity-60 mb-2">
        Runtime Panel
      </div>

      {ui.activePanel === "executive" && (
  <ExecutivePanel />
)}
    </div>
  );
}