# Command, authority, and communication v0.1

## Command rule

Authority flows downward through the reporting line; accountability and escalation flow upward. A lower seat may not enlarge its own authority, redefine another seat’s mandate, or make a D3+ decision by inference.

## Horizontal communication rule

Seats that share the **same immediate superior** may communicate, convene, exchange evidence, coordinate work, and form joint recommendations directly. The reporting line still determines accountability: no seat may expand another seat’s authority or make a decision reserved for their shared superior.

```text
L3 Product domain lead ──► L2 Product office head ──► L1 EXPAND ─┐
                                                                  ├─ direct L1 council / CEO escalation when needed
L3 Operations domain lead ─► L2 Operations office head ─► L1 PRESERVE ─┘
```

For two seats under the same L1 leader, direct coordination is allowed; their L1 leader resolves decisions beyond their authority. For L1 seats, the common immediate superior is the CEO, so Expansion, Preservation, and Critique may hold a direct three-seat council. A decision that changes CEO-reserved direction, constitutional boundaries, or any seat's delegated authority escalates to the CEO.

## Allowed direct interfaces

Direct lateral exchange between seats with different immediate superiors is allowed only when it is a predeclared operational interface that does not decide policy or priority. Examples: a test result passed from an EXPAND subordinate to a CRITIQUE subordinate; a source snapshot passed from PRESERVE to CRITIQUE; a versioned capability contract consumed by an L4 service.

Every direct interface must have:

- defined input and output;
- bounded authority and no implied approval;
- an evidence trail;
- an escalation owner;
- a parent-seat-approved interface contract.

This prevents hierarchy from becoming a communication bottleneck while keeping decision authority legible.

## Three-seat council

The three L1 seats may convene directly because all report to the CEO. The council's job is to connect new frontiers, integration requirements, and risk findings; identify cross-seat dependencies; and prepare clear options for the CEO. Its record must distinguish: decisions each seat can execute under existing delegation, joint recommendations, unresolved disagreements, and CEO decisions required.

## Executive responsibilities

| Seat | Decides within its delegation | Must escalate |
|---|---|---|
| EXPAND | new-frontier research/product/service hypotheses, technical design within accepted ADRs, draft narratives and opportunity experiments | new product commitments, external deployment, public outreach, partnerships, material architecture choices |
| PRESERVE | integration of accepted proposals/findings, repository processes, reproducibility, source maintenance, seat-change proposals, quality of existing assets | workflow permissions, retention policy, changes affecting constitutional records, retirement of material assets, any L1 seat change |
| CRITIQUE | proactive risk findings, red-team plans, alternative framing, severity classification, stop/escalate recommendation | acceptance of material risk, legal/security incident response, external disclosure, changes to CEO direction |

## CEO briefing contract

The CEO should receive only: decisions requiring CEO authority, material risks, opportunity options, evidence changes that affect the strategy, and unresolved cross-executive conflicts. Activity logs and routine maintenance stay within seats unless they cross a defined threshold.
