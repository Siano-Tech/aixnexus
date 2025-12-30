import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
  comingSoon?: boolean;
}

export function FeatureCard({ title, description, icon: Icon, href, index = 0, comingSoon = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={comingSoon ? "#" : href}
        className={`group block h-full border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:bg-secondary/50 ${comingSoon ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 border border-border bg-background">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          {comingSoon ? (
            <span className="text-[0.6rem] font-mono uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
              Soon
            </span>
          ) : (
            <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          )}
        </div>
        <h3 className="font-mono text-sm font-medium mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </Link>
    </motion.div>
  );
}
