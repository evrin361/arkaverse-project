import { useEffect, useState } from "react";

import { eventBus } from "./event-bus/event-bus";
import { evaluateEvent } from "./executiveBrain";

import type { ReactorState } from "../components/living-core/types";
import { subscribeRuntime } from "./runtimeStore";
import { getRuntimeContext } from "./runtimeStore";
export function useExecutiveBrain() {

  const [state, setState] = useState<ReactorState>("idle");

  useEffect(() => {

    eventBus.on("runtime:event", (payload) => {
  const event = payload.type as Parameters<typeof evaluateEvent>[0];

  setState(evaluateEvent(event));
});

const unsubscribeRuntime = subscribeRuntime((runtime) => {

console.info("[EXECUTIVE]", {
  runtime,
});


});

return () => {
  unsubscribeRuntime();
};
  }, []);

  return state;

}