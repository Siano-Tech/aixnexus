import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export function StepCard({ number, title, description, icon: Icon, index = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Connector Line */}
      {index < 3 && (
        <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border z-0" />
      )}
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 border border-border bg-card flex items-center justify-center mb-4">
          <span className="font-mono text-lg text-primary">{number}</span>
        </div>
        <div className="p-2 border border-border bg-background mb-3">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <h3 className="font-mono text-sm font-medium mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">{description}</p>
      </div>
    </motion.div>
  );
}
