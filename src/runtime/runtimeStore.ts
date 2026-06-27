import {
  defaultRuntimeContext,
  type RuntimeContext,
} from "./runtimeContext";

let runtime = { ...defaultRuntimeContext };



const listeners = new Set<(ctx: RuntimeContext) => void>();

export function getRuntimeContext() {
  return runtime;
}

export function updateRuntimeContext(
  partial: Partial<RuntimeContext>
) {
  runtime = {
    ...runtime,
    ...partial,
  };

  listeners.forEach((listener) => listener(runtime));
}

export function subscribeRuntime(
  listener: (ctx: RuntimeContext) => void
) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}