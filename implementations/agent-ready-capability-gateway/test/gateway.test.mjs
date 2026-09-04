import assert from "node:assert/strict";
import test from "node:test";
import { AgentReadyCapabilityGateway } from "../src/gateway.mjs";
import { MockProvider } from "../src/mock-provider.mjs";

const baseTime = new Date("2026-09-04T00:00:00.000Z");

function setup(overrides = {}) {
  let now = new Date(baseTime);
  const gateway = new AgentReadyCapabilityGateway({ provider: new MockProvider(), clock: () => now });
  const quote = gateway.quote("analysis-pack");
  gateway.issueDelegation({
    id: "d-1",
    principalId: "p-1",
    providerId: "mock-provider",
    purpose: "purchase_request",
    maxAmount: 100,
    currency: "JPY",
    expiresAt: new Date(baseTime.getTime() + 60_000).toISOString(),
    ...overrides
  });
  return { gateway, quote, setNow: (value) => { now = value; } };
}

test("policy denies an unapproved delegation", () => {
  const { gateway, quote } = setup();
  assert.deepEqual(gateway.commit({ quote, delegationId: "d-1" }), { status: "denied", allowed: false, reason: "delegation_not_approved" });
});

test("policy permits a valid approved delegation and emits receipt evidence", () => {
  const { gateway, quote } = setup();
  gateway.approveDelegation("d-1");
  const result = gateway.commit({ quote, delegationId: "d-1" });
  assert.equal(result.status, "committed");
  assert.equal(result.receipt.recourse, "mock://support/disputes");
  assert.equal(gateway.ledger.all().at(-1).type, "commitment.created");
});

test("policy denies an over-budget commitment even when approved", () => {
  const { gateway, quote } = setup({ maxAmount: 79 });
  gateway.approveDelegation("d-1");
  assert.equal(gateway.commit({ quote, delegationId: "d-1" }).reason, "amount_exceeds_limit");
});

test("policy denies an expired delegation", () => {
  const { gateway, quote, setNow } = setup();
  gateway.approveDelegation("d-1");
  setNow(new Date(baseTime.getTime() + 61_000));
  assert.equal(gateway.commit({ quote, delegationId: "d-1" }).reason, "delegation_expired");
});

test("policy denies a revoked delegation", () => {
  const { gateway, quote } = setup();
  gateway.approveDelegation("d-1");
  gateway.revokeDelegation("d-1");
  assert.equal(gateway.commit({ quote, delegationId: "d-1" }).reason, "delegation_revoked");
});

test("policy denies a delegation scoped to a different provider", () => {
  const { gateway, quote } = setup({ providerId: "other-provider" });
  gateway.approveDelegation("d-1");
  assert.equal(gateway.commit({ quote, delegationId: "d-1" }).reason, "provider_not_delegated");
});
