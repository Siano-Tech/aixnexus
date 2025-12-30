import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { MessageSquare } from "lucide-react";

export default function BusinessBots() {
  return (
    <FeaturePageLayout
      title="Interactive Business Bots"
      icon={MessageSquare}
      headline="Conversations That Drive Action"
      subheadline="Multi-channel conversational bots with context-aware interactions, forms, decision flows, and seamless handoffs to human agents."
      whatItDoes={{
        problem: "Traditional chatbots are rigid and frustrating. They can't handle complex conversations, lose context, or guide users through multi-step processes.",
        whyNeeded: "Modern enterprises need conversational AI that understands context, guides users through complex flows, and seamlessly escalates when needed.",
        howItFits: "Business Bots leverage MCP for data access, use governance for compliance, and can trigger supervised agents for complex decisions.",
      }}
      capabilities={[
        { title: "Multi-Channel Deployment", description: "Deploy on web, mobile, Slack, Teams, and custom channels from a single build." },
        { title: "Context Persistence", description: "Maintain conversation context across sessions and channels." },
        { title: "Dynamic Forms", description: "Collect structured data through conversational forms that adapt to user responses." },
        { title: "Decision Trees", description: "Guide users through complex decision processes with branching logic." },
        { title: "Human Handoff", description: "Seamlessly transfer to human agents with full conversation context." },
        { title: "Rich Media Support", description: "Handle images, documents, and structured data in conversations." },
      ]}
      useCases={[
        { title: "Customer Onboarding", description: "Guide new customers through account setup, verification, and initial configuration conversationally." },
        { title: "Lead Qualification", description: "Qualify leads through natural conversation and route high-value prospects to sales." },
        { title: "Order Management", description: "Help customers place orders, check status, and handle modifications through chat." },
        { title: "Feedback Collection", description: "Gather structured feedback through conversational surveys that feel natural." },
      ]}
      integration={["MCP Servers", "Knowledge Bots", "Voice AI", "Governance"]}
    />
  );
}
