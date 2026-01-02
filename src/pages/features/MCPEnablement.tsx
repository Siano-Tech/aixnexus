import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Server, Lock, Database, FileCode, CheckCircle, AlertTriangle, ArrowRight, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const MCPDemo = () => (
  <div className="w-full max-w-4xl mx-auto">
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Server className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-mono text-sm font-medium">MCP Gateway</div>
            <div className="text-xs text-muted-foreground">Real-time Tool Access Control</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded text-xs text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            All Systems Operational
          </div>
        </div>
      </div>

      <div className="p-4 bg-background/50">
        {/* Tool Request Flow */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* AI Request */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-muted/50 border border-border rounded-lg p-3"
          >
            <div className="text-xs text-muted-foreground mb-2">AI Agent Request</div>
            <div className="font-mono text-xs bg-background rounded p-2 border border-border">
              <span className="text-blue-400">GET</span> /api/customers
              <div className="text-muted-foreground mt-1">agent: sales-bot</div>
            </div>
          </motion.div>

          {/* MCP Validation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-primary/10 border border-primary/30 rounded-lg p-3"
          >
            <div className="text-xs text-primary mb-2 flex items-center gap-1">
              <Shield className="h-3 w-3" />
              MCP Validation
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span className="text-muted-foreground">Permission: READ</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span className="text-muted-foreground">Rate Limit: OK</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span className="text-muted-foreground">Schema: Valid</span>
              </div>
            </div>
          </motion.div>

          {/* Tool Response */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-muted/50 border border-border rounded-lg p-3"
          >
            <div className="text-xs text-muted-foreground mb-2">Secure Response</div>
            <div className="font-mono text-xs bg-background rounded p-2 border border-border">
              <span className="text-green-400">200 OK</span>
              <div className="text-muted-foreground mt-1">records: 24</div>
              <div className="text-muted-foreground">filtered: PII</div>
            </div>
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="flex justify-around mb-4 -mt-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ArrowRight className="h-4 w-4 text-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ArrowRight className="h-4 w-4 text-primary" />
          </motion.div>
        </div>

        {/* Connected Tools Grid */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { name: "CRM API", icon: Database, status: "active", requests: "1.2k/hr" },
            { name: "Database", icon: Server, status: "active", requests: "3.4k/hr" },
            { name: "Documents", icon: FileCode, status: "active", requests: "890/hr" },
            { name: "Payments", icon: Lock, status: "restricted", requests: "12/hr" },
          ].map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="bg-muted/30 border border-border rounded-lg p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <tool.icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-mono">{tool.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  tool.status === 'active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {tool.status}
                </span>
                <span className="text-[10px] text-muted-foreground">{tool.requests}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Audit Log Footer */}
      <div className="px-4 py-3 border-t border-border bg-muted/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              Last audit: 2 seconds ago
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span className="text-primary font-medium">12,847</span> requests validated today
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <AlertTriangle className="h-3 w-3 text-yellow-500" />
            <span className="text-muted-foreground">3 blocked</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function MCPEnablement() {
  return (
    <FeaturePageLayout
      title="MCP Enablement"
      icon={Server}
      headline="Safely Expose Enterprise Tools to AI"
      subheadline="Model Context Protocol enablement that gives AI models controlled access to your enterprise tools and data with complete auditability."
      demoPreview={{
        title: "MCP Gateway in Action",
        description: "Watch how AI requests are validated, authorized, and logged in real-time through the MCP security layer.",
        mockup: <MCPDemo />
      }}
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
