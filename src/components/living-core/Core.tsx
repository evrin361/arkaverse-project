type CoreProps = {
  glow: number;
  scale: number;
  transition?: string;
};
export function Core({
  glow,
  scale,
  transition = "700ms",
}: CoreProps)
 {
     return (
  <div className="absolute inset-0 flex items-center justify-center">

      {/* Outer Glass */}
      <div className="absolute w-40 h-40 rounded-full border border-cyan-400/20 bg-white/[0.02] backdrop-blur-sm" />

      {/* Soft Glow */}
      <div className="absolute w-36 h-36 rounded-full bg-cyan-400/8 blur-3xl animate-core-glow" />

      {/* Inner Ring */}
      <div className="absolute w-20 h-20 rounded-full border border-cyan-300/20" />

      {/* Crystal Core */}
<div
  className="
    w-10
    h-10
    rounded-full
    bg-cyan-300
    animate-core-pulse
    transition-all
    duration-700
    ease-out
    origin-center
  "
  style={{
    transform: `scale(${scale})`,
    transformOrigin: "center",
    boxShadow: `0 0 ${30 * glow}px rgba(34,211,238,${0.45 * glow})`,
  }}
/>
    </div>
  );
}