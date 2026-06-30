
import { runtimeRegistry } from "./runtimeRegistry";

export const runtimeSnapshotCoordinator = {
  inspect() {
    return {
      timestamp: Date.now(),

      version: "v2",

      runtimes: {
        identity: runtimeRegistry.identity.inspect(),

        memory: runtimeRegistry.memory.inspect(),

        living: runtimeRegistry.living.inspect(),
      },
    };
  },
};