"use client";

import { identityInspectorEngine } from "./identity-inspector.engine";

export function useIdentityInspector() {

return identityInspectorEngine.inspect();

}