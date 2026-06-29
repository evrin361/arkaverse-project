import {
  defaultMemoryRuntime,
  type MemoryRuntime,
} from "./memoryRuntime";

let runtime = {
  ...defaultMemoryRuntime,
};

const listeners = new Set<
  (runtime: MemoryRuntime) => void
>();

export function getMemoryRuntime() {
  return runtime;
}

export function updateMemoryRuntime(
  partial: Partial<MemoryRuntime>
) {
  runtime = {
    ...runtime,
    ...partial,
  };

  listeners.forEach((listener) =>
    listener(runtime)
  );
}

export function subscribeMemoryRuntime(
  listener: (runtime: MemoryRuntime) => void
) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}