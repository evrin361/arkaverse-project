type Props = {
  summary: string;
};

export function StatusSummaryCard(
  props: Props
) {
  return (
    <div className="border border-orange-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Status Summary
      </div>

      <div>
        {props.summary}
      </div>
    </div>
  );
}