import type { ReactorState } from "../components/living-core/types";
import type { ReactorEvent } from "./events";

import { evaluatePolicy } from "./executivePolicy";
import { getRuntimeContext } from "./runtimeStore";
export function evaluateEvent(
  event: ReactorEvent
): ReactorState {

return evaluatePolicy(
  event,
  getRuntimeContext()
);}