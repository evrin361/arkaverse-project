import { identityEngine } from "../design-system/engine/identity.engine";

import { IdentityInspectorData } from "./identity-inspector.types";

export const identityInspectorEngine = {

inspect(): IdentityInspectorData {

return {

identityState: identityEngine.getState(),

};

},

};