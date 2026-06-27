import type { ReactorEvent } from "./events";

export function getEventPriority(
  event: ReactorEvent
): number {

  switch (event) {

    case "AI_STARTED":
      return 100;

    case "AI_FINISHED":
      return 90;

    case "USER_ENTERED":
      return 40;

    case "USER_LEFT":
      return 30;

    default:
      return 0;
  }

}