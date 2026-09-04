# Autonomous Council Runbook v0.2

**Date:** 2026-09-04  
**Relationship to v0.1:** Supersedes the operating cadence in [v0.1](autonomous-council-runbook-v0.1.md) without changing its authority boundaries or three-seat model.

## Current cadence

The CEO Office runs one scheduled **weekly** council meeting: Monday, 09:00 JST. This is the default operating cadence for EXPAND, PRESERVE, and CRITIQUE.

Before each meeting, Codex reads the repository SSOT and performs a read-only refresh of the GitHub state. It then produces a CEO Selection Brief with no more than three decisions, or a concise statement that no decision is required.

## Why weekly

Codex's scheduled meeting is an account-backed reasoning run, not a no-cost daemon. Daily autonomous reasoning offered little additional value for the current project stage while consuming more of the shared Codex usage allowance. The weekly cadence preserves a reliable decision trigger and leaves routine, deterministic evidence monitoring to GitHub Actions.

## Division of work

| Mechanism | Responsibility | Cadence | CEO interruption |
|---|---|---|---|
| GitHub Actions | deterministic official-source snapshot and draft PR on source change | weekly | only through normal GitHub review when a substantive PR exists |
| CEO Office scheduled Codex task | three-seat reasoning, synthesis, decision framing, and response handling | weekly | one Monday CEO Selection Brief |
| CEO Office on-demand | CEO-directed work, analysis, implementation, and durable handoff | whenever requested | CEO initiates |

No mechanism may convert reduced meeting frequency into hidden autonomous publication, commitments, or constitutional changes. The authority boundary and handoff requirements in v0.1 remain in force.
