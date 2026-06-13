import { eventHistory } from "../event-history/event-history";
import { orchestrator } from "../../core/orchestrator/arka.orchestrator";
import type { UIEventType } from "../event.types";

class ReplayEngine {
  private isValidEventType(type: string): type is UIEventType {
    return (
      type === "click" ||
      type === "hover" ||
      type === "focus" ||
      type === "blur" ||
      type === "load" ||
      type === "submit"
    );
  }

  replayAll() {
    const events = eventHistory
      .getAll()
      .filter((e) => e.type === "USER_EVENT");

    console.log("[REPLAY START]", events.length);

    for (const event of events) {
      console.log("[REPLAY EVENT]", event);

      if (this.isValidEventType(event.type)) {
        orchestrator.handle(event.type);
      }
    }

    console.log("[REPLAY END]");
  }

  replayLast(n: number = 1) {
    const events = eventHistory.getAll().slice(-n);

    for (const event of events) {
      if (this.isValidEventType(event.type)) {
        orchestrator.handle(event.type);
      }
    }
  }

  clearAndReplay() {
    const events = eventHistory.getAll();

    console.log("[CLEAR & REPLAY]", events.length);

    for (const event of events) {
      if (this.isValidEventType(event.type)) {
        orchestrator.handle(event.type);
      }
    }
  }
}

// ❌ اینجا دیگر هیچ window hack نداریم
// چون یا اصلاً لازم نیست، یا باید در devtools layer جدا مدیریت شود

export const replayEngine = new ReplayEngine();

declare global {
  interface Window {
    replayEngine: ReplayEngine;
  }
}

if (typeof window !== "undefined") {
  window.replayEngine = replayEngine;
}