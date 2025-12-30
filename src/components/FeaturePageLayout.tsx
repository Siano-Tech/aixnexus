import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, LucideIcon } from "lucide-react";

interface FeaturePageLayoutProps {
  title: string;
  headline: string;
  subheadline: string;
  icon: LucideIcon;
  whatItDoes: {
    problem: string;
    whyNeeded: string;
    howItFits: string;
  };
  capabilities: Array<{ title: string; description: string }>;
  useCases: Array<{ title: string; description: string }>;
  integration: string[];
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
}: FeaturePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden dither-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10">
          <Link
            to="/#features"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            <span className="font-mono uppercase tracking-wider">Back to Features</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 border border-primary/30 bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {title}
              </span>
            </div>
            <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg">
                Request Demo
                <ArrowRight className="h-3 w-3" />
              </Button>
              <Button variant="hero-outline" size="lg">
                See It in Action
              </Button>
            </div>
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
              <Button variant="hero">
                Talk to an Expert
                <ArrowRight className="h-3 w-3" />
              </Button>
              <Button variant="hero-outline">
                See It in Action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
