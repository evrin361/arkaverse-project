"use client";

import "../../src/runtime/replay/replay-engine";
import { useIdentityRender } from "../../src/runtime/useIdentityRender";
import { ArkaOrb } from "../../src/components/arkaverse/ArkaOrb";

export default function DashboardPage() {
  const {
    render,
    trigger,
    dashboard,
  } = useIdentityRender();

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
      />

      <div className="text-3xl font-bold">
        ARKAVERSE DASHBOARD
      </div>

      <div className="border border-cyan-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
        <div className="mb-2">
          Last Event: {dashboard.lastEvent ?? "-"}
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