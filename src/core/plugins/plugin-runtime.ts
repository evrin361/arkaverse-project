import { pluginRegistry } from "./plugin-registry";
import type { ArkContext, ArkEvent } from "./types";

export class PluginRuntime {
  init() {
    pluginRegistry.getAll().forEach((plugin) => {
      plugin.onInit?.();
    });
  }

  emitEvent(event: ArkEvent) {
    pluginRegistry.getAll().forEach((plugin) => {
      plugin.onEvent?.(event);
    });
  }

  render(context: ArkContext) {
    pluginRegistry.getAll().forEach((plugin) => {
      plugin.onRender?.(context);
    });
  }
}

export const pluginRuntime = new PluginRuntime();