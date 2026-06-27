import type { ReactorState } from "../components/living-core/types";
import type { ReactorEvent } from "./events";

import { evaluatePolicy } from "./executivePolicy";
import { getRuntimeContext } from "./runtimeStore";
import {
  isSystemBusy,
  isSystemHealthy,
} from "./runtimeAwareness";

import {
  rememberState,
  getLastState,
} from "./executiveMemory";

export function evaluateEvent(
  event: ReactorEvent
): ReactorState {

  const runtime = getRuntimeContext();

  /*
   * اگر سیستم سالم نباشد
   * همیشه وارد حالت Thinking می‌شویم.
   */

  if (!isSystemHealthy()) {
    return "thinking";
  }

  /*
   * اگر سیستم تحت فشار باشد
   */

  if (isSystemBusy()) {
    return "processing";
  }

  /*
   * در غیر این صورت
   */

  const nextState = evaluatePolicy(
  event,
  runtime
);

rememberState(nextState);

return nextState;

}