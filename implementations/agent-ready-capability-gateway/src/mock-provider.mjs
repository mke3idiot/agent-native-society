export class MockProvider {
  #requests = [];

  constructor({ id = "mock-provider", catalog = [{ sku: "analysis-pack", amount: 80, currency: "JPY" }] } = {}) {
    this.id = id;
    this.catalog = catalog;
  }

  discover() {
    return {
      id: `${this.id}:purchase-request:v1`,
      providerId: this.id,
      operation: "commit_purchase_request",
      commitment: { state: "commit", sideEffect: "create_purchase_request", reversible: true },
      recourse: { revokeUntil: "before_fulfillment", disputeChannel: "mock://support/disputes" }
    };
  }

  quote(sku, now) {
    const item = this.catalog.find((candidate) => candidate.sku === sku);
    if (!item) throw new Error(`Unknown SKU: ${sku}`);
    return {
      id: `quote-${sku}-${now.getTime()}`,
      providerId: this.id,
      sku: item.sku,
      amount: item.amount,
      currency: item.currency,
      validUntil: new Date(now.getTime() + 5 * 60_000).toISOString()
    };
  }

  commit(quote, delegation, now) {
    const request = Object.freeze({
      id: `request-${this.#requests.length + 1}`,
      quoteId: quote.id,
      principalId: delegation.principalId,
      providerId: this.id,
      amount: quote.amount,
      currency: quote.currency,
      status: "requested",
      createdAt: now.toISOString(),
      recourse: "mock://support/disputes"
    });
    this.#requests.push(request);
    return request;
  }
}
