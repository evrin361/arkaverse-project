"use client";

import { useRuntimeUI } from "@/runtime/useRuntimeUI";
import { ExecutivePanel } from "./ExecutivePanel";
import { BusinessPanel } from "./BusinessPanel";

import type { RuntimePanel } from "@/runtime/runtimeUI";
import type { ReactNode } from "react";

import { MemoryPanel } from "./MemoryPanel";

import { LivingRuntimePanel } from "./LivingRuntimePanel";

export function RuntimePanelRouter() {
  const ui = useRuntimeUI();


  const panels = {
  dashboard: (
    <div>Dashboard Home</div>
  ),

  executive: <ExecutivePanel />,

  business: <BusinessPanel />,

  memory: <MemoryPanel />,

  living: <LivingRuntimePanel />,

  identity: (
    <div>Identity Panel (Coming Soon)</div>
  ),
} satisfies Record<RuntimePanel, ReactNode>;

  return (
    <div className="mt-6 rounded-lg border border-cyan-700/30 p-4">
      <div className="text-sm opacity-60 mb-2">
        Runtime Panel
      </div>


{panels[ui.activePanel]}
     
    </div>
  );
}
