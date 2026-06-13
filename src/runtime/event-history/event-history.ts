import type { EventPayload } from "../event-bus/event-bus";

export type HistoryEvent = {
  type: string;
  payload: EventPayload;
  timestamp: number;
};

class EventHistory {
  private events: HistoryEvent[] = [];

  record(type: string, payload: EventPayload) {
    this.events.push({
      type,
      payload,
      timestamp: Date.now(),
    });
  }

  getAll() {
    return [...this.events];
  }

  getLast() {
    return this.events.at(-1);
  }

  clear() {
    this.events = [];
  }
}

export const eventHistory = new EventHistory();