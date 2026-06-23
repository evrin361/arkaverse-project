type Props = {
  systemReadiness: string;
  engagementLevel: string;
  operationalStability: string;
};

export function BusinessSignalsCard(props: Props) {
  return (
    <div className="border border-pink-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Business Signals
      </div>

      <div className="mb-2">
        System Readiness: {props.systemReadiness}
      </div>

      <div className="mb-2">
        Engagement Level: {props.engagementLevel}
      </div>

      <div>
        Operational Stability: {props.operationalStability}
      </div>
    </div>
  );
}