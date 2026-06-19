import { runtime } from "./arkasphere.runtime";
import { eventHistory } from "./event-history/event-history";
import { memoryStore } from "../core/memory/memory-store";
import { RuntimeInspectorData } from "./runtime-inspector.types";

export const runtimeInspectorEngine = {
  inspect(): RuntimeInspectorData {
    const events = eventHistory.getAll();

    return {
      runtimeState: runtime.getState(),
      eventCount: events.length,
      lastEvent: events.at(-1)?.type ?? null,
      memoryKeys: Object.keys(
        memoryStore.getAll()
      ).length,
    };
  },
};
