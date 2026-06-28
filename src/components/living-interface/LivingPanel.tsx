type LivingPanelProps = {
  title: string;
  children: React.ReactNode;
};

export default function LivingPanel({
  title,
  children,
}: LivingPanelProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/60
        p-5
        shadow-lg
      "
    >
      <h2
        className="
          mb-4
          text-lg
          font-semibold
          text-white
        "
      >
        {title}
      </h2>

      {children}
    </div>
  );
}