# ARCG threat model v0.1

## Scope

ARCG is a local reference implementation with fictional principals, providers, money, and identities. It demonstrates a governed purchase-request commitment boundary. It is not secure for production deployment and does not make legal authorization claims.

## Assets and trust boundaries

| Asset | Required property | Trust boundary |
|---|---|---|
| delegation | only valid, scoped, approved authority can commit | principal/policy boundary |
| quote | amount, provider, currency, and expiry remain explicit | provider/gateway boundary |
| policy decision | deterministic and independent of agent text | gateway boundary |
| evidence ledger | material transitions are inspectable in order | gateway/audit boundary |
| recourse route | receipt names a route for dispute/escalation | provider/principal boundary |

## Threats tested by the implementation

| Threat | Control | Test |
|---|---|---|
| agent acts without approval | `approved` must be true | unapproved delegation denial |
| agent exceeds spending limit | quote amount is checked against `maxAmount` | over-budget denial |
| stale authority is used | expiry is checked at commit time | expired delegation denial |
| revoked authority is reused | revoked state is checked at commit time | revoked delegation denial |
| authority is confused across providers | provider identity is checked | wrong-provider denial |

## Explicitly out of scope

- cryptographic signatures, durable storage, replay protection, authentication, and distributed audit integrity;
- a real identity system, payment system, provider API, or regulatory compliance;
- prompt injection defense beyond the architectural separation that prevents prompt text from changing policy;
- provider-side fulfillment, refund, and dispute adjudication;
- protection against a compromised runtime or an attacker with direct memory/code access.

## Next security work

Before connection to any real provider: formalize signed delegation, persistent append-only evidence, idempotency and replay protection, authenticated provider adapters, permission isolation, red-team tests using malicious provider content, privacy/data-retention controls, and independent security review.
