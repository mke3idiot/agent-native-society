# Command, authority, and communication v0.1

## Command rule

Authority flows downward through the reporting line; accountability and escalation flow upward. A lower seat may not enlarge its own authority, redefine another seat’s mandate, or make a D3+ decision by inference.

## Horizontal communication rule

Seats at the same level do not make governance, priority, budget, public-position, or scope decisions directly with one another. Those matters flow through their immediate common superior.

```text
L3 Product domain lead ──► L2 Product office head ──► L1 EXPAND
                                                       │
                                                  CEO if cross-executive
                                                       │
L3 Operations domain lead ─► L2 Operations office head ─► L1 PRESERVE
```

For two seats under the same L1 leader, their L1 leader is the decision route. For seats under different L1 leaders, each L1 leader coordinates; conflicts or constitutional material escalate to the CEO.

## Allowed direct interfaces

Direct lateral exchange is allowed only when it is a predeclared operational interface that does not decide policy or priority. Examples: a test result passed from an EXPAND subordinate to a CRITIQUE subordinate; a source snapshot passed from PRESERVE to CRITIQUE; a versioned capability contract consumed by an L4 service.

Every direct interface must have:

- defined input and output;
- bounded authority and no implied approval;
- an evidence trail;
- an escalation owner;
- a parent-seat-approved interface contract.

This prevents hierarchy from becoming a communication bottleneck while keeping decision authority legible.

## Executive responsibilities

| Seat | Decides within its delegation | Must escalate |
|---|---|---|
| EXPAND | new-frontier research/product/service hypotheses, technical design within accepted ADRs, draft narratives and opportunity experiments | new product commitments, external deployment, public outreach, partnerships, material architecture choices |
| PRESERVE | integration of accepted proposals/findings, repository processes, reproducibility, source maintenance, seat-change proposals, quality of existing assets | workflow permissions, retention policy, changes affecting constitutional records, retirement of material assets, any L1 seat change |
| CRITIQUE | proactive risk findings, red-team plans, alternative framing, severity classification, stop/escalate recommendation | acceptance of material risk, legal/security incident response, external disclosure, changes to CEO direction |

## CEO briefing contract

The CEO should receive only: decisions requiring CEO authority, material risks, opportunity options, evidence changes that affect the strategy, and unresolved cross-executive conflicts. Activity logs and routine maintenance stay within seats unless they cross a defined threshold.
