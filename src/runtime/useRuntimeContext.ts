import { useEffect, useState } from "react";

import {
  getRuntimeContext,
  subscribeRuntime,
} from "./runtimeStore";

export function useRuntimeContext() {

  const [runtime, setRuntime] =
    useState(getRuntimeContext());

  useEffect(() => {

    return subscribeRuntime(setRuntime);

  }, []);

  return runtime;

}