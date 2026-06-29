
import {
  updateLivingRuntime,
} from "./livingRuntimeStore";

import type {
  LivingRuntimeSnapshot,
} from "./livingRuntime";

export function refreshLivingRuntime(
  snapshot: LivingRuntimeSnapshot
) {
  updateLivingRuntime({
    snapshot,
  });
}
