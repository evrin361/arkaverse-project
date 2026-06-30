import { useEffect, useState } from "react";

import { subscribeEvent } from "./eventBus";
import { evaluateEvent } from "./executiveBrain";

import type { ReactorState } from "../components/living-core/types";
import { subscribeRuntime } from "./runtimeStore";
import { getRuntimeContext } from "./runtimeStore";
export function useExecutiveBrain() {

  const [state, setState] = useState<ReactorState>("idle");

  useEffect(() => {

    const unsubscribe = subscribeEvent((event) => {

      setState(evaluateEvent(event));

    });

const unsubscribeRuntime = subscribeRuntime((runtime) => {

console.info("[EXECUTIVE]", {
  runtime,
});


});

return () => {
  unsubscribe();
  unsubscribeRuntime();
};
  }, []);

  return state;

}