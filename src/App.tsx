import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { ChatWidget } from "./components/ChatWidget";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";

// Feature Pages
import KnowledgeBots from "./pages/features/KnowledgeBots";
import MCPEnablement from "./pages/features/MCPEnablement";
import BusinessBots from "./pages/features/BusinessBots";
import AIAutomation from "./pages/features/AIAutomation";
import AppBuilder from "./pages/features/AppBuilder";
import SupervisedAgents from "./pages/features/SupervisedAgents";
import VoiceAgents from "./pages/features/VoiceAgents";
import Observability from "./pages/features/Observability";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
          
          {/* Feature Pages */}
          <Route path="/features/knowledge-bots" element={<KnowledgeBots />} />
          <Route path="/features/mcp-enablement" element={<MCPEnablement />} />
          <Route path="/features/business-bots" element={<BusinessBots />} />
          <Route path="/features/ai-automation" element={<AIAutomation />} />
          <Route path="/features/app-builder" element={<AppBuilder />} />
          <Route path="/features/supervised-agents" element={<SupervisedAgents />} />
          <Route path="/features/voice-agents" element={<VoiceAgents />} />
          <Route path="/features/observability" element={<Observability />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
