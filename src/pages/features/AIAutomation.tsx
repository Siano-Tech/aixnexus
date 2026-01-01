import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Zap, Play, Pause, CheckCircle, Clock, ArrowRight, FileText, Database, Mail, AlertCircle, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const AIAutomationDemoMockup = () => (
  <div className="relative max-w-4xl mx-auto">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl opacity-50" />
    
    <div className="relative border border-border bg-card overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-background border border-border rounded px-3 py-1 font-mono text-xs text-muted-foreground flex items-center justify-center max-w-md mx-auto">
            <Zap className="h-3 w-3 mr-2 text-primary" />
            automation.aionexus.ai
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex gap-6">
          {/* Workflow Stats */}
          <div className="hidden md:block w-44 space-y-3">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Workflow Status</div>
            {[
              { label: "Running", value: "12", color: "bg-green-500" },
              { label: "Pending", value: "4", color: "bg-yellow-500" },
              { label: "Completed", value: "847", color: "bg-primary" },
              { label: "Failed", value: "2", color: "bg-red-500" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="flex items-center justify-between p-2.5 border border-border/50 rounded bg-muted/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                  <span className="text-[11px] text-muted-foreground">{stat.label}</span>
                </div>
                <span className="font-mono text-sm font-medium">{stat.value}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Workflow Visualization */}
          <div className="flex-1 space-y-4">
            {/* Workflow Header */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 border border-primary/30 rounded">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-medium">Invoice Processing Workflow</h3>
                  <p className="text-[10px] text-muted-foreground">Triggered: New invoice received in inbox</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 border border-green-500/30 bg-green-500/20 rounded">
                  <Play className="h-3 w-3 text-green-500" />
                </button>
                <button className="p-1.5 border border-border bg-muted/30 rounded">
                  <Pause className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
            
            {/* Workflow Steps */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Mail, label: "Receive Invoice", status: "complete", time: "0.3s", detail: "PDF attachment extracted" },
                { icon: FileText, label: "Extract Data (AI)", status: "complete", time: "2.1s", detail: "Vendor, amount, line items parsed" },
                { icon: Database, label: "Match to PO", status: "complete", time: "0.8s", detail: "PO-2024-4821 matched (98% confidence)" },
                { icon: CheckCircle, label: "Validate Amount", status: "running", time: "...", detail: "Checking against PO tolerance" },
                { icon: AlertCircle, label: "Route for Approval", status: "pending", time: "-", detail: "If variance > 5%, escalate to manager" },
                { icon: Zap, label: "Post to ERP", status: "pending", time: "-", detail: "Create AP entry in SAP" },
              ].map((step, i) => (
                <motion.div 
                  key={step.label}
                  className={`flex items-center gap-3 p-3 border rounded transition-all ${
                    step.status === "running" 
                      ? "border-primary bg-primary/5" 
                      : step.status === "complete" 
                        ? "border-green-500/30 bg-green-500/5" 
                        : "border-border/50 bg-muted/10"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-1.5 rounded ${
                    step.status === "running" 
                      ? "bg-primary/20" 
                      : step.status === "complete" 
                        ? "bg-green-500/20" 
                        : "bg-muted"
                  }`}>
                    <step.icon className={`h-3.5 w-3.5 ${
                      step.status === "running" 
                        ? "text-primary animate-pulse" 
                        : step.status === "complete" 
                          ? "text-green-500" 
                          : "text-muted-foreground"
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-medium">{step.label}</span>
                      {step.status === "running" && (
                        <span className="px-1.5 py-0.5 bg-primary/20 rounded text-[9px] text-primary animate-pulse">Processing</span>
                      )}
                    </div>
                    <p className="text-[10px] text-muted-foreground">{step.detail}</p>
                  </div>
                  
                  <div className="text-right">
                    <span className={`font-mono text-[10px] ${step.status === "complete" ? "text-green-500" : "text-muted-foreground"}`}>
                      {step.time}
                    </span>
                  </div>
                  
                  {i < 5 && (
                    <ArrowRight className="h-3 w-3 text-muted-foreground/30 absolute right-4" />
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Footer Actions */}
            <motion.div 
              className="flex items-center justify-between pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Est. completion: 12s
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="h-3 w-3" />
                  Retry on failure: 3x
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-border bg-muted/30 rounded font-mono text-[10px] text-muted-foreground hover:bg-muted transition-colors">
                  View Logs
                </button>
                <button className="px-3 py-1.5 border border-primary/30 bg-primary/10 rounded font-mono text-[10px] text-primary hover:bg-primary/20 transition-colors">
                  Edit Workflow
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function AIAutomation() {
  return (
    <FeaturePageLayout
      title="AI Workflow Automation"
      icon={Zap}
      headline="Intelligent Operations at Scale"
      subheadline="AI-powered workflow automation with intelligent decision-making, human approvals, and enterprise-grade reliability."
      demoPreview={{
        title: "Intelligent Workflow Execution",
        description: "See how AI automates complex multi-step processes with real-time monitoring, exception handling, and smart routing.",
        mockup: <AIAutomationDemoMockup />
      }}
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
