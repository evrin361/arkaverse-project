type Props = {
  title: string;
  action: string;
};

export function RecommendationCard(props: Props) {
  return (
    <div className="border border-emerald-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Recommendation
      </div>

      <div className="mb-2">
        Title: {props.title}
      </div>

      <div>
        Action: {props.action}
      </div>
    </div>
  );
}