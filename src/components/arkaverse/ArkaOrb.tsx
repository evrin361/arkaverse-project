"use client";

type Props = {
  scale?: number;
  glow?: string;
  blur?: string;
  state?: string;
};

export function ArkaOrb({
  scale = 1,
  glow = "soft",
  blur = "0px",
  state = "idle",
}: Props) {
  const shadow =
    glow === "strong"
      ? "0 0 80px rgba(0,255,255,.9)"
      : glow === "medium"
      ? "0 0 40px rgba(0,255,255,.7)"
      : "0 0 20px rgba(0,255,255,.4)";

  const border =
    state === "focused"
      ? "2px solid rgba(0,255,255,.9)"
      : state === "active"
      ? "2px solid rgba(0,255,255,.7)"
      : state === "interacting"
      ? "1px solid rgba(0,255,255,.5)"
      : "none";


  return (
    <div
      style={{
        width: 220,
        height: 220,
        borderRadius: "50%",
         border,
        background:
          "radial-gradient(circle at center, #00ffff 0%, #0066ff 60%, #000000 100%)",
        transform: `scale(${scale})`,
        filter: `blur(${blur})`,
        boxShadow: shadow,
        transition: "all 220ms ease",
       
      }}
    />
  );
}