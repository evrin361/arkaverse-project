"use client";

import "../../src/runtime/replay/replay-engine";
import { useIdentityRender } from "../../src/runtime/useIdentityRender";

export default function DashboardPage() {
  const { render, trigger } = useIdentityRender();

  return (
    <div
      onMouseEnter={() => trigger("hover")}
      onMouseLeave={() => trigger("load")}
      onClick={() => trigger("click")}
      className="min-h-screen flex items-center justify-center bg-black text-white"
      style={{
        transform: `scale(${render?.scale ?? 1})`,
        filter: `blur(${render?.blur ?? "0px"})`,
        transition: "all 200ms ease",
        boxShadow: render?.glow,
      }}
    >

<h1>{Date.now()}</h1>

      <div className="text-3xl font-bold">
        ARKAVERSE DASHBOARD
      </div>
    </div>
  );
}