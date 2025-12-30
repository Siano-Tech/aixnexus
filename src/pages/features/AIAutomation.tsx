import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Zap } from "lucide-react";

export default function AIAutomation() {
  return (
    <FeaturePageLayout
      title="AI Workflow Automation"
      icon={Zap}
      headline="Intelligent Operations at Scale"
      subheadline="AI-powered workflow automation with intelligent decision-making, human approvals, and enterprise-grade reliability."
      whatItDoes={{
        problem: "Traditional RPA is brittle—it breaks when UIs change and can't handle exceptions. Manual workflows are slow and error-prone.",
        whyNeeded: "AI automation understands intent, handles variations, and makes intelligent decisions while keeping humans in control of critical approvals.",
        howItFits: "AI Automation uses MCP for system access, supervised agents for complex decisions, and governance for compliance and audit trails.",
      }}
      capabilities={[
        { title: "Intent-Based Execution", description: "Automation that understands goals, not just steps, and adapts to variations." },
        { title: "Exception Handling", description: "Intelligent handling of edge cases without breaking the workflow." },
        { title: "Approval Workflows", description: "Route decisions to the right humans when AI confidence is low." },
        { title: "Multi-System Orchestration", description: "Coordinate actions across multiple enterprise systems seamlessly." },
        { title: "Conditional Logic", description: "Complex branching based on data, context, and business rules." },
        { title: "Retry & Recovery", description: "Automatic retry with exponential backoff and graceful degradation." },
      ]}
      useCases={[
        { title: "Invoice Processing", description: "Extract data from invoices, validate against POs, and route for approval automatically." },
        { title: "Employee Onboarding", description: "Automate account creation, access provisioning, and equipment ordering for new hires." },
        { title: "Compliance Monitoring", description: "Continuously monitor systems for compliance violations and trigger remediation." },
        { title: "Report Generation", description: "Automatically generate and distribute reports by pulling data from multiple sources." },
      ]}
      integration={["MCP Servers", "Supervised Agents", "Governance", "Observability"]}
    />
  );
}
