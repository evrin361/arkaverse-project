import React from "react";
import { cn } from "../engine/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "glass";
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200";

  const variants = {
  primary:
    "bg-violet-600 hover:bg-violet-500 text-white",

  ghost:
    "bg-transparent text-white hover:bg-white/5",

  glass:
    "bg-white/5 backdrop-blur-md border border-white/10 text-white",
};

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}