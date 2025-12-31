import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { PersonaCard } from "@/components/PersonaCard";
import { ValuePillar } from "@/components/ValuePillar";
import { PlatformDiagram } from "@/components/PlatformDiagram";
import { ContactModal } from "@/components/ContactModal";
import { ContactFormSection } from "@/components/ContactFormSection";
import { motion } from "framer-motion";
import { 
  Bot, 
  Server, 
  MessageSquare, 
  Zap, 
  AppWindow, 
  UserCheck, 
  Phone, 
  BarChart3,
  Database,
  Shield,
  Eye,
  Users,
  Building2,
  Lightbulb,
  Lock,
  Scale,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "Enterprise Knowledge Bots",
    description: "AI chatbots trained on your enterprise knowledge. Role-aware, workflow-triggering assistants.",
    icon: Bot,
    href: "/features/knowledge-bots",
  },
  {
    title: "MCP Enablement",
    description: "Safely expose enterprise tools to AI with permissioned access and complete auditability.",
    icon: Server,
    href: "/features/mcp-enablement",
  },
  {
    title: "Interactive Business Bots",
    description: "Multi-channel conversational bots with context-aware interactions and decision flows.",
    icon: MessageSquare,
    href: "/features/business-bots",
  },
  {
    title: "AI Workflow Automation",
    description: "AI-powered operations automation with decision-making and human approvals.",
    icon: Zap,
    href: "/features/ai-automation",
  },
  {
    title: "ChatGPT App Builder",
    description: "Build internal or customer AI apps. Secure, role-based, production-ready.",
    icon: AppWindow,
    href: "/features/app-builder",
  },
  {
    title: "Supervised AI Agents",
    description: "Autonomous agents with human oversight. Planning, execution, and approval workflows.",
    icon: UserCheck,
    href: "/features/supervised-agents",
  },
  {
    title: "Voice AI Agents",
    description: "Inbound & outbound AI calling with real-time transcription and human escalation.",
    icon: Phone,
    href: "/features/voice-agents",
  },
  {
    title: "AI Observability & Governance",
    description: "AI usage visibility, cost attribution, and risk monitoring across your enterprise.",
    icon: BarChart3,
    href: "/features/observability",
    comingSoon: true,
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Integrate your enterprise data, systems, and APIs",
    icon: Database,
  },
  {
    number: "02",
    title: "Enable",
    description: "Deploy AI via MCP servers, bots, and agents",
    icon: Server,
  },
  {
    number: "03",
    title: "Control",
    description: "Apply human-in-the-loop controls and approvals",
    icon: Shield,
  },
  {
    number: "04",
    title: "Monitor",
    description: "Track usage, costs, and outcomes in real-time",
    icon: Eye,
  },
];

const personas = [
  {
    title: "Enterprise IT & Platform Teams",
    description: "Build and manage AI infrastructure with enterprise-grade security and governance.",
    icon: Building2,
  },
  {
    title: "Operations & Support Teams",
    description: "Automate workflows and deploy AI assistants to enhance productivity.",
    icon: Users,
  },
  {
    title: "AI & Innovation Leaders",
    description: "Accelerate AI adoption with a unified platform for experimentation and production.",
    icon: Lightbulb,
  },
  {
    title: "Regulated Enterprises",
    description: "Deploy AI with compliance, auditability, and human oversight built-in.",
    icon: Lock,
  },
];

const valuePillars = [
  { title: "Human-Controlled AI", description: "Every AI action can require human approval" },
  { title: "Enterprise Security", description: "SOC 2, GDPR, and ISO 27001 compliant" },
  { title: "Modular Adoption", description: "Start with one capability, expand as needed" },
  { title: "Built-in Governance", description: "Audit trails, permissions, and policies" },
  { title: "Scales Across Teams", description: "From pilot to enterprise-wide deployment" },
];

export default function Index() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden dither-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block border border-border bg-card px-3 py-1 mb-6">
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                Enterprise AI Enablement Platform
              </span>
            </div>
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              From Experiments
              <br />
              <span className="text-gradient">to Production</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Deploy bots, agents, automations, MCP tools, and voice AI with governance, observability, and human control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="hero" size="lg" onClick={() => setContactOpen(true)}>
                Request Demo
                <ArrowRight className="h-3 w-3" />
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#platform">Explore Platform</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform" className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-medium mb-4">
              The AI Operating Layer
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A unified AI enablement layer that sits between enterprise systems, AI models, and human teams.
            </p>
          </motion.div>
          <PlatformDiagram />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 border-t border-border bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-medium mb-4">
              Core Capabilities
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Modular AI capabilities that work together or standalone. Start anywhere, expand everywhere.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-medium mb-4">
              How It Works
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Four simple steps from integration to production AI at scale.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <StepCard key={step.title} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 border-t border-border bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-medium mb-4">
              Built For Enterprise
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Designed for the teams leading AI transformation in large organizations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {personas.map((persona, index) => (
              <PersonaCard key={persona.title} {...persona} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why AIONEXUS */}
      <section id="security" className="py-20 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-2xl md:text-3xl font-medium mb-4">
                Why AIONEXUS
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Enterprise AI that's secure, controlled, and ready for production. Not another experiment.
              </p>
              <div className="space-y-4">
                {valuePillars.map((pillar, index) => (
                  <ValuePillar
                    key={pillar.title}
                    {...pillar}
                    icon={Shield}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-border bg-card p-8 dither-overlay"
            >
              <div className="relative z-10 text-center">
                <div className="inline-block p-4 border border-primary/30 bg-primary/10 mb-6">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-mono text-lg font-medium mb-3">
                  Ready for Enterprise Scale
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  From proof of concept to company-wide deployment with the same platform.
                </p>
                <Button variant="hero" onClick={() => setContactOpen(true)}>
                  Talk to Sales
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-card/50 dither-overlay">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-medium mb-4">
              Ready to Enable Enterprise AI?
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Join the enterprises transforming their operations with controlled, observable, and governed AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="hero" size="lg" onClick={() => setContactOpen(true)}>
                Request Demo
                <ArrowRight className="h-3 w-3" />
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => setContactOpen(true)}>
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormSection />

      <Footer />
      
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
