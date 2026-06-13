import type { UIEventType } from "../../runtime/event.types";
import { eventBus } from "../../runtime/event-bus/event-bus";
import { EVENTS } from "../../runtime/event-bus/events";
import { memoryStore } from "../memory/memory-store";
import { pluginRuntime } from "../plugins/plugin-runtime";
import { devtools } from "../../devtools/devtools";
import { eventEngine } from "../../runtime/event.engine";
import { runtime } from "../../runtime/arkasphere.runtime";
import { livingEngine } from "../../runtime/living.engine";
import { identityEngine } from "../../design-system/engine/identity.engine";
import { getReplaying } from "../../runtime/replay/context";

class ArkaOrchestrator {
  private initialized = false;

  init() {
    if (this.initialized) return;

    runtime.boot();
    identityEngine.setState("idle");

    pluginRuntime.init();

    memoryStore.set("system.status", "booted");

    devtools.trace("SYSTEM_INIT", {
      timestamp: Date.now(),
    });

    eventBus.emit(EVENTS.SYSTEM_INIT, {
      timestamp: Date.now(),
    });

    this.initialized = true;
  }

  handle(eventType: UIEventType) {
    // 🧠 REPLAY GUARD (مهم‌ترین خط پروژه)
    if (getReplaying()) {
      return this.replay(eventType);
    }

    return this.process(eventType);
  }

  replay(eventType: UIEventType) {
    // فقط state changes، بدون side effect
    const behavior = livingEngine.react(eventType);

    switch (behavior.intensity) {
      case "high":
      case "medium":
        runtime.setState("interacting");
        break;

      default:
        runtime.setState("idle");
    }

    identityEngine.setState(
      eventType === "focus" ? "focused" : "active"
    );

    return behavior;
  }

  private process(eventType: UIEventType) {
    // 1. Event Layer
    eventEngine.dispatch({
      type: eventType,
      timestamp: Date.now(),
    });

    eventBus.emit(EVENTS.USER_EVENT, {
      type: eventType,
      timestamp: Date.now(),
    });

    memoryStore.set("last.event", {
      type: eventType,
      timestamp: Date.now(),
    });

    const behavior = livingEngine.react(eventType);

    pluginRuntime.emitEvent({
      type: eventType,
    });

    eventBus.emit(EVENTS.BEHAVIOR_CHANGED, {
      eventType,
      behavior,
    });

    switch (behavior.intensity) {
      case "high":
      case "medium":
        runtime.setState("interacting");
        break;

      default:
        runtime.setState("idle");
    }

    identityEngine.setState(
      eventType === "focus" ? "focused" : "active"
    );

    devtools.trace("EVENT_HANDLED", {
      event: eventType,
      behavior,
    });

    memoryStore.set("last.behavior", behavior);

    return behavior;
  }
}

export const orchestrator = new ArkaOrchestrator();