import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { MessageSquare, User, CheckCircle, ArrowRight, Phone, Mail, Building } from "lucide-react";
import { motion } from "framer-motion";

const BusinessBotDemo = () => (
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
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-mono text-sm font-medium">Lead Qualification Bot</div>
            <div className="text-xs text-muted-foreground">Onboarding Flow • Step 3 of 4</div>
          </div>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step} 
              className={`w-8 h-1 rounded-full ${step <= 3 ? 'bg-primary' : 'bg-muted'}`} 
            />
          ))}
        </div>
      </div>

      {/* Conversation with Dynamic Form */}
      <div className="p-4 space-y-4 bg-background/50 min-h-[320px]">
        {/* Bot Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
        >
          <div className="p-2 bg-primary/20 rounded-full h-fit">
            <MessageSquare className="h-4 w-4 text-primary" />
          </div>
          <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
            <p className="text-sm">Great! Let me gather a few details about your company to personalize your experience.</p>
          </div>
        </motion.div>

        {/* Dynamic Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="ml-11 bg-card border border-border rounded-xl p-4 space-y-4 max-w-[85%]"
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            <Building className="h-4 w-4 text-primary" />
            Company Information
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Company Size</label>
              <div className="grid grid-cols-3 gap-2">
                {['1-50', '51-200', '200+'].map((size, i) => (
                  <motion.button
                    key={size}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                      i === 1 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-muted/50 border-border hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Primary Interest</label>
              <div className="flex flex-wrap gap-2">
                {['Customer Support', 'Sales', 'HR', 'Operations'].map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.08, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 rounded-full text-xs border cursor-pointer transition-all ${
                      i === 0
                        ? 'bg-primary/20 text-primary border-primary/30'
                        : 'bg-muted/50 border-border hover:border-primary/30'
                    }`}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
          >
            Continue
            <motion.span whileHover={{ x: 3 }} transition={{ type: "spring" }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Human Handoff Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="ml-11 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <User className="h-3 w-3" />
          <span>Enterprise leads are automatically routed to sales representatives</span>
          <CheckCircle className="h-3 w-3 text-green-500" />
        </motion.div>
      </div>

      {/* Channel Indicators */}
      <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">Also available on:</span>
          <div className="flex gap-2">
            {[Phone, Mail, MessageSquare].map((Icon, i) => (
              <motion.div 
                key={i} 
                className="p-1.5 bg-muted rounded border border-border cursor-pointer"
                whileHover={{ scale: 1.15, borderColor: "hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-3 w-3 text-muted-foreground" />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="text-xs text-muted-foreground cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary font-medium">247</span> leads qualified today
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default function BusinessBots() {
  return (
    <FeaturePageLayout
      title="Interactive Business Bots"
      icon={MessageSquare}
      headline="Conversations That Drive Action"
      subheadline="Multi-channel conversational bots with context-aware interactions, forms, decision flows, and seamless handoffs to human agents."
      demoPreview={{
        title: "Dynamic Conversational Flows",
        description: "See how business bots collect information through natural conversation with embedded forms and smart routing.",
        mockup: <BusinessBotDemo />
      }}
      whatItDoes={{
        problem: "Traditional chatbots are rigid and frustrating. They can't handle complex conversations, lose context, or guide users through multi-step processes.",
        whyNeeded: "Modern enterprises need conversational AI that understands context, guides users through complex flows, and seamlessly escalates when needed.",
        howItFits: "Business Bots leverage MCP for data access, use governance for compliance, and can trigger supervised agents for complex decisions.",
      }}
      capabilities={[
        { title: "Multi-Channel Deployment", description: "Deploy on web, mobile, Slack, Teams, and custom channels from a single build." },
        { title: "Context Persistence", description: "Maintain conversation context across sessions and channels." },
        { title: "Dynamic Forms", description: "Collect structured data through conversational forms that adapt to user responses." },
        { title: "Decision Trees", description: "Guide users through complex decision processes with branching logic." },
        { title: "Human Handoff", description: "Seamlessly transfer to human agents with full conversation context." },
        { title: "Rich Media Support", description: "Handle images, documents, and structured data in conversations." },
      ]}
      useCases={[
        { title: "Customer Onboarding", description: "Guide new customers through account setup, verification, and initial configuration conversationally." },
        { title: "Lead Qualification", description: "Qualify leads through natural conversation and route high-value prospects to sales." },
        { title: "Order Management", description: "Help customers place orders, check status, and handle modifications through chat." },
        { title: "Feedback Collection", description: "Gather structured feedback through conversational surveys that feel natural." },
      ]}
      integration={["MCP Servers", "Knowledge Bots", "Voice AI", "Governance"]}
    />
  );
}
