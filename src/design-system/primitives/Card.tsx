import React from "react";
import { cn } from "../engine/cn";
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-xl p-4 border",
        "bg-[rgba(255,255,255,0.04)]",
        "border-[rgba(255,255,255,0.08)]"
      )}
    >
      {children}
    </div>
  );
}