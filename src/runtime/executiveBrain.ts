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


import {
  setExecutiveIntent,
} from "./executiveIntent";


import { getEventPriority } from "./executivePriority";

export function evaluateEvent(
  event: ReactorEvent
): ReactorState {

  const runtime = getRuntimeContext();
  const priority = getEventPriority(event);
  const previousState = getLastState();


  console.log(
  "[Executive]",
  event,
  "Priority:",
  priority
);
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

/*
 * Continuity Rule
 *
 * اگر قبلاً در حالت Processing بودیم
 * و سیستم هنوز Busy است،
 * همان حالت را حفظ می‌کنیم.
 */

if (
  previousState === "processing" &&
  isSystemBusy()
) {
  rememberState("processing");
  return "processing";
}


  const nextState = evaluatePolicy(
  event,
  runtime
);


switch (nextState) {

  case "idle":
    setExecutiveIntent("Idle");
    break;

  case "focused":
    setExecutiveIntent("Observing");
    break;

  case "thinking":
    setExecutiveIntent("Processing");
    break;

  case "processing":
    setExecutiveIntent("Responding");
    break;
}
rememberState(nextState);

return nextState;

}