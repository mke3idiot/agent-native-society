# ADR-0011: Session-to-Repository Handoff Contract

- Status: Accepted
- Date: 2026-09-04
- Decider: Masahiro Terawaki (CEO)

## Context

The CEO Office is intended to be the operating interface of the project. A session can create a correct local artifact, but a later session cannot rely on it as durable shared project history until the artifact is verified and committed. The first session-recording test exposed this boundary: its record existed locally but was uncommitted.

## Decision

Adopt the [Session-to-Repository Handoff Protocol](../organization/session-to-repository-handoff-protocol-v0.1.md). Every durable CEO instruction now has a completion contract: write, verify, scope-check, commit, push when in the approved public scope, and report a compact handoff receipt.

## Consequences

- A future Codex session can use Git history and repository contents as evidence of completed handoff.
- The CEO can distinguish a discussion from a recorded decision without manually auditing the worktree.
- The protocol adds a small verification step, but avoids the larger cost of silent or ambiguous handoffs.
- It does not make chat logs an automatic data store and preserves the existing external-action authority limits.
