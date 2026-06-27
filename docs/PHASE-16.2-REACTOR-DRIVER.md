# PHASE 16.2 — Reactor Driver

## Goal

Connect Executive Brain to LivingCore automatically.

After this phase the LivingCore must no longer receive manual states.

The runtime itself becomes the source of truth.

---

## Current Architecture

Executive Brain

↓

Runtime Store

↓

LivingCore (manual state)

---

## Target Architecture

Executive Brain

↓

Runtime Store

↓

Reactor Driver

↓

LivingCore

---

## Responsibilities

### Reactor Driver

* Reads Runtime Store
* Reads Executive Brain
* Resolves current ReactorState
* Passes behavior into LivingCore

LivingCore must become a pure renderer.

---

## Rules

LivingCore must never:

* decide its own state
* inspect Runtime Store
* contain business logic

LivingCore only renders.

---

## Expected Result

Changing Runtime State automatically changes:

* Energy Field
* Core Glow
* Core Scale
* Signal Speed
* Signal Glow

without manually passing state props.

---

## Build Requirement

npm run build

must remain successful.
