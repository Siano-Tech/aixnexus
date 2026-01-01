import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { Phone, Mic, Volume2, PhoneCall, PhoneOff, User, Bot, Clock, Activity, Globe } from "lucide-react";
import { motion } from "framer-motion";

const VoiceAgentsDemoMockup = () => (
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
            <Phone className="h-3 w-3 mr-2 text-primary" />
            voice-center.aionexus.ai
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex gap-6">
          {/* Call Stats Sidebar */}
          <div className="hidden md:block w-44 space-y-3">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Live Stats</div>
            {[
              { icon: PhoneCall, label: "Active Calls", value: "23", color: "text-green-500" },
              { icon: Clock, label: "Avg Duration", value: "4:32", color: "text-primary" },
              { icon: Activity, label: "Resolution", value: "94%", color: "text-primary" },
              { icon: Globe, label: "Languages", value: "12", color: "text-muted-foreground" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="flex items-center gap-3 p-2.5 border border-border/50 rounded bg-muted/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <div className="flex-1">
                  <div className="font-mono text-sm font-medium">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Live Call Interface */}
          <div className="flex-1 space-y-4">
            {/* Active Call Header */}
            <motion.div 
              className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="font-mono text-sm font-medium">Call in Progress</div>
                  <div className="text-[10px] text-muted-foreground">+1 (555) 847-2938 • Customer Support</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-lg text-green-500">03:47</span>
                <button className="p-2 bg-red-500/20 border border-red-500/30 rounded hover:bg-red-500/30 transition-colors">
                  <PhoneOff className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </motion.div>
            
            {/* Live Transcription */}
            <motion.div 
              className="border border-border rounded p-4 space-y-3 min-h-[200px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                  <Mic className="h-3 w-3 text-primary" />
                  Live Transcription
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
                  <div className="w-1.5 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                  <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
              
              {/* Transcript Lines */}
              <div className="space-y-3">
                {[
                  { speaker: "customer", text: "Hi, I'm calling about my order that hasn't arrived yet.", time: "0:15" },
                  { speaker: "ai", text: "I'd be happy to help you track your order. Could you please provide your order number or the email address associated with your account?", time: "0:22" },
                  { speaker: "customer", text: "Sure, it's order number 8-8-4-7-2.", time: "0:35" },
                  { speaker: "ai", text: "Thank you. I found your order. It shows your package is currently out for delivery and should arrive by 5 PM today.", time: "0:42", highlight: true },
                ].map((line, i) => (
                  <motion.div 
                    key={i}
                    className={`flex gap-3 ${line.speaker === "customer" ? "" : "flex-row-reverse"}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${line.speaker === "customer" ? "bg-muted" : "bg-primary/20"}`}>
                      {line.speaker === "customer" ? <User className="h-3 w-3 text-muted-foreground" /> : <Bot className="h-3 w-3 text-primary" />}
                    </div>
                    <div className={`flex-1 ${line.speaker === "customer" ? "text-left" : "text-right"}`}>
                      <p className={`text-xs ${line.highlight ? "text-primary" : ""}`}>{line.text}</p>
                      <span className="text-[10px] text-muted-foreground">{line.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Sentiment & Actions */}
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex-1 p-3 border border-border rounded bg-muted/20">
                <div className="text-[10px] text-muted-foreground mb-1">Sentiment</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full" />
                  </div>
                  <span className="font-mono text-xs text-green-500">Positive</span>
                </div>
              </div>
              <div className="flex-1 p-3 border border-border rounded bg-muted/20">
                <div className="text-[10px] text-muted-foreground mb-1">Suggested Action</div>
                <div className="font-mono text-xs text-primary">Offer tracking link via SMS</div>
              </div>
              <button className="px-4 border border-primary/30 bg-primary/10 rounded font-mono text-xs text-primary hover:bg-primary/20 transition-colors flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                Transfer
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function VoiceAgents() {
  return (
    <FeaturePageLayout
      title="Voice AI Agents"
      icon={Phone}
      headline="AI That Speaks Your Language"
      subheadline="Deploy inbound and outbound AI calling with real-time transcription, natural conversation, and seamless human escalation."
      demoPreview={{
        title: "Live Voice AI in Action",
        description: "Experience real-time transcription, sentiment analysis, and intelligent conversation handling in our voice AI interface.",
        mockup: <VoiceAgentsDemoMockup />
      }}
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
