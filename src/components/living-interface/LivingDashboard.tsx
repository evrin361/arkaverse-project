import LivingPanel from "./LivingPanel";
import LivingStatus from "./LivingStatus";

export default function LivingDashboard() {
  return (
    <div className="grid gap-6">
      <LivingPanel title="Living Core">
        <LivingStatus />
      </LivingPanel>
    </div>
  );
}