import { EvidenceLedger } from "./ledger.mjs";
import { evaluateCommitment } from "./policy.mjs";

export class AgentReadyCapabilityGateway {
  constructor({ provider, clock = () => new Date(), ledger = new EvidenceLedger() }) {
    this.provider = provider;
    this.clock = clock;
    this.ledger = ledger;
    this.delegations = new Map();
  }

  discover() {
    const contract = this.provider.discover();
    this.ledger.append("capability.discovered", { capabilityId: contract.id, providerId: contract.providerId }, this.clock());
    return contract;
  }

  quote(sku) {
    const quote = this.provider.quote(sku, this.clock());
    this.ledger.append("quote.issued", { quoteId: quote.id, providerId: quote.providerId, amount: quote.amount, currency: quote.currency }, this.clock());
    return quote;
  }

  issueDelegation(input) {
    const delegation = Object.freeze({ ...input, approved: false, revoked: false });
    this.delegations.set(delegation.id, delegation);
    this.ledger.append("delegation.issued", { delegationId: delegation.id, principalId: delegation.principalId, providerId: delegation.providerId, maxAmount: delegation.maxAmount }, this.clock());
    return delegation;
  }

  approveDelegation(id) {
    const current = this.#mustFind(id);
    const updated = Object.freeze({ ...current, approved: true });
    this.delegations.set(id, updated);
    this.ledger.append("delegation.approved", { delegationId: id }, this.clock());
    return updated;
  }

  revokeDelegation(id) {
    const current = this.#mustFind(id);
    const updated = Object.freeze({ ...current, revoked: true });
    this.delegations.set(id, updated);
    this.ledger.append("delegation.revoked", { delegationId: id }, this.clock());
    return updated;
  }

  commit({ quote, delegationId }) {
    const delegation = this.delegations.get(delegationId);
    const decision = evaluateCommitment({ delegation, quote, providerId: this.provider.id, now: this.clock() });
    this.ledger.append("policy.evaluated", { delegationId, quoteId: quote.id, allowed: decision.allowed, reason: decision.reason }, this.clock());
    if (!decision.allowed) return { status: "denied", ...decision };

    const request = this.provider.commit(quote, delegation, this.clock());
    const receipt = Object.freeze({
      id: `receipt-${request.id}`,
      delegationId,
      quoteId: quote.id,
      requestId: request.id,
      status: request.status,
      recourse: request.recourse
    });
    this.ledger.append("commitment.created", { receiptId: receipt.id, requestId: request.id, delegationId }, this.clock());
    return { status: "committed", receipt };
  }

  #mustFind(id) {
    const delegation = this.delegations.get(id);
    if (!delegation) throw new Error(`Unknown delegation: ${id}`);
    return delegation;
  }
}
