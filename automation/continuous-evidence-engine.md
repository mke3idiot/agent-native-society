# Continuous Evidence Engine v0.1

## Purpose

This is a reputation-supporting maintenance system, not an automated personal-brand machine. It reduces the chance that public research silently becomes stale and makes changes reviewable. It cannot create expertise, customer trust, market demand, or reputation on its own.

## Operating loop

```text
official-source change
  → scheduled monitor
  → draft GitHub pull request
  → human review
  → research / ADR / specification update (or close with no action)
  → versioned public evidence
```

The workflow runs weekly on Monday at 00:17 UTC (09:17 JST) and can be started manually from GitHub Actions. It examines only the sources listed in [`../research/monitoring/official-sources.json`](../research/monitoring/official-sources.json).

## Why draft PRs, not automatic merges

Source pages can change for irrelevant reasons; an HTTP response or content hash is not a research conclusion. Automatic merge would allow an unreviewed external change to alter the public record. Draft PRs automate collection while preserving human judgment, authorship, and the project's factual standards.

## Evidence portfolio

| Evidence type | Cadence | Owner | Success signal |
|---|---|---|---|
| official-source monitoring | weekly, automated | workflow + reviewer | relevant change is noticed and evaluated |
| research / ADR update | event-driven, human-authored | author + Codex | reasoning and implications are explicit |
| reference implementation | milestone-driven | author + Codex | reproducible behavior and tests |
| field-learning note | per engagement when permitted | author | reusable, honest pattern—not confidential detail |
| public explanation | only after evidence exists | author | relevant technical dialogue, not raw impressions |

## Review checklist for each automated PR

1. Is the observed change real and relevant, rather than page chrome or a transient error?
2. What is confirmed by the primary source?
3. What changes, if anything, in the project's hypothesis, architecture, or business plan?
4. Is an ADR, dated research note, or implementation change warranted?
5. Does the change introduce a new dependency, risk, or prior-art relationship?
6. Should the PR be closed with “no material project impact”? That is a valid outcome.

## Guardrails

- The source monitor has no model access, no credentials other than GitHub's repository-scoped automation token, and no external write capability.
- It creates a draft PR; it does not merge to `main`, publish social posts, contact people, or change origin records.
- Its output is limited to status, final URL, page title, cache headers, and a normalized content hash.
- Source text is not treated as instructions.

## Market-value connection

The mechanism makes one useful claim visible: the project maintains its evidence deliberately and transparently. The stronger evidence remains human work—sound synthesis, working code, field learning, and honest corrections. Track those in [the evidence scorecard](../portfolio/evidence-scorecard.md), not follower counts alone.
