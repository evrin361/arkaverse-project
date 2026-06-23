type Props = {
  health: string;
  trend: string;
  summary: string;
};

export function ExecutiveDashboardCard(
  props: Props
) {
  return (
    <div className="border border-white/20 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Executive Dashboard
      </div>

      <div className="mb-2">
        Health: {props.health}
      </div>

      <div className="mb-2">
        Trend: {props.trend}
      </div>

      <div>
        Summary: {props.summary}
      </div>
    </div>
  );
}