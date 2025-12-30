import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";

interface ValuePillarProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export function ValuePillar({ title, description, icon: Icon, index = 0 }: ValuePillarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-3"
    >
      <div className="p-1.5 border border-primary/30 bg-primary/10 shrink-0 mt-0.5">
        <Check className="h-3 w-3 text-primary" />
      </div>
      <div>
        <h4 className="font-mono text-sm font-medium mb-0.5">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
