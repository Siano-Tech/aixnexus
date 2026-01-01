import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { BarChart3, TrendingUp, AlertTriangle, DollarSign, Shield, Activity, Users, Zap, Eye, Bell } from "lucide-react";
import { motion } from "framer-motion";

const ObservabilityDemoMockup = () => (
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
            <BarChart3 className="h-3 w-3 mr-2 text-primary" />
            observability.aionexus.ai
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        {/* Top Stats Row */}
        <motion.div 
          className="grid grid-cols-4 gap-3 mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Activity, label: "Total Requests", value: "2.4M", change: "+12%", color: "text-primary" },
            { icon: Users, label: "Active Users", value: "1,847", change: "+8%", color: "text-green-500" },
            { icon: DollarSign, label: "AI Spend", value: "$12,450", change: "+23%", color: "text-yellow-500" },
            { icon: Shield, label: "Policy Blocks", value: "127", change: "-15%", color: "text-red-500" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              className="p-3 border border-border rounded bg-muted/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <span className={`text-[10px] font-mono ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
              </div>
              <div className="font-mono text-lg font-medium">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex gap-6">
          {/* Main Chart Area */}
          <div className="flex-1 space-y-4">
            {/* Usage Chart */}
            <motion.div 
              className="border border-border rounded p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs font-medium">AI Usage by Module</span>
                </div>
                <div className="flex gap-2">
                  {["1D", "1W", "1M", "3M"].map((period) => (
                    <button 
                      key={period}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono ${period === "1W" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted"}`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Simulated Chart */}
              <div className="h-32 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 70, 90, 75, 85, 60, 95, 70, 80, 65, 85, 90, 75, 80, 70, 85].map((height, i) => (
                  <motion.div 
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary/30 to-primary/80 rounded-t"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ delay: 0.4 + i * 0.02, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[9px] text-muted-foreground font-mono">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </motion.div>
            
            {/* Cost Breakdown */}
            <motion.div 
              className="border border-border rounded p-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs font-medium">Cost Attribution</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { dept: "Customer Support", cost: "$4,280", pct: 34 },
                  { dept: "Sales", cost: "$3,150", pct: 25 },
                  { dept: "Engineering", cost: "$2,890", pct: 23 },
                  { dept: "Marketing", cost: "$2,130", pct: 18 },
                ].map((item, i) => (
                  <motion.div 
                    key={item.dept}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[10px] w-28 text-muted-foreground">{item.dept}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="font-mono text-[10px] w-16 text-right">{item.cost}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Alerts & Policies Sidebar */}
          <motion.div 
            className="hidden md:block w-56 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Active Alerts */}
            <div className="border border-border rounded p-3">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs flex items-center gap-1">
                  <Bell className="h-3 w-3 text-primary" />
                  Active Alerts
                </span>
                <span className="px-1.5 py-0.5 bg-red-500/20 rounded text-[9px] text-red-500">3</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { type: "Cost spike", level: "warn", msg: "Marketing +45%" },
                  { type: "Rate limit", level: "error", msg: "Support Bot 95%" },
                  { type: "Policy", level: "info", msg: "PII detected" },
                ].map((alert, i) => (
                  <motion.div 
                    key={alert.type}
                    className={`p-2 rounded text-[10px] ${
                      alert.level === "error" 
                        ? "bg-red-500/10 border border-red-500/30" 
                        : alert.level === "warn"
                          ? "bg-yellow-500/10 border border-yellow-500/30"
                          : "bg-muted/30 border border-border"
                    }`}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{alert.type}</span>
                      <AlertTriangle className={`h-3 w-3 ${
                        alert.level === "error" ? "text-red-500" : alert.level === "warn" ? "text-yellow-500" : "text-muted-foreground"
                      }`} />
                    </div>
                    <span className="text-muted-foreground">{alert.msg}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Policy Status */}
            <div className="border border-border rounded p-3">
              <div className="flex items-center gap-1 mb-3">
                <Shield className="h-3 w-3 text-primary" />
                <span className="font-mono text-xs">Governance Policies</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { policy: "PII Masking", status: "active" },
                  { policy: "Cost Limits", status: "active" },
                  { policy: "Data Retention", status: "active" },
                  { policy: "Audit Logging", status: "active" },
                ].map((p, i) => (
                  <motion.div 
                    key={p.policy}
                    className="flex items-center justify-between p-1.5 bg-muted/20 rounded"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[10px]">{p.policy}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[9px] text-green-500">Active</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary/20 border border-primary/30 rounded text-[10px] font-mono text-primary hover:bg-primary/30 transition-colors">
              <Eye className="h-3 w-3" />
              View Full Report
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

export default function Observability() {
  return (
    <FeaturePageLayout
      title="AI Observability & Governance"
      icon={BarChart3}
      headline="See Everything. Control Everything."
      subheadline="Complete visibility into AI usage, costs, and risks across your enterprise with governance controls that ensure compliance."
      demoPreview={{
        title: "Enterprise AI Command Center",
        description: "Monitor all AI usage, costs, and compliance in real-time with proactive alerts and policy enforcement across your organization.",
        mockup: <ObservabilityDemoMockup />
      }}
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
