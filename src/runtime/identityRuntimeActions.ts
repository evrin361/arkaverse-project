
import { getIdentitySnapshot } from "./identityRuntimeStore";

export function getIdentity() {
  return getIdentitySnapshot();
}

export function getIdentityName() {
  return getIdentitySnapshot().name;
}

export function getIdentityRole() {
  return getIdentitySnapshot().role;
}

export function getIdentityMission() {
  return getIdentitySnapshot().mission;
}

export function getIdentityState() {
  return getIdentitySnapshot().state;
}