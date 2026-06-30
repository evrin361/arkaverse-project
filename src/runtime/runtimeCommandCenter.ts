import { dispatchRuntimeEvent } from "./runtimeCoordinator";

export type RuntimeCommand =
  | "START_RUNTIME"
  | "STOP_RUNTIME"
  | "RESET_RUNTIME"
  | "REPLAY_RUNTIME";

export function dispatchRuntimeCommand(
  command: RuntimeCommand,
) {
  switch (command) {
    case "START_RUNTIME":
      dispatchRuntimeEvent("AI_STARTED");
      break;

    case "STOP_RUNTIME":
      dispatchRuntimeEvent("AI_FINISHED");
      break;

    case "RESET_RUNTIME":
      dispatchRuntimeEvent("USER_LEFT");
      break;

    case "REPLAY_RUNTIME":
      dispatchRuntimeEvent("USER_ENTERED");
      break;
  }
}