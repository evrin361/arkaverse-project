import { eventHistory } from "../event-history/event-history";
export type EventPayload = Record<string, unknown>;

type EventHandler = (event: EventPayload) => void;

class EventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  on(event: string, handler: EventHandler) {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }

    this.handlers.get(event)?.push(handler);
  }

  emit(event: string, payload: EventPayload) {
  eventHistory.record(event, payload);

  const handlers = this.handlers.get(event) ?? [];

  handlers.forEach((handler) => handler(payload));
}
}

export const eventBus = new EventBus();