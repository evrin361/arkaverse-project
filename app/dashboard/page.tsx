"use client";


import "../../src/runtime/replay/replay-engine";

import { ArkaOrb } from "../../src/components/arkaverse/ArkaOrb";

import { RuntimeCard } from "../../src/components/dashboard/RuntimeCard";
import { MemoryCard } from "../../src/components/dashboard/MemoryCard";
import { OperationalSignalsCard } from "../../src/components/dashboard/OperationalSignalsCard";
import { BusinessSignalsCard } from "../../src/components/dashboard/BusinessSignalsCard";
import { RecommendationCard } from "../../src/components/dashboard/RecommendationCard";
import { RecommendationHistoryCard } from "../../src/components/dashboard/RecommendationHistoryCard";
import { DecisionInsightsCard } from "../../src/components/dashboard/DecisionInsightsCard";
import { TrendVisibilityCard } from "../../src/components/dashboard/TrendVisibilityCard";
import { OperationalHealthCard } from "../../src/components/dashboard/OperationalHealthCard";
import { StatusSummaryCard } from "../../src/components/dashboard/StatusSummaryCard";
import { ExecutiveDashboardCard } from "../../src/components/dashboard/ExecutiveDashboardCard";

import { useIdentityRender } from "../../src/runtime/useIdentityRender";
import { useRuntimeInspector } from "../../src/runtime/useRuntimeInspector";
import { useIdentityInspector } from "../../src/runtime/useIdentityInspector";
import { useMemoryInspector } from "../../src/runtime/useMemoryInspector";
import { useOperationalSignals } from "../../src/runtime/useOperationalSignals";
import { useBusinessSignals } from "../../src/runtime/useBusinessSignals";
import { useRecommendation } from "../../src/runtime/useRecommendation";
import { useRecommendationHistory } from "../../src/runtime/useRecommendationHistory";
import { useDecisionInsights } from "../../src/runtime/useDecisionInsights";
import { useTrendVisibility } from "../../src/runtime/useTrendVisibility";
import { useOperationalHealth } from "../../src/runtime/useOperationalHealth";
import { useStatusSummary } from "../../src/runtime/useStatusSummary";
import { useExecutiveDashboard } from "../../src/runtime/useExecutiveDashboard";

import LivingDashboard from "@/components/living-interface/LivingDashboard";
import { useRuntimeUI } from "@/runtime/useRuntimeUI";
import { toggleSidebar } from "@/runtime/runtimeUIActions";

import {
  openPanel,
} from "@/runtime/runtimeUIActions";

import { RuntimePanelRouter } from "@/components/living-interface/RuntimePanelRouter";

export default function DashboardPage() {
  const { render, trigger } = useIdentityRender();

  const inspector = useRuntimeInspector();
  const identity = useIdentityInspector();
  const memory = useMemoryInspector();

  const signals = useOperationalSignals();
  const business = useBusinessSignals();

  const recommendation = useRecommendation();
  const recommendationHistory = useRecommendationHistory();

  const decisionInsights = useDecisionInsights();

  const trend = useTrendVisibility();
  const operationalHealth = useOperationalHealth();
  const statusSummary = useStatusSummary();
  const executiveDashboard = useExecutiveDashboard();



const ui = useRuntimeUI();

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => trigger("hover")}
      onMouseLeave={() => trigger("load")}
      onClick={() => trigger("click")}
      onFocus={() => trigger("focus")}
      className="min-h-screen bg-black text-white p-10"
    >
      <div className="flex flex-col items-center gap-8 mb-12">
        <ArkaOrb
          scale={render?.scale}
          glow={render?.glow}
          blur={render?.blur}
          state={render?.state}
        />

        <div className="text-3xl font-bold">
          ARKAVERSE DASHBOARD
        </div>

<div className="mt-6">
  <LivingDashboard />
</div>


<div className="text-xs opacity-60 mt-4">
  Theme: {ui.theme}
</div>

<div className="text-xs opacity-60">
  <RuntimePanelRouter />
</div>

<div className="text-xs opacity-60">
  Sidebar: {ui.sidebarOpen ? "OPEN" : "CLOSED"}
</div>


<button
  onClick={toggleSidebar}
  className="border px-3 py-1 rounded mt-4"
>
  Toggle Sidebar Runtime
</button>


<button
  onClick={() => openPanel("executive")}
  className="border px-3 py-1 rounded"
>
  Executive Panel
</button>

<button
  onClick={() => openPanel("business")}
  className="border px-3 py-1 rounded ml-2"
>
  Business Panel
</button>


<div className="text-xs opacity-60">
  Active Panel: {ui.activePanel}
</div>

        <div>

          Identity State: {identity.identityState}
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <RuntimeCard
          runtimeState={inspector.runtimeState}
          eventCount={inspector.eventCount}
          lastEvent={inspector.lastEvent}
          memoryKeys={inspector.memoryKeys}
        />

        <MemoryCard
          systemStatus={memory.memory.systemStatus}
          lastEventType={memory.memory.lastEventType}
          lastEventTimestamp={memory.memory.lastEventTimestamp}
          lastBehaviorState={memory.memory.lastBehaviorState}
          lastBehaviorIntensity={memory.memory.lastBehaviorIntensity}
        />

        <OperationalSignalsCard
          health={signals.health}
          activity={signals.activity}
          attention={signals.attention}
        />

        <BusinessSignalsCard
          systemReadiness={business.systemReadiness}
          engagementLevel={business.engagementLevel}
          operationalStability={business.operationalStability}
        />

        <RecommendationCard
          title={recommendation.title}
          action={recommendation.action}
        />

        <RecommendationHistoryCard
          items={recommendationHistory
            .slice(-5)
            .reverse()}
        />

        <DecisionInsightsCard
          mostFrequentRecommendation={
            decisionInsights.mostFrequentRecommendation
          }
          count={decisionInsights.count}
        />

        <TrendVisibilityCard
          direction={trend.direction}
        />

        <OperationalHealthCard
          status={operationalHealth.status}
        />

        <StatusSummaryCard
          summary={statusSummary.summary}
        />

        <ExecutiveDashboardCard
          health={executiveDashboard.health}
          trend={executiveDashboard.trend}
          summary={executiveDashboard.summary}
        />
      </div>
    </div>
  );
}