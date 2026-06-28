import { getRuntimeUI, updateRuntimeUI } from "./runtimeUIStore";
import type { RuntimePanel } from "./runtimeUI";

export function toggleSidebar() {
  updateRuntimeUI({
    sidebarOpen: !getRuntimeUI().sidebarOpen,
  });
}

export function setActivePanel(
  panel: RuntimePanel
) {
  updateRuntimeUI({
    activePanel: panel,
  });
}

export function setTheme(theme: "dark" | "light") {
  updateRuntimeUI({
    theme,
  });
}

