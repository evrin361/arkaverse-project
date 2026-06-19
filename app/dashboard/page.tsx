"use client";

import "../../src/runtime/replay/replay-engine";
import { useIdentityRender } from "../../src/runtime/useIdentityRender";
import { ArkaOrb } from "../../src/components/arkaverse/ArkaOrb";
import { useRuntimeInspector } from "../../src/runtime/useRuntimeInspector";

export default function DashboardPage() {
  const {
    render,
    trigger,
    dashboard,
  } = useIdentityRender();
  const inspector = useRuntimeInspector();


  return (
    <div
      onMouseEnter={() => trigger("hover")}
      onMouseLeave={() => trigger("load")}
      onClick={() => trigger("click")}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-10"
    >
      <ArkaOrb
  scale={render?.scale}
  glow={render?.glow}
  blur={render?.blur}
  state={render?.state}
/>

      <div className="text-3xl font-bold">
        ARKAVERSE DASHBOARD
      </div>

      <div className="border border-cyan-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
        <div className="mb-2">
          Last Event: {dashboard.lastEvent ?? "-"}
        </div>


<div className="border border-green-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
  <div className="text-lg font-bold mb-4">
    Runtime Inspector
  </div>

  <div className="mb-2">
    Runtime State: {inspector.runtimeState}
  </div>

  <div className="mb-2">
    Event Count: {inspector.eventCount}
  </div>

  <div className="mb-2">
    Last Event: {inspector.lastEvent ?? "-"}
  </div>

  <div>
    Memory Keys: {inspector.memoryKeys}
  </div>
</div>


<div className="mb-2">
  State: {dashboard.state ?? "-"}
</div>


        <div className="mb-2">
          Intensity: {render?.intensity ?? "-"}
        </div>

        <div className="mb-2">
          Scale: {render?.scale ?? "-"}
        </div>

        <div className="mb-2">
          Glow: {render?.glow ?? "-"}
        </div>

        <div className="mb-2">
          Blur: {render?.blur ?? "-"}
        </div>

        <div>
          Duration: {render?.duration ?? "-"}
        </div>
      </div>
    </div>
  );
}