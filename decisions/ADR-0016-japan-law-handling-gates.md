# ADR-0016: Japan-law handling gates and three-seat review

- Status: Accepted
- Date: 2026-09-04
- Decider: Masahiro Terawaki (CEO)

## Context

The CEO directed the three-seat council to research Japanese law thoroughly and create handling rules. The project currently publishes a public repository, expects possible inbound interest, and explores agent-mediated services, while remaining pull-based and outside real-service operation.

The project also discovered a material record error: ADR-0015 and its linked addenda said that no license had been selected, based on GitHub's `NOASSERTION` classifier. The repository contains a `LICENSE` file with a Creative Commons Attribution 4.0 International notice. This ADR corrects the factual premise without deciding the legal scope or effect of that notice.

## Decision

1. Adopt [Japan-law handling gates v0.1](../organization/japan-law-handling-gates-v0.1.md) as the internal gate for public materials, inbound contact, third-party material, commercial activity, real-service connections, and regulated or cross-border activity.
2. Maintain a dated, primary-source [research baseline](../research/japan-law-handling-baseline-2026-09-04.md). EXPAND identifies permitted low-risk work and emerging opportunities; PRESERVE maintains evidence and data/rights records; CRITIQUE identifies stop conditions, ambiguous applicability, and specialist escalation.
3. Treat this system as a decision-and-escalation framework, not legal advice, legal compliance, or a certification program. A disclaimer cannot create permission, consent, a license, a contract, or substantiation.
4. Correct the earlier license fact through new, dated records. Do not infer the scope of the repository license from GitHub's classifier alone; confirm the applicable text, contribution history, third-party materials, and context before making a reuse representation.

## Evidence and assumptions

- **CEO instruction:** Japanese-law research and handling rules are necessary; compliance violations are unacceptable.
- **Repository fact:** The current implementation is fictional and local, but the repository is public and may receive inbound interest.
- **Primary-source research:** The baseline records official Japanese sources on copyright, personal information, communication sales, representations, AI governance, and unauthorized access, with observation date and scope.
- **Limitation:** Applicability depends on facts, legal status, jurisdiction, contractual terms, and regulated sector. The research is not exhaustive.

## Alternatives and trade-offs

- **Add only disclaimers:** low effort, but leaves the underlying activity, rights, data, and claims unmanaged.
- **Seek a complete legal opinion before any work:** may be appropriate for a concrete high-risk launch, but would block low-risk research and does not scale across unknown future activities.
- **Use activity gates with professional escalation:** permits bounded public research while stopping actions that introduce data, money, credentials, sector rules, or legal commitments.

## Risks and failure conditions

- The gate could be mistaken for legal approval; every rule therefore names escalation boundaries and avoids compliance claims.
- A source can change or be incomplete; the record must be updated when an activity trigger occurs.
- Overbroad caution can prevent discovery; the gates explicitly allow accurately scoped, self-authored research and fictional implementations.

## Reconsider when

- The CEO changes the public distribution or external-engagement strategy.
- A real service, data flow, payment, regulated sector, contract, or non-Japanese jurisdiction becomes concrete.
- A specialist identifies a material error or a more suitable governance structure.

## Links

- [Japan-law handling gates v0.1](../organization/japan-law-handling-gates-v0.1.md)
- [Japan-law baseline](../research/japan-law-handling-baseline-2026-09-04.md)
- [ADR-0015: Pull distribution and authorship clarification](ADR-0015-pull-distribution-and-authorship-clarification.md)
