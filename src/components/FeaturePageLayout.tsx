import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { ContactFormSection } from "@/components/ContactFormSection";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, LucideIcon, Sparkles, Zap, Shield, Globe } from "lucide-react";

interface FeaturePageLayoutProps {
  title: string;
  headline: string;
  subheadline: string;
  icon: LucideIcon;
  accentColor?: string;
  whatItDoes: {
    problem: string;
    whyNeeded: string;
    howItFits: string;
  };
  capabilities: Array<{ title: string; description: string }>;
  useCases: Array<{ title: string; description: string }>;
  integration: string[];
  demoPreview?: {
    title: string;
    description: string;
    mockup: React.ReactNode;
  };
}

export function FeaturePageLayout({
  title,
  headline,
  subheadline,
  icon: Icon,
  whatItDoes,
  capabilities,
  useCases,
  integration,
  demoPreview,
}: FeaturePageLayoutProps) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-32 right-[15%] hidden lg:block"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 border border-primary/20 bg-primary/5 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-primary/50" />
          </div>
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-[10%] hidden lg:block"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="w-12 h-12 border border-primary/20 bg-primary/5 backdrop-blur-sm flex items-center justify-center">
            <Zap className="h-4 w-4 text-primary/50" />
          </div>
        </motion.div>
        <motion.div 
          className="absolute top-48 left-[20%] hidden lg:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-10 h-10 border border-primary/20 bg-primary/5 backdrop-blur-sm flex items-center justify-center">
            <Shield className="h-3 w-3 text-primary/50" />
          </div>
        </motion.div>

        <div className="container relative z-10">
          <Link
            to="/#features"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors group"
          >
            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono uppercase tracking-wider">Back to Features</span>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl" />
                  <div className="relative p-4 border border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">
                    AIONEXUS Platform
                  </span>
                  <h2 className="font-mono text-sm text-muted-foreground">{title}</h2>
                </div>
              </motion.div>
              
              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
                  {headline}
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                {subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" onClick={() => setContactOpen(true)} className="group">
                  Request Demo
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="lg" onClick={() => setContactOpen(true)}>
                  See It in Action
                </Button>
              </div>
              
              {/* Stats/Trust indicators */}
              <motion.div 
                className="flex gap-8 mt-10 pt-8 border-t border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div>
                  <div className="font-mono text-2xl font-medium text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime SLA</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-medium text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Enterprise Clients</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-medium text-primary">SOC 2</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-2xl" />
                
                {/* Main visual container */}
                <div className="relative border border-border/50 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm p-6 overflow-hidden">
                  {/* Terminal-style header */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">{title.toLowerCase().replace(/\s+/g, "-")}.aionexus.ai</span>
                  </div>
                  
                  {/* Mock interface */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="h-2 bg-primary/30 rounded-full w-32" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded-full w-full" />
                      <div className="h-2 bg-muted rounded-full w-4/5" />
                      <div className="h-2 bg-muted rounded-full w-3/5" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-4">
                      <div className="h-16 border border-border/50 bg-muted/30 flex items-center justify-center">
                        <Globe className="h-4 w-4 text-muted-foreground/50" />
                      </div>
                      <div className="h-16 border border-primary/30 bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary/70" />
                      </div>
                      <div className="h-16 border border-border/50 bg-muted/30 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-muted-foreground/50" />
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <div className="h-8 bg-primary/20 border border-primary/30 flex-1 flex items-center justify-center">
                        <span className="font-mono text-[10px] text-primary">ACTIVE</span>
                      </div>
                      <div className="h-8 bg-muted/30 border border-border/50 flex-1" />
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-16 border-t border-border bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-primary mb-2 block">
              See it in action
            </span>
            <h2 className="font-mono text-xl md:text-2xl font-medium mb-4">
              {demoPreview?.title || `How ${title} Works`}
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              {demoPreview?.description || `Experience the power of ${title} with our interactive demonstration.`}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {demoPreview?.mockup || (
              <div className="relative max-w-4xl mx-auto">
                {/* Glow effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl opacity-50" />
                
                {/* Demo container */}
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
                        <Shield className="h-3 w-3 mr-2 text-green-500" />
                        https://app.aionexus.ai/{title.toLowerCase().replace(/\s+/g, "-")}
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo content */}
                  <div className="p-6 md:p-8">
                    {/* Sidebar + Main layout */}
                    <div className="flex gap-6">
                      {/* Sidebar */}
                      <div className="hidden md:block w-48 space-y-3">
                        <div className="flex items-center gap-2 p-2 bg-primary/10 border border-primary/30 rounded">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="font-mono text-xs text-primary">{title.split(" ")[0]}</span>
                        </div>
                        <div className="space-y-2">
                          {["Dashboard", "Analytics", "Settings", "Logs"].map((item, i) => (
                            <div key={item} className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded transition-colors cursor-pointer">
                              <div className="w-4 h-4 bg-muted rounded" />
                              <span className="font-mono text-xs text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Main content */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-primary" />
                            <h3 className="font-mono text-sm font-medium">{title} Dashboard</h3>
                          </div>
                          <div className="flex gap-2">
                            <div className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded font-mono text-[10px] text-primary">
                              Live
                            </div>
                          </div>
                        </div>
                        
                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { label: "Active Sessions", value: "2,847" },
                            { label: "Requests/min", value: "1.2K" },
                            { label: "Success Rate", value: "99.8%" },
                          ].map((stat) => (
                            <div key={stat.label} className="p-3 bg-muted/30 border border-border rounded">
                              <div className="font-mono text-lg font-medium text-foreground">{stat.value}</div>
                              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Activity feed mockup */}
                        <div className="border border-border rounded p-4 space-y-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-xs text-muted-foreground">Recent Activity</span>
                            <Sparkles className="h-3 w-3 text-primary" />
                          </div>
                          {[1, 2, 3].map((i) => (
                            <motion.div 
                              key={i}
                              className="flex items-center gap-3 p-2 bg-muted/20 rounded"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                              <div className="flex-1 h-2 bg-muted rounded-full" style={{ width: `${70 - i * 15}%` }} />
                              <span className="font-mono text-[10px] text-muted-foreground">{i}m ago</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xl md:text-2xl font-medium mb-8">
              What It Does
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border bg-card p-5">
                <h3 className="font-mono text-sm font-medium mb-2 text-primary">Problem</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {whatItDoes.problem}
                </p>
              </div>
              <div className="border border-border bg-card p-5">
                <h3 className="font-mono text-sm font-medium mb-2 text-primary">Why Enterprises Need It</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {whatItDoes.whyNeeded}
                </p>
              </div>
              <div className="border border-border bg-card p-5">
                <h3 className="font-mono text-sm font-medium mb-2 text-primary">Platform Integration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {whatItDoes.howItFits}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 border-t border-border bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xl md:text-2xl font-medium mb-8">
              Key Capabilities
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-border bg-background p-4"
                >
                  <h3 className="font-mono text-sm font-medium mb-2">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xl md:text-2xl font-medium mb-8">
              Enterprise Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-border bg-card p-5"
                >
                  <h3 className="font-mono text-sm font-medium mb-2">{useCase.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-16 border-t border-border bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xl md:text-2xl font-medium mb-8">
              How It Fits Into AIONEXUS
            </h2>
            <div className="border border-border bg-background p-6 max-w-2xl">
              <p className="text-sm text-muted-foreground mb-4">
                This capability works seamlessly with other AIONEXUS modules:
              </p>
              <div className="flex flex-wrap gap-2">
                {integration.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[0.65rem] uppercase tracking-wider border border-primary/30 bg-primary/10 text-primary px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border dither-overlay">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="font-mono text-xl md:text-2xl font-medium mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              See how {title} can transform your enterprise AI operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="hero" onClick={() => setContactOpen(true)}>
                Talk to an Expert
                <ArrowRight className="h-3 w-3" />
              </Button>
              <Button variant="hero-outline" onClick={() => setContactOpen(true)}>
                See It in Action
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
