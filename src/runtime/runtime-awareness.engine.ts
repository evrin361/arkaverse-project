import { runtimeStateEngine } from "./runtime-state.engine";
import { RuntimeAwarenessOutput } from "./runtime-awareness.types";

export const runtimeAwarenessEngine = {
  evaluate(): RuntimeAwarenessOutput {
const state = runtimeStateEngine.evaluate();
    const requiresAttention =
      state.health !== "healthy" ||
      state.trend === "negative";

    const awarenessLevel = requiresAttention
      ? "alert"
      : "stable";

    return {
      health: state.health,
      trend: state.trend,
      summary: state.summary,
      awarenessLevel,
      requiresAttention,
    };
  },
};