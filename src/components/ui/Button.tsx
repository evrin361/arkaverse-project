import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "rounded-2xl",
        "px-4",
        "py-2",
        "font-medium",
        "transition-all",
        "duration-200",
        "bg-cyan-500",
        "text-slate-950",
        "hover:bg-cyan-400",
        "active:scale-95",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}