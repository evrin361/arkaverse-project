import { ArkPlugin } from "./types";

class PluginRegistry {
  private plugins: ArkPlugin[] = [];

  register(plugin: ArkPlugin) {
    this.plugins.push(plugin);
  }

  getAll() {
    return this.plugins;
  }
}

export const pluginRegistry = new PluginRegistry();