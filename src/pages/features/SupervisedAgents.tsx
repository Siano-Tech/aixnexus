import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { UserCheck } from "lucide-react";

export default function SupervisedAgents() {
  return (
    <FeaturePageLayout
      title="Supervised AI Agents"
      icon={UserCheck}
      headline="Autonomous AI With Human Oversight"
      subheadline="Deploy AI agents that can plan and execute complex tasks while keeping humans in control of critical decisions and approvals."
      whatItDoes={{
        problem: "Fully autonomous AI agents are too risky for enterprise environments, but purely manual processes can't scale.",
        whyNeeded: "Supervised agents provide the best of both worlds—AI handles routine execution while humans retain control over high-stakes decisions.",
        howItFits: "Supervised Agents use MCP for tool access, governance for approval policies, and observability for complete visibility into agent actions.",
      }}
      capabilities={[
        { title: "Multi-Step Planning", description: "Agents that break complex goals into executable steps and adapt plans as needed." },
        { title: "Approval Gates", description: "Configurable checkpoints where humans review and approve before agents proceed." },
        { title: "Confidence Scoring", description: "Automatic escalation when agent confidence falls below thresholds." },
        { title: "Action Constraints", description: "Define what actions agents can and cannot take based on policies." },
        { title: "Parallel Execution", description: "Agents that can work on multiple tasks simultaneously with proper isolation." },
        { title: "Memory & Context", description: "Long-term memory that helps agents learn from past interactions." },
      ]}
      useCases={[
        { title: "Research & Analysis", description: "Agents that gather data, synthesize insights, and prepare recommendations for human review." },
        { title: "Customer Success", description: "Proactive agents that identify at-risk customers and draft intervention plans." },
        { title: "Procurement", description: "Agents that research vendors, compare quotes, and prepare purchase recommendations." },
        { title: "Incident Response", description: "Agents that diagnose issues, gather context, and propose solutions for human approval." },
      ]}
      integration={["MCP Servers", "Governance", "Automations", "Observability"]}
    />
  );
}
