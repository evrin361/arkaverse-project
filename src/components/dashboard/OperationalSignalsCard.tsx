type Props = {
  health: string;
  activity: string;
  attention: string;
};

export function OperationalSignalsCard(props: Props) {
  return (
    <div className="border border-purple-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Operational Signals
      </div>

      <div className="mb-2">
        Health: {props.health}
      </div>

      <div className="mb-2">
        Activity: {props.activity}
      </div>

      <div>
        Attention: {props.attention}
      </div>
    </div>
  );
}