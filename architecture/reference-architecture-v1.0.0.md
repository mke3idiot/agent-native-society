# Reference architecture v1.0.0

```text
Principal (person / organization)
  │ grants bounded delegation, receives explanation & recourse
  ▼
Delegation + Identity layer ──► Policy decision / enforcement point
  │                                  │
  ▼                                  ▼
Agent runtime & planner ─────────► Capability gateway
  │                                  │
  │                           protocol adapters
  │                         MCP | API | A2A | UCP | future
  ▼                                  ▼
Evidence / audit / consent store ◄── Service providers & other agents
  │
  └──► human review, revocation, dispute, correction, remediation
```

## Architectural invariants

- **No ambient authority:** the agent receives only delegation needed for the operation.
- **Policy outside the prompt:** prompts can guide reasoning; enforceable limits live in policy and service boundaries.
- **Explicit commitment states:** browse, quote, reserve, authorize, execute, and settle are distinguishable.
- **Protocol adapters are replaceable:** the canonical capability and policy model must outlive any adapter.
- **Evidence follows material actions:** retain privacy-proportionate facts needed for explanation and dispute.
- **Human recourse is a first-class path:** escalation and revocation are not exceptional afterthoughts.

## Capability contract (illustrative)

Every exposed capability should be able to communicate: purpose; actor requirements; accepted delegation; input/output schema; preconditions; cost; side effect and reversibility classification; approval policy; reliability boundaries; evidence emitted; and dispute/contact path.

## Risk tiers

| Tier | Example | Typical control |
|---|---|---|
| 0 | public search | rate limits, provenance cues |
| 1 | personalized recommendation | data minimization, transparent use |
| 2 | draft / reservation | scoped consent, expiry, confirmation option |
| 3 | purchase / binding submission | strong delegation, approval or policy gate, receipt |
| 4 | irreversible or physical action | high assurance, human oversight, emergency stop, recourse |
