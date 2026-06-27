type SignalNetworkProps = {

  speed: number;

  glow: number;

};

export function SignalNetwork({
  speed,
  glow,
}: SignalNetworkProps)  {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      <div className="orbit orbit-1">
        <div style={{
  opacity: glow,
  animationDuration: `${8 / speed}s`,
}}
className="signal signal-1" />
      </div>

      <div className="orbit orbit-2">
        <div style={{
  opacity: glow,
  animationDuration: `${8 / speed}s`,
}}
className="signal signal-2" />
      </div>

      <div className="orbit orbit-3">
        <div style={{
  opacity: glow,
  animationDuration: `${8 / speed}s`,
}}
className="signal signal-3" />
      </div>

    </div>
  );
}