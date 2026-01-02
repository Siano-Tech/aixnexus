import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { UserCheck, CheckCircle, Clock, AlertCircle, User, Bot, Play, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const SupervisedAgentDemo = () => (
  <div className="w-full max-w-4xl mx-auto">
    <motion.div 
      className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Header */}
      <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <UserCheck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-mono text-sm font-medium">Procurement Agent</div>
            <div className="text-xs text-muted-foreground">Task: Vendor Research & Quote Comparison</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Confidence:</span>
          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "87%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-full bg-green-500"
            />
          </div>
          <span className="text-xs font-mono text-green-400">87%</span>
        </div>
      </div>

      <div className="p-4 bg-background/50">
        {/* Task Progress Timeline */}
        <div className="space-y-3 mb-4">
          {[
            { step: "Research vendors", status: "complete", icon: CheckCircle, time: "2m ago" },
            { step: "Gather quotes from 5 vendors", status: "complete", icon: CheckCircle, time: "1m ago" },
            { step: "Compare pricing & terms", status: "complete", icon: CheckCircle, time: "30s ago" },
            { step: "Prepare recommendation", status: "current", icon: Play, time: "In progress" },
            { step: "Submit for approval", status: "pending", icon: Clock, time: "Waiting" },
          ].map((task, i) => (
            <motion.div
              key={task.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ x: 5, backgroundColor: "hsl(var(--muted) / 0.5)" }}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                task.status === 'current' ? 'bg-primary/10 border border-primary/30' : ''
              }`}
            >
              <task.icon className={`h-4 w-4 ${
                task.status === 'complete' ? 'text-green-500' :
                task.status === 'current' ? 'text-primary animate-pulse' :
                'text-muted-foreground'
              }`} />
              <span className={`flex-1 text-sm ${
                task.status === 'pending' ? 'text-muted-foreground' : ''
              }`}>{task.step}</span>
              <span className="text-xs text-muted-foreground">{task.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Approval Gate Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm mb-1">Approval Required</div>
              <p className="text-xs text-muted-foreground mb-3">
                Agent recommends <span className="text-foreground font-medium">TechCorp Solutions</span> at $24,500/year. 
                This exceeds the auto-approve threshold of $10,000.
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { vendor: "TechCorp", price: "$24,500", score: "94%" },
                  { vendor: "DataFlow", price: "$28,200", score: "87%" },
                  { vendor: "CloudNine", price: "$31,000", score: "82%" },
                ].map((v, i) => (
                  <motion.div 
                    key={v.vendor}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-2 rounded-lg text-xs cursor-pointer ${
                      i === 0 ? 'bg-primary/20 border border-primary/30' : 'bg-muted/50 border border-border'
                    }`}
                  >
                    <div className="font-medium">{v.vendor}</div>
                    <div className="text-muted-foreground">{v.price}</div>
                    <div className={i === 0 ? 'text-primary' : 'text-muted-foreground'}>Score: {v.score}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm cursor-pointer"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Approve
                </motion.button>
                <motion.button 
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Changes
                </motion.button>
                <motion.button 
                  className="px-4 py-2 text-muted-foreground text-sm cursor-pointer"
                  whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Report
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div 
            className="flex items-center gap-2 text-xs cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <Bot className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">Agent handled <span className="text-primary font-medium">4 of 5</span> steps autonomously</span>
          </motion.div>
        </div>
        <motion.div 
          className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer"
          whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
        >
          <User className="h-3 w-3" />
          Pending: @sarah.chen
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default function SupervisedAgents() {
  return (
    <FeaturePageLayout
      title="Supervised AI Agents"
      icon={UserCheck}
      headline="Autonomous AI With Human Oversight"
      subheadline="Deploy AI agents that can plan and execute complex tasks while keeping humans in control of critical decisions and approvals."
      demoPreview={{
        title: "Agent Workflow with Human Oversight",
        description: "See how AI agents autonomously complete tasks while requesting human approval for high-stakes decisions.",
        mockup: <SupervisedAgentDemo />
      }}
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
