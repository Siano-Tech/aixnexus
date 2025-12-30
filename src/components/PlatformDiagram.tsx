import { motion } from "framer-motion";

const modules = [
  { name: "AI Bots", color: "bg-primary/20 border-primary/40" },
  { name: "MCP Servers", color: "bg-primary/15 border-primary/30" },
  { name: "Agents", color: "bg-primary/20 border-primary/40" },
  { name: "Automations", color: "bg-primary/15 border-primary/30" },
  { name: "Voice", color: "bg-primary/20 border-primary/40" },
  { name: "Governance", color: "bg-primary/15 border-primary/30" },
];

export function PlatformDiagram() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Dither Background */}
      <div className="absolute inset-0 dither-overlay opacity-50" />
      
      {/* Top Layer: Enterprise Systems */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="border border-border bg-card p-4 mb-4">
          <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground mb-3">
            Enterprise Systems
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["CRM", "ERP", "Data Lake", "APIs"].map((system, i) => (
              <div key={system} className="border border-border bg-background p-2 text-center">
                <span className="font-mono text-[0.6rem] text-muted-foreground">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Middle Layer: AIONEXUS Platform */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="border-2 border-primary/50 bg-card p-4 mb-4 glow-accent">
          <div className="font-mono text-xs font-medium text-primary mb-3 text-center">
            AIONEXUS PLATFORM
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {modules.map((module, i) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className={`border ${module.color} p-2 text-center`}
              >
                <span className="font-mono text-[0.6rem]">{module.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Layer: AI Models & Human Teams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-2 gap-4"
      >
        <div className="border border-border bg-card p-4">
          <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground mb-3">
            AI Models
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["GPT-4", "Claude", "Gemini", "Custom"].map((model) => (
              <div key={model} className="border border-border bg-background p-2 text-center">
                <span className="font-mono text-[0.6rem] text-muted-foreground">{model}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-border bg-card p-4">
          <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground mb-3">
            Human Teams
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Approvers", "Ops", "Support", "Admin"].map((team) => (
              <div key={team} className="border border-border bg-background p-2 text-center">
                <span className="font-mono text-[0.6rem] text-muted-foreground">{team}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
