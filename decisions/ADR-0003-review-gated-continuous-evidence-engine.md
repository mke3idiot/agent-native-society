# ADR-0003: Review-gated continuous evidence engine

**Date:** 2026-09-04  
**Status:** accepted

## Context

The project needs to stay current without asking the author to repeatedly perform low-value monitoring. It also treats public documents as attributable evidence, so unreviewed automated updates would undermine their credibility.

## Decision

Monitor a small set of official sources weekly. When the machine-generated snapshot changes, create a **draft pull request** for review. Human review decides whether to add a source-grounded research update, ADR, specification change, or no change. The workflow never merges, publishes externally, or changes origin records by itself.

The associated evidence scorecard tracks credible proof of authorship and execution, not popularity alone.

## Alternatives and trade-offs

- **Automatic commits to main:** lower effort, but unsound because source drift is not a conclusion.
- **No automation:** lower technical surface, but creates repeated monitoring cost and stale-research risk.
- **Automated social posting:** may increase reach but cannot maintain factual nuance and creates representational risk.

## Risks and failure conditions

The mechanism can create noise, depend on volatile source pages, or fail due to GitHub Actions permissions. It does not validate business demand or create personal reputation. If draft PR noise exceeds useful findings, reduce monitored sources or cadence.

## Links

- [Continuous Evidence Engine](../automation/continuous-evidence-engine.md)
- [Source configuration](../research/monitoring/official-sources.json)
- [Evidence scorecard](../portfolio/evidence-scorecard.md)
