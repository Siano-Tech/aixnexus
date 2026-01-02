import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Bot, Search, FileText, Database, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const KnowledgeBotDemo = () => (
  <div className="w-full max-w-4xl mx-auto">
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
      {/* Chat Interface Header */}
      <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-mono text-sm font-medium">Enterprise Knowledge Assistant</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Online • Trained on 12,847 documents
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-primary/10 rounded text-xs font-mono text-primary">HR Policy Bot</div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-4 bg-background/50 min-h-[300px]">
        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end"
        >
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[70%]">
            <p className="text-sm">What's our policy on remote work for the engineering team?</p>
          </div>
        </motion.div>

        {/* Bot Response */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3"
        >
          <div className="p-2 bg-muted rounded-full h-fit">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-2 max-w-[80%]">
            <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
              <p className="text-sm mb-3">Based on the <span className="text-primary font-medium">Engineering Remote Work Policy (v2.3)</span>, here's what applies:</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Engineers can work remotely up to 3 days/week</li>
                <li>• Core hours: 10am-3pm in your timezone</li>
                <li>• Monthly in-office collaboration day required</li>
              </ul>
            </div>
            
            {/* Sources */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-2"
            >
              <div className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground border border-border">
                <FileText className="h-3 w-3" />
                HR-Policy-2024.pdf
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground border border-border">
                <Database className="h-3 w-3" />
                Employee Handbook
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Follow-up Suggestion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex gap-3"
        >
          <div className="p-2 bg-muted rounded-full h-fit">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          </div>
          <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Would you like me to show related policies or help submit a remote work request?</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-background border border-border rounded-lg px-4 py-2 flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Ask anything about company policies...</span>
          </div>
          <button className="p-2 bg-primary text-primary-foreground rounded-lg">
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function KnowledgeBots() {
  return (
    <FeaturePageLayout
      title="Enterprise Knowledge Bots"
      icon={Bot}
      headline="AI That Knows Your Business"
      subheadline="Deploy intelligent chatbots trained on your enterprise knowledge. Role-aware assistants that trigger workflows and integrate with your existing systems."
      demoPreview={{
        title: "Knowledge Bot in Action",
        description: "Watch how the AI instantly retrieves accurate answers from your enterprise documents with source citations.",
        mockup: <KnowledgeBotDemo />
      }}
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
