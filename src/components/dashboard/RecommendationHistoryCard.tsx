type Item = {
  title: string;
  action: string;
};

type Props = {
  items: Item[];
};

export function RecommendationHistoryCard({
  items,
}: Props) {
  return (
    <div className="border border-purple-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Recommendation History
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="mb-3 border-b border-white/10 pb-2"
        >
          <div>{item.title}</div>

          <div className="text-sm text-gray-400">
            {item.action}
          </div>
        </div>
      ))}
    </div>
  );
}