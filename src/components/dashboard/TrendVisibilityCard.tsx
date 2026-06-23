type Props = {
  direction: string;
};

export function TrendVisibilityCard(
  props: Props
) {
  return (
    <div className="border border-cyan-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Trend Visibility
      </div>

      <div>
        Direction: {props.direction}
      </div>
    </div>
  );
}