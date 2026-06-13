"use client";
import { orchestrator } from "../core/orchestrator/arka.orchestrator";
import { useState } from "react";
import { identityRenderEngine } from "./identity-render.engine";
import { UIEventType } from "./event.types";
import { IdentityRenderOutput } from "./identity-render.types";

export function useIdentityRender() {
  const [render, setRender] = useState<IdentityRenderOutput | null>(null);

  const trigger = (event: UIEventType) => {
  const behavior = orchestrator.handle(event);

  const output = identityRenderEngine.render({
    behavior,
  });

  setRender(output);
};

  return {
    render,
    trigger,
  };
}