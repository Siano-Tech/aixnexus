import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Server } from "lucide-react";

export default function MCPEnablement() {
  return (
    <FeaturePageLayout
      title="MCP Enablement"
      icon={Server}
      headline="Safely Expose Enterprise Tools to AI"
      subheadline="Model Context Protocol enablement that gives AI models controlled access to your enterprise tools and data with complete auditability."
      whatItDoes={{
        problem: "AI models need access to enterprise tools to be useful, but direct access creates security and compliance risks that enterprises cannot accept.",
        whyNeeded: "MCP provides a standardized, secure way to expose tools to AI with granular permissions, rate limiting, and complete audit trails.",
        howItFits: "MCP Enablement is the foundation layer that powers Knowledge Bots, Agents, and Automations—giving them controlled access to your systems.",
      }}
      capabilities={[
        { title: "Tool Exposure Framework", description: "Standardized way to make any enterprise tool accessible to AI models." },
        { title: "Granular Permissions", description: "Define exactly which AI agents can access which tools and data." },
        { title: "Rate Limiting", description: "Control how frequently AI can invoke tools to prevent runaway costs." },
        { title: "Request/Response Logging", description: "Complete audit trail of every tool invocation for compliance." },
        { title: "Schema Validation", description: "Ensure all AI requests conform to expected formats before execution." },
        { title: "Multi-Model Support", description: "Works with GPT-4, Claude, Gemini, and custom models." },
      ]}
      useCases={[
        { title: "CRM Integration", description: "Let AI agents look up customer data, update records, and create opportunities safely." },
        { title: "Database Queries", description: "Enable AI to query databases with parameterized queries that prevent injection attacks." },
        { title: "API Orchestration", description: "Expose internal APIs to AI for complex multi-step workflows across systems." },
        { title: "Document Generation", description: "Allow AI to create and store documents in your content management systems." },
      ]}
      integration={["Knowledge Bots", "Supervised Agents", "Automations", "Governance"]}
    />
  );
}
