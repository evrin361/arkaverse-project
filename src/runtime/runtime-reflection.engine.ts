import { runtimeAwarenessEngine } from "./runtime-awareness.engine";
import { RuntimeReflectionOutput } from "./runtime-reflection.types";

export const runtimeReflectionEngine = {
  reflect(): RuntimeReflectionOutput {
    const awareness =
      runtimeAwarenessEngine.evaluate();

    let reflection =
      "runtime behavior is stable";

    let confidence = 0.8;

    if (
      awareness.awarenessLevel
        .toLowerCase()
        .includes("focused")
    ) {
      reflection =
        "runtime execution quality is optimal";

      confidence = 0.95;
    }

    return {
      reflection,
      confidence,
      state: awareness.awarenessLevel,
    };
  },
};