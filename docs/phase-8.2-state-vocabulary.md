# Phase 8.2 Architecture Decision

## Canonical Living States

Approved for Phase 8.2

The ARKAVERSE Living Dashboard uses the following canonical system states:

- idle
- active
- focused
- interacting

These states represent behavioral system states and are the official vocabulary used across:

- Living Engine
- Identity Engine
- Identity Render Engine
- ArkaOrb
- Living Dashboard

---

## Event vs State

Events are not canonical states.

Examples:

- hover
- click
- load

These are inputs that may produce a behavioral state.

Example mappings:

hover      → interacting
click      → active
focus      → focused
no activity → idle

---

## Architectural Goal

Phase 8.2 focuses on making internal system state visible.

The objective is:

Behavior
→ Identity
→ Render
→ Orb
→ User Understanding

No new engines or engine layers should be introduced as part of this phase.

---

Status:
APPROVED

Phase:
8.2 Visual State Mapping