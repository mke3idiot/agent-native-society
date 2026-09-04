import { AgentReadyCapabilityGateway } from "./gateway.mjs";
import { MockProvider } from "./mock-provider.mjs";

const gateway = new AgentReadyCapabilityGateway({ provider: new MockProvider() });
const contract = gateway.discover();
const quote = gateway.quote("analysis-pack");
gateway.issueDelegation({
  id: "delegation-demo-1",
  principalId: "principal-demo",
  providerId: contract.providerId,
  purpose: "purchase_request",
  maxAmount: 100,
  currency: "JPY",
  expiresAt: new Date(Date.now() + 60_000).toISOString()
});

console.log("Before approval:", gateway.commit({ quote, delegationId: "delegation-demo-1" }));
gateway.approveDelegation("delegation-demo-1");
console.log("After approval:", gateway.commit({ quote, delegationId: "delegation-demo-1" }));
console.log("Evidence:", gateway.ledger.all());
