import { eventBus } from "../runtime/event-bus/event-bus";
import { EVENTS } from "../runtime/event-bus/events";
import { memoryStore } from "../core/memory/memory-store";
import { eventHistory } from "../runtime/event-history/event-history";
import { replayEngine } from "../runtime/replay/replay-engine";

export class DevTools {
  logEvent(event: Record<string, unknown>) {
    console.log("[EVENT]", event);
  }

  logMemory() {
    console.log("[MEMORY]", memoryStore.getAll());
  }

  trace(event: string, payload: Record<string, unknown>) {
    console.log(`[TRACE] ${event}`, payload);
  }

  logHistory() {
  console.log("[HISTORY]", eventHistory.getAll());
}
replay() {
  replayEngine.replayAll();
}


}

export const devtools = new DevTools();
eventBus.on(
  EVENTS.USER_EVENT,
  (payload: Record<string, unknown>) => {
    console.log("[BUS:USER_EVENT]", payload);
  }
);

eventBus.on(
  EVENTS.BEHAVIOR_CHANGED,
  (payload: Record<string, unknown>) => {
    console.log("[BUS:BEHAVIOR_CHANGED]", payload);
  }
);