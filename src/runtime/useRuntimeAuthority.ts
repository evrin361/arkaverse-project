import { runtimeAuthorityEngine } from "./runtime-authority.engine";

export function useRuntimeAuthority() {
  return runtimeAuthorityEngine.authorize();
}