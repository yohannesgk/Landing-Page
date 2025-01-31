import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LearnMore from "./pages/LearnMore";
import Documentation from "./pages/Documentation";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;