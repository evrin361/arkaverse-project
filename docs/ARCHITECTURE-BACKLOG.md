# TypeScript Migration Backlog

## Status

Deferred

---

## Reason

The project is currently running on:

* Next.js 16
* TypeScript 5.9.x

The current architecture depends on `baseUrl` for module resolution.

Although newer TypeScript language services warn that `baseUrl` will be deprecated in TypeScript 7, the current project builds successfully and remains fully stable.

Removing `baseUrl` at this stage causes module resolution issues and breaks the project build.

---

## Decision

The migration to TypeScript 6 and later TypeScript 7 is intentionally postponed.

Current priority is:

* Runtime Core
* Living Reactor
* Executive Runtime
* Runtime Stability

Maintaining a stable architecture has higher priority than removing future deprecation warnings.

---

## Future Work

Before ARKAVERSE v1.0:

* Upgrade to TypeScript 6.
* Prepare compatibility for TypeScript 7.
* Remove dependency on `baseUrl`.
* Rework module aliases if required.
* Validate all Runtime, Design System and Living Core imports.

---

## Current State

* ✅ Build passes successfully.
* ✅ Runtime is stable.
* ✅ No production issue exists.
* ⚠️ Only a future TypeScript deprecation warning remains.
