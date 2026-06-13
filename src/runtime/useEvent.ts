import { eventEngine } from "./event.engine";
import { UIEvent } from "./event.types";

export function useEvent() {
  const emit = (type: UIEvent["type"], target?: string) => {
    eventEngine.dispatch({
      type,
      target,
      timestamp: Date.now(),
    });
  };

  return {
    emit,
  };
}