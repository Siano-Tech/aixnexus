import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { BarChart3 } from "lucide-react";

export default function Observability() {
  return (
    <FeaturePageLayout
      title="AI Observability & Governance"
      icon={BarChart3}
      headline="See Everything. Control Everything."
      subheadline="Complete visibility into AI usage, costs, and risks across your enterprise with governance controls that ensure compliance."
      whatItDoes={{
        problem: "Enterprises have no visibility into how AI is being used, what it costs, or whether it's creating compliance risks.",
        whyNeeded: "Observability and governance are essential for responsible AI deployment at scale—you can't manage what you can't measure.",
        howItFits: "Observability is the monitoring layer that tracks all platform activities, while governance provides the policy enforcement.",
      }}
      capabilities={[
        { title: "Usage Analytics", description: "Track who's using AI, how often, and for what purposes across the organization." },
        { title: "Cost Attribution", description: "Allocate AI costs to departments, projects, and use cases accurately." },
        { title: "Risk Scoring", description: "Automated risk assessment of AI outputs and actions based on your policies." },
        { title: "Compliance Reporting", description: "Generate audit reports for regulatory requirements and internal governance." },
        { title: "Alert & Anomaly Detection", description: "Real-time alerts for unusual patterns, policy violations, or cost spikes." },
        { title: "Policy Enforcement", description: "Define and enforce policies across all AI usage centrally." },
      ]}
      useCases={[
        { title: "Budget Management", description: "Track AI spending against budgets and set alerts before overruns." },
        { title: "Compliance Audits", description: "Generate comprehensive audit trails for regulatory examinations." },
        { title: "Risk Management", description: "Identify and mitigate AI-related risks before they become incidents." },
        { title: "Capacity Planning", description: "Forecast AI usage and costs for accurate budgeting and resource allocation." },
      ]}
      integration={["All Platform Modules", "Enterprise SIEM", "BI Tools", "Compliance Systems"]}
    />
  );
}
