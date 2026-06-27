import { Core } from "./Core";
import { EnergyField } from "./EnergyField";
import { IdentityShell } from "./IdentityShell";
import { SignalNetwork } from "./SignalNetwork";
import { ReactorState } from "./types";
import { getReactorBehavior } from "../../runtime/reactorBehavior";
import { useRuntimeReactor } from "../../runtime/useRuntimeReactor";
type LivingCoreProps = {};

export function LivingCore({}: LivingCoreProps) {

  const state = useRuntimeReactor();
    const behavior = getReactorBehavior(state);
  return (
<div
  className="
    relative
    w-[520px]
    h-[520px]
    flex
    items-center
    justify-center
    transition-all
    duration-700
    ease-out
  "
><EnergyField behavior={behavior.energy} />

<IdentityShell />

<SignalNetwork
  speed={behavior.signalSpeed}
  glow={behavior.signalGlow}
/>

<Core
  glow={behavior.coreGlow}
  scale={behavior.coreScale}
  transition="700ms"
/>
  </div>
  );
}