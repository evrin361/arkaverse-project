import { Panel } from "@/components/ui/Panel";

type LivingPanelProps = {
  title: string;
  children: React.ReactNode;
};

export default function LivingPanel({
  title,
  children,
}: LivingPanelProps) {
  return (
    <Panel title={title}>
      {children}
    </Panel>
  );
}