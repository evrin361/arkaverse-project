import type { ReactorEvent } from "./events";

type Listener = (event: ReactorEvent) => void;

const listeners = new Set<Listener>();

export function emitEvent(event: ReactorEvent) {
  listeners.forEach((listener) => listener(event));
}

export function subscribeEvent(listener: Listener) {
  listeners.add(listener);

return () => {
  listeners.delete(listener);
};}