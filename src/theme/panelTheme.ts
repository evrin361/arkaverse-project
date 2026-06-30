import { designTokens } from "./designTokens";

export const panelTheme = {
  background: designTokens.colors.surface,

  border: designTokens.colors.border,

  radius: designTokens.radius.lg,

  text: designTokens.colors.text,

  shadow: "0 10px 35px rgba(0,0,0,.25)",
} as const;