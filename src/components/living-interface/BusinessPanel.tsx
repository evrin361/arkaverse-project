"use client";
import { Panel } from "@/components/ui/Panel";
export function BusinessPanel() {
return (
  <Panel title="Business Core">
          

      <div className="space-y-2 text-sm">
        <div>Business Signals</div>
        <div>Operational Status</div>
        <div>Recommendations</div>
        <div>Decision Insights</div>
      </div>
      </Panel>
);
}