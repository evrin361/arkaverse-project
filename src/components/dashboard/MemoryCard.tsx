type Props = {
  systemStatus: string | null;
  lastEventType: string | null;
  lastEventTimestamp: number | null;
  lastBehaviorState: string | null;
  lastBehaviorIntensity: string | null;
};

export function MemoryCard(props: Props) {
  return (
    <div className="border border-yellow-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Memory Inspector
      </div>

      <div className="mb-2">
        System Status: {props.systemStatus ?? "-"}
      </div>

      <div className="mb-2">
        Last Event Type: {props.lastEventType ?? "-"}
      </div>

      <div className="mb-2">
        Last Event Timestamp: {props.lastEventTimestamp ?? "-"}
      </div>

      <div className="mb-2">
        Last Behavior State: {props.lastBehaviorState ?? "-"}
      </div>

      <div>
        Last Behavior Intensity: {props.lastBehaviorIntensity ?? "-"}
      </div>
    </div>
  );
}