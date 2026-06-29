
import { runtimeRegistry } from "./runtimeRegistry";

export const runtimeSnapshotCoordinator = { 
     inspect() {
    return {
      identity: runtimeRegistry.identity.inspect(),

      memory: runtimeRegistry.memory.inspect(),

      living: runtimeRegistry.living.inspect(),
    };
  },
};