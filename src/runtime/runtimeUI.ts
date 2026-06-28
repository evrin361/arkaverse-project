export type RuntimePanel =
  | "dashboard"
  | "executive"
  | "business"
  | "memory"
  | "living"
  | "identity";

export type RuntimeUI = {
  sidebarOpen: boolean;

activePanel: RuntimePanel;

  theme: "dark" | "light";

  notifications: number;
};

export const defaultRuntimeUI: RuntimeUI = {
  sidebarOpen: true,

  activePanel: "dashboard",

  theme: "dark",

  notifications: 0,
};