import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        bg-slate-800
        text-slate-200
      "
    >
      {children}
    </span>
  );
}