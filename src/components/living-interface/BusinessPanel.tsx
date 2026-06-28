"use client";

export function BusinessPanel() {
  return (
    <div className="rounded-lg border border-emerald-700/30 p-5">
      <h2 className="text-xl font-bold mb-4">
        Business Core
      </h2>

      <div className="space-y-2 text-sm">
        <div>Business Signals</div>
        <div>Operational Status</div>
        <div>Recommendations</div>
        <div>Decision Insights</div>
      </div>
    </div>
  );
}