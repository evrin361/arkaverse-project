import type {
  LivingRuntimeState,
} from "./livingRuntime";

const runtime: LivingRuntimeState = {
  snapshot: null,
};

const listeners = new Set<
  (state: LivingRuntimeState) => void
>();

export function getLivingRuntime() {
  return runtime;
}

export function updateLivingRuntime(
  partial: Partial<LivingRuntimeState>
) {
  Object.assign(runtime, partial);

  listeners.forEach((listener) =>
    listener(runtime)
  );
}

export function subscribeLivingRuntime(
  listener: (state: LivingRuntimeState) => void
) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
