import React from "react";
import { cn } from "../engine/cn";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full px-3 py-2 rounded-md",
        "bg-transparent border",
        "border-[rgba(255,255,255,0.12)]",
        "text-white outline-none"
      )}
    />
  );
}