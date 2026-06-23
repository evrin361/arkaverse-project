type Props = {
  runtimeState: string;
  eventCount: number;
  lastEvent: string | null;
  memoryKeys: number;
};

export function RuntimeCard({
  runtimeState,
  eventCount,
  lastEvent,
  memoryKeys,
}: Props) {
  return (
    <div className="border border-green-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Runtime Inspector
      </div>

      <div className="mb-2">
        Runtime State: {runtimeState}
      </div>

      <div className="mb-2">
        Event Count: {eventCount}
      </div>

      <div className="mb-2">
        Last Event: {lastEvent ?? "-"}
      </div>

      <div>
        Memory Keys: {memoryKeys}
      </div>
    </div>
  );
}