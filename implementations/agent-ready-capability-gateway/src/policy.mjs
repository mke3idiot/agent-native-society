export function evaluateCommitment({ delegation, quote, providerId, now }) {
  if (!delegation) return deny("delegation_missing");
  if (delegation.revoked) return deny("delegation_revoked");
  if (!delegation.approved) return deny("delegation_not_approved");
  if (new Date(delegation.expiresAt) <= now) return deny("delegation_expired");
  if (delegation.providerId !== providerId) return deny("provider_not_delegated");
  if (delegation.purpose !== "purchase_request") return deny("purpose_not_allowed");
  if (delegation.currency !== quote.currency) return deny("currency_mismatch");
  if (quote.amount > delegation.maxAmount) return deny("amount_exceeds_limit");
  if (new Date(quote.validUntil) <= now) return deny("quote_expired");
  return { allowed: true, reason: "allowed" };
}

function deny(reason) {
  return { allowed: false, reason };
}
