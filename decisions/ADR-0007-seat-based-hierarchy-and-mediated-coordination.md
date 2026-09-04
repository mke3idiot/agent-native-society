# ADR-0007: Seat-based hierarchy and mediated coordination

**Date:** 2026-09-04  
**Status:** accepted

## Context

The CEO requires a scalable organization where direct reports carry distinct responsibility; lower layers have distinct authority; and horizontal coordination is normally mediated by the appropriate superior. The earlier functional organization was too flat to make responsibility and escalation legible.

## Decision

Adopt a seat-based hierarchy. Seats are persistent responsibility units; holders are replaceable. The CEO has exactly three initial direct executive seats: **Expansion**, **Preservation**, and **Critique**. Research & Intelligence, Product & Architecture, Operating Systems, Growth & Ecosystem, and Risk/Integrity functions are L2+ functions under one of the three seats. L2–L4 seats can be created beneath them as capabilities demand.

Governance and priority decisions travel up to the immediate common superior. Direct lateral exchange is permitted only through a defined operational interface with bounded authority and an audit trail.

## Trade-offs

The hierarchy prevents unclear authority and preserves CEO attention. It can add latency if every data exchange goes upward, so bounded direct interfaces are allowed for routine operations. The organization must not use titles to imitate scale; a seat requires a real mandate and measurable output.

## Reconsider when

Evidence shows that a different reporting topology reduces decision latency without weakening accountability or the single-purpose constraint.

## Links

- [Seat Registry](../organization/seat-registry-v0.1.md)
- [Command and Communication](../organization/command-and-communication-v0.1.md)
- [Delegation Policy](../organization/delegation-policy-v0.1.md)
