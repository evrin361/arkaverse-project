export const visual = {
  glow: {
    soft: "0 0 10px rgba(0, 255, 200, 0.25)",
    medium: "0 0 20px rgba(0, 255, 200, 0.4)",
    strong: "0 0 40px rgba(0, 255, 200, 0.6)",
    neon: "0 0 60px rgba(0, 255, 200, 0.9)",
  },

  glass: {
    light: "rgba(255, 255, 255, 0.05)",
    medium: "rgba(255, 255, 255, 0.08)",
    strong: "rgba(255, 255, 255, 0.12)",
  },

  blur: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },

  depth: {
    surface: 0,
    floating: 10,
    modal: 50,
    overlay: 100,
    system: 999,
  },
} as const;