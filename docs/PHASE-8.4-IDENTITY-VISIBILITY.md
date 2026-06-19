# Phase 8.4 — Identity Visibility

Status: Proposed

Goal:

Expose Identity Engine state through the Living Dashboard.

Motivation:

The current architecture contains a complete Identity layer, but its state is not directly visible to the user.

Source of Truth:

Identity Engine

Visible Information:

* Identity State

Examples:

* idle
* active
* focused
* loading

Architecture:

Identity Engine
→ Identity Inspector
→ Dashboard

Rules:

* No new engine layers
* No runtime expansion
* No new orchestrator logic
* Reuse existing Identity Engine

Objective:

Make Identity activity visible.

Not create new Identity behavior.
