import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Bot } from "lucide-react";

export default function KnowledgeBots() {
  return (
    <FeaturePageLayout
      title="Enterprise Knowledge Bots"
      icon={Bot}
      headline="AI That Knows Your Business"
      subheadline="Deploy intelligent chatbots trained on your enterprise knowledge. Role-aware assistants that trigger workflows and integrate with your existing systems."
      whatItDoes={{
        problem: "Enterprise knowledge is scattered across documents, wikis, and systems. Employees waste hours searching for answers while customers wait for support.",
        whyNeeded: "AI chatbots can instantly surface relevant knowledge, answer questions contextually, and trigger actions—reducing response times and freeing up human experts.",
        howItFits: "Knowledge Bots connect to your data sources via MCP, use governance policies for access control, and can escalate to supervised agents when needed.",
      }}
      capabilities={[
        { title: "Multi-Source Training", description: "Train on documents, databases, wikis, and internal systems simultaneously." },
        { title: "Role-Based Responses", description: "Deliver different answers based on user roles and permissions." },
        { title: "Workflow Triggering", description: "Initiate business processes directly from conversational interactions." },
        { title: "Continuous Learning", description: "Improve accuracy over time with feedback loops and new data ingestion." },
        { title: "Multi-Language Support", description: "Serve global teams with automatic language detection and response." },
        { title: "Audit Trail", description: "Complete logging of all interactions for compliance and improvement." },
      ]}
      useCases={[
        { title: "IT Helpdesk Automation", description: "Resolve common IT issues instantly with AI that knows your internal systems, policies, and procedures." },
        { title: "Customer Support", description: "Provide 24/7 support with bots trained on product documentation, FAQs, and historical tickets." },
        { title: "HR & Policy Assistance", description: "Answer employee questions about benefits, policies, and procedures accurately and consistently." },
        { title: "Sales Enablement", description: "Equip sales teams with instant access to product specs, competitive intel, and pricing information." },
      ]}
      integration={["MCP Servers", "Governance", "Supervised Agents", "Voice AI"]}
    />
  );
}
