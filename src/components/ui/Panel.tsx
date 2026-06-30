import type { ReactNode } from "react";

type PanelProps = {
  title?: string;

  children: ReactNode;
};

export function Panel({
  title,
  children,
}: PanelProps) {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-700/40
        bg-slate-900/70
        p-6
        shadow-xl
        backdrop-blur-sm
      "
    >
      {title && (
        <h2
          className="
            mb-5
            text-lg
            font-semibold
            tracking-wide
          "
        >
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}