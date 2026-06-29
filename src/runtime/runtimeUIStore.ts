import {
  defaultRuntimeUI,
  type RuntimeUI,
} from "./runtimeUI";

import { notifyRuntime } from "./runtimeObservable";

let runtimeUI = { ...defaultRuntimeUI };

const listeners = new Set<(ctx: RuntimeUI) => void>();

export function getRuntimeUI() {
  return runtimeUI;
}

export function updateRuntimeUI(
  partial: Partial<RuntimeUI>
) {
  runtimeUI = {
    ...runtimeUI,
    ...partial,
  };

notifyRuntime();

  listeners.forEach((listener) => listener(runtimeUI));
}

export function subscribeRuntimeUI(
  listener: (ctx: RuntimeUI) => void
) {
  listeners.add(listener);

return () => {
  listeners.delete(listener);
};}
export function toggleSidebar() {
  updateRuntimeUI({
    sidebarOpen: !getRuntimeUI().sidebarOpen,
  });
}