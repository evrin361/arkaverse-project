type Props = {
  mostFrequentRecommendation: string | null;
  count: number;
};

export function DecisionInsightsCard(
  props: Props
) {
  return (
    <div className="border border-indigo-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Decision Insights
      </div>

      <div className="mb-2">
        Most Frequent:
        {" "}
        {props.mostFrequentRecommendation ?? "-"}
      </div>

      <div>
        Count: {props.count}
      </div>
    </div>
  );
}