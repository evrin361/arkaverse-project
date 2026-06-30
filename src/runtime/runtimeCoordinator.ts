import { eventBus } from "./event-bus/event-bus";
import { updateRuntimeContext } from "./runtimeStore";
import type { ReactorEvent } from "./events";

export function dispatchRuntimeEvent(event: ReactorEvent) {
  switch (event) {
    case "USER_ENTERED":
      updateRuntimeContext({
        activeUsers: 1,
      });
      break;

    case "USER_LEFT":
      updateRuntimeContext({
        activeUsers: 0,
      });
      break;

    case "AI_STARTED":
      updateRuntimeContext({
        aiBusy: true,
      });
      break;

    case "AI_FINISHED":
      updateRuntimeContext({
        aiBusy: false,
      });
      break;
  }

eventBus.emit("runtime:event", {
  type: event,
});}