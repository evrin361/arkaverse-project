# PROJECT MASTER CONTEXT

## HERA Ecosystem / ARKAVERSE Platform

This document is the primary context handoff file for continuing development in a new ChatGPT conversation.

---

# Founder Goal

The immediate goal is to launch a professional ARKAVERSE website that can serve as:

* Business identity
* Portfolio
* Demonstration of technical capability
* Lead generation platform
* Future client acquisition tool

The project is currently self-funded with limited resources.

Development prioritizes visible progress and production deployment.

---

# Ecosystem Structure

HERA Ecosystem

Parent Brand

Sub Brands:

1. ARKAVERSE

Business Operating System

Purpose:

Systemization, automation, organization and operational guidance for businesses.

2. Smart Tahlil

Analytics and intelligence platform.

Additional brands may be added in the future.

---

# Current Technical Stack

Framework:
Next.js App Router

Language:
TypeScript

Styling:
Tailwind CSS

Animation Foundation:
GSAP

Deployment:
Vercel

Repository:
GitHub

Domain:
arkaverse.ir

---

# Architectural Philosophy

ARKAVERSE is not being built as a traditional website.

ARKAVERSE is being built as a Business Operating System.

The UI should eventually represent a living operational system.

Internal state should become visible.

The platform should feel alive.

---

# Architect Approved Direction

Current direction approved.

Replay Engine completion was correct.

Priority:

Identity Engine
→ Render Engine
→ ArkaOrb
→ Living Dashboard

Goal:

Make internal state visible.

Avoid:

* Runtime Inspector
* Event Timeline
* Visual DevTools
* New Engine Layers

Until first complete Living Dashboard exists.

---

# Current Architecture

User Event
↓
Orchestrator
↓
Living Engine
↓
Identity Engine
↓
Identity Render Engine
↓
ArkaOrb
↓
Living Dashboard

---

# Implemented Systems

Runtime

* Runtime Boot
* Event Engine
* Event Bus
* Event History
* Replay Engine

Core

* Arka Orchestrator
* Memory Store
* Plugin Runtime
* Plugin Registry

Identity

* Identity Engine
* Orb Engine
* Reactive Engine
* Visual Engine

Rendering

* Identity Render Engine
* useIdentityRender
* Living Dashboard

UI

* ArkaOrb
* Dashboard

---

# Production Status

GitHub:
Synced

Vercel:
Synced

Production:
Live

Routes:

/
/dashboard

Both routes currently render the Living Dashboard.

---

# Latest Stable Commit

9672654

docs: add architecture status snapshot

---

# Current Phase

Phase 8.1.1

Living Dashboard v1

Completed.

---

# Next Phase

Phase 8.2

Visual State Mapping

States to visualize:

* idle
* active
* focused
* interacting

Goal:

Map internal system state into visual Orb behavior.

The objective is not animation.

The objective is visibility.

---

# Development Rules

1. Preserve architecture consistency.

2. Avoid creating new engine layers.

3. Prefer visualization over architecture expansion.

4. Maintain TypeScript strictness.

5. Lint and Build must pass before every commit.

6. GitHub and Vercel must remain synchronized.

7. Document important milestones inside /docs.

---

# Important Note

The project is intended to become a professional public-facing business platform and portfolio.

Every phase should contribute toward a production-ready ARKAVERSE experience.
