import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Phone } from "lucide-react";

export default function VoiceAgents() {
  return (
    <FeaturePageLayout
      title="Voice AI Agents"
      icon={Phone}
      headline="AI That Speaks Your Language"
      subheadline="Deploy inbound and outbound AI calling with real-time transcription, natural conversation, and seamless human escalation."
      whatItDoes={{
        problem: "Phone-based customer service is expensive and inconsistent. Long hold times frustrate customers while quality varies by agent.",
        whyNeeded: "Voice AI can handle routine calls 24/7 with consistent quality, while seamlessly escalating complex issues to human agents.",
        howItFits: "Voice Agents connect to your systems via MCP, use supervised agents for complex decisions, and log everything for governance.",
      }}
      capabilities={[
        { title: "Natural Conversation", description: "Voice AI that sounds human with natural pauses, intonation, and turn-taking." },
        { title: "Real-Time Transcription", description: "Live transcription of every call for compliance and quality assurance." },
        { title: "Sentiment Detection", description: "Identify frustrated or upset callers and route appropriately." },
        { title: "Multi-Language", description: "Support for multiple languages with automatic detection and switching." },
        { title: "Warm Transfer", description: "Hand off to humans with full context so callers don't repeat themselves." },
        { title: "Outbound Campaigns", description: "AI-powered outbound calling for appointments, reminders, and follow-ups." },
      ]}
      useCases={[
        { title: "Customer Service", description: "Handle routine inquiries, account updates, and issue resolution by voice." },
        { title: "Appointment Scheduling", description: "AI that calls to schedule, confirm, and reschedule appointments automatically." },
        { title: "Collections", description: "Compliant outbound calling for payment reminders and collections." },
        { title: "Survey & Feedback", description: "Conduct voice surveys that feel like conversations, not interrogations." },
      ]}
      integration={["MCP Servers", "Business Bots", "Supervised Agents", "Governance"]}
    />
  );
}
