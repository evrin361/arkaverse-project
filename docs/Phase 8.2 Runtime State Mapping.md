# Phase 8.2 Runtime State Mapping

Approved

Canonical Living States:

* idle
* active
* focused
* interacting

Runtime Event Mapping:

* hover → interacting
* click → active
* focus → focused
* default → idle

Notes:

Events are transient inputs.

Living States are behavioral states.

Visual mapping should be based on Living States rather than raw UI events.
