"use client";

import { runtimeIntrospectionEngine }
  from "./runtime-introspection.engine";

export function useRuntimeIntrospection() {
  return runtimeIntrospectionEngine.inspect();
}