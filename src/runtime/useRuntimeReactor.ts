import type { ReactorState } from "../components/living-core/types";
/**

 * Runtime → Reactor Adapter
 *
 * This hook is the only place responsible for translating
 * Runtime state into Reactor behavior.
 *
 * Living Reactor must never decide its own behavior.
 * It only renders the current Runtime state.
 */

export function useRuntimeReactor(): ReactorState {
  /**
   * Temporary implementation.
   *
   * Until Runtime events are connected,
   * the Reactor remains in the idle state.
   */

  return "idle";
}