import type { ReactorEvent } from "./events";
import type { ReactorState } from "../components/living-core/types";
import type { RuntimeContext } from "./runtimeContext";

export function evaluatePolicy(
  event: ReactorEvent,
  context: RuntimeContext
): ReactorState {

  switch (event) {

    case "USER_ENTERED":
      return "focused";

    case "USER_LEFT":
      return "idle";

    case "AI_STARTED":
      return "processing";

    case "AI_FINISHED":
      return "thinking";

    default:
      return "idle";

  }

}