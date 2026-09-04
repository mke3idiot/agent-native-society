# Seat registry v0.1

## Seat model

A **seat** is a durable unit of accountability, mandate, authority, and reporting line. A seat is not a person, a model, or a tool. Its holder may change without changing the organization’s purpose or authority structure.

## Hierarchy

```text
L0  CEO — Masahiro Terawaki
 │
 ├─ L1  Expansion Seat / 拡張
 ├─ L1  Preservation Seat / 保持
 └─ L1  Critique Seat / 批判
       │
       └─ L2 Office / department seats
            └─ L3 Domain-lead seats
                 └─ L4 Service / agent / operator seats
```

## Initial CEO-direct seats: exactly three

| ID | Seat | Mandate | Authority level | Current accountable holder | Activation state |
|---|---|---|---|---|---|
| CEO | Chief Executive Officer | purpose, constitutional interpretation, irreversible choices | D5 | 寺脇将大 / Masahiro Terawaki | active |
| EXPAND | Expansion Seat / 拡張 | continuously discover, create, and validate new frontiers: capabilities, products, services, markets, and institutional opportunities | D0–D2 | Codex, when engaged | active, session-operated |
| PRESERVE | Preservation Seat / 保持 | integrate accepted expansion and critique learning into the existing system; maintain continuity, quality, evidence, operations, and reusable assets; propose seat changes when needed | D0–D2 | Codex, when engaged; source monitor for its bounded loop | active, partly automated |
| CRITIQUE | Critique Seat / 批判 | assume risk is always present; actively search for system holes, contradictions, abuse paths, dependencies, and harmful incentives, then report actionable findings | D0–D2 | Codex, when engaged | active, session-operated |

“Codex, when engaged” is an honest interim holder designation, not a claim that three persistent autonomous executives already exist. A seat becomes independently automated only after it has a written delegation, operating loop, quality gate, and exception path.

## Seat creation rule

A new seat requires a decision record containing: purpose contribution; parent seat; mandate; decision level; boundaries; expected artifacts; measurable outcome; interfaces; holder-selection rule; and retirement/merge condition. A new seat may not duplicate a parent’s mandate merely to create hierarchy.

## Office and service expansion

Each L1 seat may propose L2+ seats for CEO approval. A subordinate seat inherits the purpose and boundaries of its parent but has only the delegated authority explicitly recorded for it. Services and agents are L4 capabilities, not independent strategic actors.

## Initial L2 functional placement

| Parent L1 seat | L2 function | Scope |
|---|---|---|
| EXPAND | Research & Intelligence | future signals, prior art, opportunity research |
| EXPAND | Product & Architecture | new specifications, reference implementations, new service design |
| EXPAND | Growth & Ecosystem | evidence-based audience, partner, and standards opportunities |
| PRESERVE | Operating Systems | repository SSOT, workflows, documentation, quality, execution cadence |
| PRESERVE | Evidence & Continuity | record integrity, version history, source maintenance, reusable knowledge |
| CRITIQUE | Risk, Integrity & Assurance | adversarial review, claims discipline, safety, governance, stop conditions |

The L2 functions are not CEO-direct and have no independent strategy. Their parent L1 seat is accountable for their priorities and decisions.

See the [Three-Seat Covenant](three-seat-covenant-v0.1.md) for the shared purpose, working cycle, and mutual-respect rule.
