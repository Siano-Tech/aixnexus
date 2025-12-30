import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { AppWindow } from "lucide-react";

export default function AppBuilder() {
  return (
    <FeaturePageLayout
      title="ChatGPT App Builder"
      icon={AppWindow}
      headline="Build AI Apps in Hours, Not Months"
      subheadline="Rapidly build secure, role-based AI applications for internal teams and customers without traditional development cycles."
      whatItDoes={{
        problem: "Building AI applications requires specialized skills, takes months, and often results in insecure or ungovernable solutions.",
        whyNeeded: "Enterprises need to rapidly deploy AI apps that are secure by default, respect existing permissions, and integrate with enterprise systems.",
        howItFits: "App Builder uses MCP for data access, governance for security, and the full platform for features like voice, agents, and automation.",
      }}
      capabilities={[
        { title: "Visual App Builder", description: "Drag-and-drop interface for creating AI-powered applications without code." },
        { title: "Role-Based Access", description: "Apps automatically respect enterprise SSO and role permissions." },
        { title: "Pre-Built Components", description: "Library of enterprise-ready components for common AI use cases." },
        { title: "Custom Branding", description: "White-label apps with your brand, deployed on your domain." },
        { title: "API Integration", description: "Connect to any API or data source with built-in connectors." },
        { title: "Version Control", description: "Track changes, rollback, and manage multiple environments." },
      ]}
      useCases={[
        { title: "Internal AI Assistants", description: "Build specialized assistants for finance, legal, HR, and other departments." },
        { title: "Customer Self-Service", description: "Create AI-powered portals that help customers solve their own problems." },
        { title: "Partner Portals", description: "Deploy AI apps for partners with appropriate data access and permissions." },
        { title: "Proof of Concepts", description: "Rapidly prototype AI solutions to validate business cases before major investment." },
      ]}
      integration={["MCP Servers", "Knowledge Bots", "Supervised Agents", "Governance"]}
    />
  );
}
