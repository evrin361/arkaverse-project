"use client";

import "../../src/runtime/replay/replay-engine";
import { useIdentityRender } from "../../src/runtime/useIdentityRender";
import { ArkaOrb } from "../../src/components/arkaverse/ArkaOrb";
import { useRuntimeInspector } from "../../src/runtime/useRuntimeInspector";
import { useIdentityInspector } from "../../src/runtime/useIdentityInspector";
import { useMemoryInspector } from "../../src/runtime/useMemoryInspector";
import { useOperationalSignals } from "../../src/runtime/useOperationalSignals";
import { useBusinessSignals } from "../../src/runtime/useBusinessSignals";
import { useRecommendation } from "../../src/runtime/useRecommendation";
import { useRecommendationHistory } from "../../src/runtime/useRecommendationHistory";

export default function DashboardPage() {
  const {
    render,
    trigger,
    dashboard,
  } = useIdentityRender();
  const identity = useIdentityInspector();
  const memory = useMemoryInspector();
  const inspector = useRuntimeInspector();
  const signals = useOperationalSignals();
const business = useBusinessSignals();
const recommendation = useRecommendation();
const recommendationHistory =
  useRecommendationHistory();
const health =
  memory.memory.systemStatus === "booted"
    ? "Healthy"
    : "Unknown";


<div className="border border-cyan-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
  <div className="text-lg font-bold mb-4">
    Living Metrics
  </div>

<div className="border border-purple-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
  <div className="text-lg font-bold mb-4">
    Operational Signals
  </div>

<div className="border border-pink-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
  <div className="text-lg font-bold mb-4">
    Business Signals
  </div>

<div className="border border-emerald-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
  <div className="text-lg font-bold mb-4">
    Recommendation
  </div>

<div className="border border-purple-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
  <div className="text-lg font-bold mb-4">
    Recommendation History
  </div>

  {recommendationHistory
    .slice(-5)
    .reverse()
    .map((item, index) => (
      <div
        key={index}
        className="mb-3 border-b border-white/10 pb-2"
      >
        <div>
          {item.title}
        </div>

        <div className="text-sm text-gray-400">
          {item.action}
        </div>
      </div>
    ))}
</div>


  <div className="mb-2">
    Title: {recommendation.title}
  </div>

  <div>
    Action: {recommendation.action}
  </div>
</div>

  <div className="mb-2">
    System Readiness: {business.systemReadiness}
  </div>

  <div className="mb-2">
    Engagement Level: {business.engagementLevel}
  </div>

  <div>
    Operational Stability: {business.operationalStability}
  </div>
</div>


  <div className="mb-2">
    Health: {signals.health}
  </div>

  <div className="mb-2">
    Activity: {signals.activity}
  </div>

  <div>
    Attention: {signals.attention}
  </div>
</div>


  <div className="mb-2">
    System Health: {health}
  </div>

  <div className="mb-2">
    Runtime State: {inspector.runtimeState}
  </div>

  <div className="mb-2">
    Identity State: {identity.identityState}
  </div>

  <div className="mb-2">
    Events Processed: {inspector.eventCount}
  </div>

  <div className="mb-2">
    Memory Records: {inspector.memoryKeys}
  </div>

  <div>
    Last Event: {inspector.lastEvent ?? "-"}
  </div>
</div>


    
  return (
    <div
      onMouseEnter={() => trigger("hover")}
      onMouseLeave={() => trigger("load")}
      onClick={() => trigger("click")}
      onFocus={() => trigger("focus")}
tabIndex={0}
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


<div className="border border-yellow-500/30 rounded-xl p-6 min-w-[320px] bg-white/5 backdrop-blur-sm">
  <div className="text-lg font-bold mb-4">
    Memory Inspector
  </div>

  <div className="mb-2">
    System Status: {memory.memory.systemStatus ?? "-"}
  </div>

  <div className="mb-2">
    Last Event Type: {memory.memory.lastEventType ?? "-"}
  </div>

  <div className="mb-2">
    Last Event Timestamp: {memory.memory.lastEventTimestamp ?? "-"}
  </div>

  <div className="mb-2">
    Last Behavior State: {memory.memory.lastBehaviorState ?? "-"}
  </div>

  <div>
    Last Behavior Intensity: {memory.memory.lastBehaviorIntensity ?? "-"}
  </div>
</div>



<div className="mb-2">
  Identity State: {identity.identityState}
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