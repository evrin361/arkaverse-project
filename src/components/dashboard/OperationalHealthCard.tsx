type Props = {
  status: string;
};

export function OperationalHealthCard(
  props: Props
) {
  return (
    <div className="border border-red-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
      <div className="text-lg font-bold mb-4">
        Operational Health
      </div>

      <div>
        Status: {props.status}
      </div>
    </div>
  );
}