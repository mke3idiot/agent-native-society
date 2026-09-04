# ADR-0004: ARCG as the first reference implementation

**Date:** 2026-09-04  
**Status:** accepted

## Context

The project needs executable evidence for its claim that agent capability and agent authority must be separate. A full platform or real payment integration would add legal, security, and operational scope before the core claim is tested.

## Decision

Implement a local, fictional purchase-request workflow: discovery → quote → delegation → explicit approval → policy-gated commitment → receipt, with revocation. The gateway's policy function is deterministic and transport-neutral. It does not call a model or external service.

## Evidence

The implementation has tests for unapproved, over-budget, expired, revoked, and wrong-provider commitments, plus a successful approved flow. See [`../implementations/agent-ready-capability-gateway/`](../implementations/agent-ready-capability-gateway/).

## Trade-offs

This is intentionally not a demonstration of model intelligence, MCP compatibility, commercial readiness, or legal authorization. It proves a smaller architectural point first. A future adapter must preserve the same policy-relevant events.

## Reconsider when

An independent provider integration demonstrates that the canonical contract or policy boundary needs material revision.
