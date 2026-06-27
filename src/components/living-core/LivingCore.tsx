import { Core } from "./Core";
import { EnergyField } from "./EnergyField";
import { IdentityShell } from "./IdentityShell";
import { SignalNetwork } from "./SignalNetwork";
import { ReactorState } from "./types";
import { getReactorBehavior } from "../../runtime/reactorBehavior";

type LivingCoreProps = {
  state?: ReactorState;
};

export function LivingCore({
  state = "idle",
  
}: LivingCoreProps) {

    const behavior = getReactorBehavior(state);
  return (
    <div className="relative w-[520px] h-[520px] flex items-center justify-center">
<EnergyField behavior={behavior.energy} />

<IdentityShell />

<SignalNetwork
  speed={behavior.signalSpeed}
  glow={behavior.signalGlow}
/>

<Core
  glow={behavior.coreGlow}
  scale={behavior.coreScale}
/>  
  </div>
  );
}