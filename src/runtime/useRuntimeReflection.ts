"use client";

import { runtimeReflectionEngine }
from "./runtime-reflection.engine";

export function useRuntimeReflection() {
return runtimeReflectionEngine.reflect();
}
