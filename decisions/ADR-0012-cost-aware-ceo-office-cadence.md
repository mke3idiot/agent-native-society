# ADR-0012: Cost-Aware CEO Office Cadence

- Status: Accepted
- Date: 2026-09-04
- Decider: Masahiro Terawaki (CEO)

## Context

The CEO Office initially used a daily scheduled meeting during bootstrap. Local-project scheduled tasks are useful, but there is no documented separate no-cost usage pool for their reasoning runs. The project's current stage does not justify daily autonomous reasoning when deterministic source monitoring can remain in GitHub Actions.

## Decision

Run the CEO Office three-seat meeting weekly, every Monday at 09:00 JST. Keep the existing GitHub Actions evidence monitor on its narrow weekly task. CEO-directed work remains on demand.

The current protocol is [Autonomous Council Runbook v0.2](../organization/autonomous-council-runbook-v0.2.md).

## Consequences

- Reduces scheduled Codex usage while preserving a non-optional CEO decision trigger.
- Creates a maximum routine-review latency of one week; an urgent matter still requires a CEO-initiated run or a separate future event-driven mechanism.
- Avoids incorrectly treating GitHub Actions as an AI reasoning engine or a way to wake the local Codex application.
