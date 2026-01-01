import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import { AppWindow, Layers, Move, Type, Image, ToggleLeft, Grid3X3, Sparkles, Eye, Code } from "lucide-react";
import { motion } from "framer-motion";

const AppBuilderDemoMockup = () => (
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
            <AppWindow className="h-3 w-3 mr-2 text-primary" />
            app-builder.aionexus.ai
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex gap-4 h-[340px]">
          {/* Component Palette */}
          <motion.div 
            className="w-48 border border-border rounded bg-muted/20 p-3 space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Components</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Type, label: "Text" },
                { icon: Image, label: "Image" },
                { icon: ToggleLeft, label: "Input" },
                { icon: Grid3X3, label: "Table" },
                { icon: Sparkles, label: "AI Chat" },
                { icon: Layers, label: "Cards" },
              ].map((comp, i) => (
                <motion.div 
                  key={comp.label}
                  className="flex flex-col items-center gap-1 p-2 border border-border/50 rounded bg-card hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-move"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <comp.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-[9px] text-muted-foreground">{comp.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider pt-2">AI Blocks</div>
            <div className="space-y-2">
              {[
                { label: "Knowledge Q&A", color: "border-primary/50 bg-primary/10" },
                { label: "Form Assistant", color: "border-green-500/50 bg-green-500/10" },
              ].map((block, i) => (
                <motion.div 
                  key={block.label}
                  className={`flex items-center gap-2 p-2 border rounded cursor-move ${block.color}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span className="text-[10px] font-mono">{block.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Canvas Area */}
          <motion.div 
            className="flex-1 border border-dashed border-border rounded bg-muted/10 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Canvas Grid */}
            <div className="absolute inset-0 opacity-30" style={{ 
              backgroundImage: "radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }} />
            
            {/* App Preview */}
            <div className="relative p-4 space-y-3">
              {/* Header Component */}
              <motion.div 
                className="border-2 border-primary/50 bg-card rounded p-3 relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-move">
                  <Move className="h-2 w-2 text-primary-foreground absolute inset-0 m-auto" />
                </div>
                <h3 className="font-mono text-sm font-medium">HR Policy Assistant</h3>
                <p className="text-[10px] text-muted-foreground">Ask questions about company policies</p>
              </motion.div>
              
              {/* AI Chat Component */}
              <motion.div 
                className="border-2 border-primary bg-card rounded overflow-hidden relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-move">
                  <Move className="h-2 w-2 text-primary-foreground absolute inset-0 m-auto" />
                </div>
                <div className="px-2 py-1 bg-primary/20 text-[9px] font-mono text-primary flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5" />
                  AI Knowledge Bot
                </div>
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                    <span className="text-[10px] text-muted-foreground">What's the vacation policy?</span>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <p className="text-[10px]">Employees receive 15 days PTO annually, accrued monthly...</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 border border-dashed border-border rounded p-3 text-center">
                  <span className="text-[10px] text-muted-foreground">+ Add Component</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Properties Panel */}
          <motion.div 
            className="w-48 border border-border rounded bg-muted/20 p-3 space-y-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Properties</div>
            
            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-muted-foreground block mb-1">Knowledge Source</label>
                <select className="w-full bg-card border border-border rounded px-2 py-1.5 text-[10px] font-mono">
                  <option>HR Policies</option>
                  <option>Employee Handbook</option>
                </select>
              </div>
              
              <div>
                <label className="text-[10px] text-muted-foreground block mb-1">Response Style</label>
                <select className="w-full bg-card border border-border rounded px-2 py-1.5 text-[10px] font-mono">
                  <option>Concise</option>
                  <option>Detailed</option>
                </select>
              </div>
              
              <div>
                <label className="text-[10px] text-muted-foreground block mb-1">Access Control</label>
                <div className="flex items-center gap-2 p-2 bg-card border border-border rounded">
                  <div className="w-3 h-3 rounded bg-green-500" />
                  <span className="text-[10px]">All Employees</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2 border-t border-border space-y-2">
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary/20 border border-primary/30 rounded text-[10px] font-mono text-primary hover:bg-primary/30 transition-colors">
                <Eye className="h-3 w-3" />
                Preview
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-muted/50 border border-border rounded text-[10px] font-mono text-muted-foreground hover:bg-muted transition-colors">
                <Code className="h-3 w-3" />
                View Code
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

export default function AppBuilder() {
  return (
    <FeaturePageLayout
      title="ChatGPT App Builder"
      icon={AppWindow}
      headline="Build AI Apps in Hours, Not Months"
      subheadline="Rapidly build secure, role-based AI applications for internal teams and customers without traditional development cycles."
      demoPreview={{
        title: "Visual App Builder",
        description: "Drag-and-drop AI components to build custom applications with knowledge integration, role-based access, and enterprise security built in.",
        mockup: <AppBuilderDemoMockup />
      }}
      whatItDoes={{
        problem: "Building AI applications requires specialized skills, takes months, and often results in insecure or ungovernable solutions.",
        whyNeeded: "Enterprises need to rapidly deploy AI apps that are secure by default, respect existing permissions, and integrate with enterprise systems.",
        howItFits: "App Builder uses MCP for data access, governance for security, and the full platform for features like voice, agents, and automation.",
      }}
      capabilities={[
        { title: "Visual App Builder", description: "Drag-and-drop interface for creating AI-powered applications without code." },
        { title: "Role-Based Access", description: "Apps automatically respect enterprise SSO and role permissions." },
        { title: "Pre-Built Components", description: "Library of enterprise-ready components for common AI use cases." },
        { title: "Custom Branding", description: "White-label apps with your brand, deployed on your domain." },
        { title: "API Integration", description: "Connect to any API or data source with built-in connectors." },
        { title: "Version Control", description: "Track changes, rollback, and manage multiple environments." },
      ]}
      useCases={[
        { title: "Internal AI Assistants", description: "Build specialized assistants for finance, legal, HR, and other departments." },
        { title: "Customer Self-Service", description: "Create AI-powered portals that help customers solve their own problems." },
        { title: "Partner Portals", description: "Deploy AI apps for partners with appropriate data access and permissions." },
        { title: "Proof of Concepts", description: "Rapidly prototype AI solutions to validate business cases before major investment." },
      ]}
      integration={["MCP Servers", "Knowledge Bots", "Supervised Agents", "Governance"]}
    />
  );
}
