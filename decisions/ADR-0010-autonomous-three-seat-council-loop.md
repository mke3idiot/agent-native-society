# ADR-0010: Autonomous Three-Seat Council Loop

- Status: Accepted
- Date: 2026-09-04
- Decider: Masahiro Terawaki (CEO)

## Context

The repository is intended to operate as the SSOT and organizational system for Agent Native Society. A static public repository becomes stale; requiring the CEO to manually initiate every review contradicts the intended leverage. At the same time, uncontrolled autonomous publication or constitutional edits would detach the project from the author's judgment.

## Decision

Run a scheduled Codex council review that applies EXPAND, PRESERVE, and CRITIQUE viewpoints and creates one concise CEO briefing each day through 2026-09-10 JST. After the bootstrap period, it continues a daily internal review but only interrupts the CEO for a meaningful change, material risk, completion/failure, or CEO-reserved decision.

The detailed inputs, output format, escalation rules, and authority limits are in [the autonomous council runbook](../organization/autonomous-council-runbook-v0.1.md).

## Consequences

- The project gains a recurring mechanism to detect staleness and turn it into an explicit proposal.
- CEO attention is reserved for direction and non-delegable judgment, rather than routine maintenance.
- The scheduled loop is not evidence of independent corporate officers or full autonomy; it remains a bounded Codex workflow.
- A material conclusion must be recorded in the repository before it becomes durable project knowledge.

## Alternatives considered

1. **Manual-only review** — preserves control but makes freshness depend on the CEO's ongoing labor.
2. **Fully autonomous public operation** — increases throughput but exceeds current authority, trust, and governance boundaries.
3. **Weekly-only check-in from day one** — lower interruption cost but too slow to establish an initial operational baseline.
