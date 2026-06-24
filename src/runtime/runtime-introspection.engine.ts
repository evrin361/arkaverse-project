import { runtimeReflectionEngine } from "./runtime-reflection.engine";
import { RuntimeIntrospectionOutput } from "./runtime-introspection.types";

export const runtimeIntrospectionEngine = {
  inspect(): RuntimeIntrospectionOutput {
    const reflection =
      runtimeReflectionEngine.reflect();

    let observation =
      "runtime requires deeper inspection";

    if (reflection.confidence >= 0.9) {
      observation =
        "runtime is operating at peak quality";
    } else if (
      reflection.confidence >= 0.8
    ) {
      observation =
        "runtime is operating within expected bounds";
    }

    return {
      observation,
      confidence: reflection.confidence,
      reflection: reflection.reflection,
      awarenessLevel: "introspective",
    };
  },
};