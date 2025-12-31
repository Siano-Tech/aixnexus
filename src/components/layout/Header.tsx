import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Bot, Server, MessageSquare, Zap, AppWindow, UserCheck, Phone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

const features = [
  { name: "Enterprise Knowledge Bots", href: "/features/knowledge-bots", icon: Bot },
  { name: "MCP Enablement", href: "/features/mcp-enablement", icon: Server },
  { name: "Interactive Business Bots", href: "/features/business-bots", icon: MessageSquare },
  { name: "AI Workflow Automation", href: "/features/ai-automation", icon: Zap },
  { name: "ChatGPT App Builder", href: "/features/app-builder", icon: AppWindow },
  { name: "Supervised AI Agents", href: "/features/supervised-agents", icon: UserCheck },
  { name: "Voice AI Agents", href: "/features/voice-agents", icon: Phone },
  { name: "AI Observability & Governance", href: "/features/observability", icon: BarChart3, comingSoon: true },
];

const navigation = [
  { name: "Platform", href: "/#platform" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Security", href: "/#security" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container flex h-12 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-5 w-5 bg-primary" />
            <span className="font-mono text-sm font-medium tracking-tight">AIONEXUS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.slice(0, 1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Features Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
                <ChevronDown className={`h-3 w-3 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
              </button>
              
              {featuresOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg z-50 animate-fade-in">
                  <div className="p-2">
                    {features.map((feature) => (
                      <Link
                        key={feature.name}
                        to={feature.href}
                        onClick={() => setFeaturesOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors group"
                      >
                        <div className="p-1.5 border border-primary/30 bg-primary/10 rounded">
                          <feature.icon className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          {feature.name}
                          {feature.comingSoon && (
                            <span className="ml-2 text-[0.6rem] text-primary">(Soon)</span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="hero" size="sm" onClick={() => setContactOpen(true)}>
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container py-4 space-y-3">
              <a
                href="/#platform"
                className="block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platform
              </a>
              
              {/* Mobile Features Accordion */}
              <div>
                <button
                  onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                  className="flex items-center justify-between w-full font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Features
                  <ChevronDown className={`h-3 w-3 transition-transform ${mobileFeaturesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileFeaturesOpen && (
                  <div className="mt-2 ml-3 space-y-2 border-l border-border pl-3">
                    {features.map((feature) => (
                      <Link
                        key={feature.name}
                        to={feature.href}
                        onClick={() => { setMobileMenuOpen(false); setMobileFeaturesOpen(false); }}
                        className="flex items-center gap-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <feature.icon className="h-3 w-3 text-primary" />
                        <span>{feature.name}</span>
                        {feature.comingSoon && (
                          <span className="text-[0.55rem] text-primary">(Soon)</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#how-it-works"
                className="block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/#security"
                className="block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </a>
              
              <div className="pt-3 flex flex-col gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  Docs
                </Button>
                <Button variant="hero" size="sm" onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}>
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
