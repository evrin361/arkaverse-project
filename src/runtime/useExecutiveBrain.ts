import { useEffect, useState } from "react";

import { subscribeEvent } from "./eventBus";
import { evaluateEvent } from "./executiveBrain";

import type { ReactorState } from "../components/living-core/types";

export function useExecutiveBrain() {

  const [state, setState] = useState<ReactorState>("idle");

  useEffect(() => {

    const unsubscribe = subscribeEvent((event) => {

      setState(evaluateEvent(event));

    });

    return unsubscribe;

  }, []);

  return state;

}