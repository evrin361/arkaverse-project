"use client";

import { orchestrator } from "../core/orchestrator/arka.orchestrator";
import { useState } from "react";
import { identityRenderEngine } from "./identity-render.engine";
import { UIEventType } from "./event.types";
import { IdentityRenderOutput } from "./identity-render.types";

type DashboardState = {
  lastEvent: UIEventType | null;
  state: string | null;
};

export function useIdentityRender() {
  const [render, setRender] =
    useState<IdentityRenderOutput | null>(null);

  const [dashboard, setDashboard] =
  useState<DashboardState>({
    lastEvent: null,
    state: null,
  });

  const trigger = (event: UIEventType) => {
    const behavior = orchestrator.handle(event);

    const output = identityRenderEngine.render({
      behavior,
    });

    setRender(output);

    setDashboard({
  lastEvent: event,
  state: output.state,
});
  };

  return {
    render,
    trigger,
    dashboard,
  };
}