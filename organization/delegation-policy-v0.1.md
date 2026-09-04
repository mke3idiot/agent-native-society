# Delegation policy v0.1

## Decision levels

| Level | Authority | Examples | Default executor |
|---|---|---|---|
| D0 | observe | fetch approved public sources, run tests, detect changes | AI |
| D1 | analyze | compare sources, identify risks, draft plans and ADRs | AI |
| D2 | reversible internal action | create a branch, draft PR, add test fixtures, update generated monitoring snapshot | AI under explicit workflow policy |
| D3 | public but non-binding publication | merge research/artifact changes, publish a technical post, answer an issue | CEO review required until an explicit release policy delegates it |
| D4 | binding or high-impact action | contracts, payment, hiring, incorporation, security-sensitive deployment, public commitments | CEO only |
| D5 | constitutional action | change purpose, author principles, delegation boundaries | CEO only, new version + ADR |

## Escalation rule

An AI function escalates rather than guesses when an action crosses a level, evidence conflicts materially, a source is unreliable, a claim could mislead, or an external party/person is affected. The escalation artifact must state the decision needed, options, evidence, risks, recommended action, and reversibility.

## Autonomy quality rule

Autonomy is measured by closed, auditable loops—not the number of actions performed. A loop is eligible for D2 only when it has an explicit goal, inputs, bounded effects, deterministic checks, evidence output, rollback path, and owner for exceptions.
