"use client";

type Props = {
  scale?: number;
  glow?: string;
  blur?: string;
};

export function ArkaOrb({
  scale = 1,
  glow = "soft",
  blur = "0px",
}: Props) {
  const shadow =
    glow === "strong"
      ? "0 0 80px rgba(0,255,255,.9)"
      : glow === "medium"
      ? "0 0 40px rgba(0,255,255,.7)"
      : "0 0 20px rgba(0,255,255,.4)";

  return (
    <div
      style={{
        width: 220,
        height: 220,
        borderRadius: "50%",
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