
type EnergyFieldProps = {
behavior: "slow" | "medium" | "fast";
};

export function EnergyField({
  behavior,
}: EnergyFieldProps) {
const animation =
  behavior === "fast"
    ? "animate-energy-fast"
    : behavior === "medium"
    ? "animate-energy-medium"
    : "animate-energy-slow";
  return (
    <div className="absolute inset-0 flex items-center justify-center">

      <div
        className={`absolute w-[430px] h-[430px] rounded-full bg-cyan-400/5 blur-3xl ${animation}`}
      />

      <div
        className={`absolute w-[330px] h-[330px] rounded-full bg-cyan-300/5 blur-2xl ${animation}`}
      />

    </div>
  );
}