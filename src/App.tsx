import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIDraftCenter from "./pages/AIDraftCenter";
import ContentCalendar from "./pages/ContentCalendar";
import ComplianceReview from "./pages/ComplianceReview";
import Analytics from "./pages/Analytics";
import AISettings from "./pages/AISettings";
import TeamPermissions from "./pages/TeamPermissions";
import AuditLogs from "./pages/AuditLogs";
import HelpSupport from "./pages/HelpSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/drafts" element={<AIDraftCenter />} />
          <Route path="/calendar" element={<ContentCalendar />} />
          <Route path="/compliance" element={<ComplianceReview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<AISettings />} />
          <Route path="/team" element={<TeamPermissions />} />
          <Route path="/logs" element={<AuditLogs />} />
          <Route path="/help" element={<HelpSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
