# ADR-0001: Repository as the project SSOT

**Date:** 2026-09-04  
**Status:** accepted

## Context

Agent Native Society involves long-horizon thinking, external research, business hypotheses, specifications, implementations, and consequential choices. Conversation-only work loses provenance and makes later implementation drift likely.

## Decision

This repository is the single source of truth for project artifacts. Codex is expected to work across thought partnership, research, specification, design, documentation, decision recording, English improvements, and implementation. Important outcomes are committed to the repository in a form appropriate to their type.

## Consequences

- A chat result is provisional until represented in the repository where it materially affects the project.
- Facts, hypotheses, and opinions require explicit separation.
- Released origin records retain their meaning; later thinking is appended as a new record.
- The repository gains process overhead; that overhead is accepted only because it produces traceability, continuity, and implementation readiness.

## Alternatives considered

- **Conversation as the primary record:** low immediate friction, but poor provenance and weak handoff.
- **Separate tools for strategy and code:** familiar, but fragments context and encourages design/implementation drift.

## Reconsider when

The repository becomes materially less usable than a structured alternative that preserves versioned provenance and cross-layer traceability.
