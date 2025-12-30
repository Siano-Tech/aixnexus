import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PersonaCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export function PersonaCard({ title, description, icon: Icon, index = 0 }: PersonaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-border bg-card p-5 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 border border-border bg-background shrink-0">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h3 className="font-mono text-sm font-medium mb-1">{title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
