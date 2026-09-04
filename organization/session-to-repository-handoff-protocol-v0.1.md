# Session-to-Repository Handoff Protocol v0.1

## Purpose

The CEO Office must make a durable instruction traceable across Codex sessions. A helpful chat response alone is not a handoff. A repository file that remains uncommitted is not durable project history.

## Scope classification

Classify each CEO input before acting.

| Input | Required durable handling |
|---|---|
| Question or exploratory thought | Answer in the task; do not silently record it. State when no repository record is created. |
| Explicit request to record, change, design, research, or implement | Create/update the appropriate artifact. |
| Material decision, operating rule, authority change, or changed project direction | Create or update an ADR/decision record in addition to affected artifacts. |
| Origin or released historical record | Do not alter meaning. Add a new dated record or version only. |

## Completion contract

For an input requiring durable handling, the responsible Codex session must complete this sequence before claiming success:

1. **Write** the intended artifact in the SSOT location.
2. **Verify** by reopening the specific section or running the applicable test/check.
3. **Assess scope** for unrelated working-tree changes; preserve them.
4. **Commit** only the relevant, verified artifacts with a meaningful message.
5. **Push** the commit to the configured public repository when publication is within the CEO-approved project scope.
6. **Return a handoff receipt** in the CEO Office task.

The receipt uses this compact form:

```text
記録: <path(s)>
検証: <what was reread or tested>
Git: <commit id> / pushed
未記録: <anything intentionally left as conversation only>
```

## Boundary

This protocol does not record every sentence a CEO says. It prevents silent loss only after the input has been classified as a durable project instruction. It also does not authorize public claims, external commitments, purchases, or meaning changes to origin records; those remain governed by the existing authority boundaries.

## Recovery rule

If another session finds an uncommitted artifact that appears to be the output of a CEO instruction, it must not assume it is complete. It verifies the artifact, checks for conflicting work, and either commits it under this protocol or reports the ambiguity to the CEO.
