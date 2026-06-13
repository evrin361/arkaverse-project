"use client";

import { useIdentityRender } from "../src/runtime/useIdentityRender";
export default function LandingPage() {
  const { render, trigger } = useIdentityRender();

  return (
    <main
      className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 text-white"
      onMouseMove={() => trigger("hover")}
      onClick={() => trigger("click")}
      style={{
        transform: `scale(${render?.scale ?? 1})`,
        filter: `blur(${render?.blur ?? "0px"})`,
        transition: "all 250ms ease",
      }}
    >
      <h1
        style={{
          textShadow: render?.glow,
        }}
        className="text-5xl font-extrabold"
      >
        ARKASPHERE IS ALIVE
      </h1>
    </main>
  );
}