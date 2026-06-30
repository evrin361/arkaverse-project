"use client";

import type { RuntimePanel } from "@/runtime/runtimeUI";
type RuntimeNavigationProps = {
  activePanel: RuntimePanel;
  onSelect: (panel: RuntimePanel) => void;
};

const items: {
  id: RuntimePanel;
  label: string;
}[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "executive", label: "Executive" },
  { id: "business", label: "Business" },
  { id: "memory", label: "Memory" },
  { id: "living", label: "Living" },
  { id: "identity", label: "Identity" },
];

export function RuntimeNavigation({
  activePanel,
  onSelect,
}: RuntimeNavigationProps) {
  return (
    <nav className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={[
            "rounded-xl px-4 py-2 transition-all",
            activePanel === item.id
              ? "bg-cyan-500 text-slate-950"
              : "bg-slate-800 text-slate-200 hover:bg-slate-700",
          ].join(" ")}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}