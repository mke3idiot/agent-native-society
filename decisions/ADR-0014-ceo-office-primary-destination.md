# ADR-0014: CEO Office as the primary destination for council communication

- Status: Accepted
- Date: 2026-09-04
- Decider: Masahiro Terawaki (CEO)

## Context

The project uses a dedicated CEO Office task as its primary operating interface. Sending scheduled council briefings, CEO questions, or handoff receipts through internal Codex tasks can make their delivery ambiguous, hide the operative response from the CEO, and incorrectly treat an internal message as durable project memory.

## Decision

Deliver scheduled meeting reports, questions for the CEO, and handoff receipts as ordinary assistant responses in `Agent Native Society — CEOオフィス`.

Do not use `send_message_to_thread` to relay those communications to a setup, parent, construction, or other Codex task. An inter-task handoff is allowed only when the CEO explicitly requests it. The repository remains the durable cross-session record; an internal message does not replace writing, verification, and Git handoff under the Session-to-Repository Handoff Protocol.

## Evidence and assumptions

- **Fact:** The CEO Office is designated as the CEO's primary operating task in `AGENTS.md`.
- **Judgment:** Direct delivery to that task is more legible and auditable for CEO-directed communications than an implicit internal relay.
- **Boundary:** This decision governs message routing, not whether a CEO input requires a repository record. The existing handoff protocol continues to determine durable handling.

## Alternatives and trade-offs

- **Relay every result to another task:** may help a construction workflow, but makes the CEO-facing destination indirect and risks confusing a transient message with a project record.
- **Allow any task to choose its destination:** flexible, but makes authority and delivery paths difficult to audit.
- **Require explicit CEO direction for inter-task handoff:** adds a small coordination step, while keeping exceptional routing intentional and visible.

## Risks and failure conditions

- A response may still be missed in the CEO Office task; the remedy is a normal CEO Office follow-up, not a silent relay.
- Treating an internal message as a durable handoff would undermine the repository-as-SSOT rule.

## Reconsider when

The CEO explicitly establishes a different primary operating task or a documented, auditable routing mechanism that preserves direct CEO visibility and repository durability.

## Links

- [AGENTS.md](../AGENTS.md)
- [Session-to-Repository Handoff Protocol](../organization/session-to-repository-handoff-protocol-v0.1.md)
- [ADR-0011: Session-to-Repository Handoff Contract](ADR-0011-session-to-repository-handoff-contract.md)
