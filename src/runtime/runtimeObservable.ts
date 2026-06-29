type Listener = () => void;

const listeners = new Set<Listener>();

export function subscribeRuntime(
  listener: Listener
) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function notifyRuntime() {
  for (const listener of listeners) {
    listener();
  }
}