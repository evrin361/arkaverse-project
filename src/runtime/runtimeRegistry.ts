
import { identityEngine } from "./identityEngine";
import { memoryInspectorEngine } from "./memory-inspector.engine";
import { livingRuntimeEngine } from "./living-runtime.engine";

import type { RuntimeName } from "./runtime.types";

export const runtimeRegistry = {
          identity: identityEngine,

  memory: memoryInspectorEngine,

  living: livingRuntimeEngine,
};