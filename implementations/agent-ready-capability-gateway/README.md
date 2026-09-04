# Agent Ready Capability Gateway (ARCG) — implementation brief v0.1

**Status:** implemented local reference v0.1; no production or external-service claim.

## Claim under test

A useful agent-mediated service flow can keep agent reasoning separate from delegated authority, policy enforcement, adapter mechanics, and evidence—without binding the design to MCP or any single protocol.

## Initial scope

Use fictional providers, catalogues, money, principals, and identities. Implement a purchase-request flow with:

```text
discover → quote → request delegation → approve → commit → receipt
                                      ↘ revoke / dispute
```

The capability contract and delegation object are canonical. A mock HTTP/API adapter calls the fictional provider; a future MCP adapter must produce identical policy-relevant events.

## Explicit non-goals

- Real payments, credentials, personal data, or external account access.
- A general agent platform, marketplace, identity provider, or production certification.
- Claiming legal enforceability of the demonstration's authorization model.

## Repository layout

```text
implementations/agent-ready-capability-gateway/
  spec/             canonical contract and delegation schemas
  src/              policy engine, gateway, mock provider, adapters
  tests/            adversarial and state-transition tests
  threat-model.md   assets, trust boundaries, attack paths, mitigations
  README.md
```

## Run it

Requires Node.js 20 or later.

```bash
npm test
npm run demo
```

The demo first attempts a commitment without approval (denied), then approves the delegation and commits the fictional purchase request. It prints the ordered evidence ledger. The test suite also verifies over-budget, expired, revoked, and wrong-provider denial paths.

## Design constraints

- No ambient authority; every commit action references a valid delegation.
- Policy decisions are deterministic and testable, not prompt-dependent.
- Contracts distinguish inquiry from commitment and declare side effects.
- Evidence is append-only within the demo and supports explanation/revocation/dispute traces.
- The first adapter is deliberately mundane; protocol interchangeability is proven by a second adapter later, not asserted.
