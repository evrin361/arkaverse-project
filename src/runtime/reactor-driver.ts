import { ReactorState } from "@/components/living-core/types";
import { useExecutiveBrain } from "./useExecutiveBrain";

export function useReactorDriver(): ReactorState {
  const state = useExecutiveBrain();

  return state;
}