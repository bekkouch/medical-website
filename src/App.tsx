import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import LeDocteur from "./pages/LeDocteur";
import ExpertiseMedicale from "./pages/ExpertiseMedicale";
import Missions from "./pages/Missions";
import InfosPratiques from "./pages/InfosPratiques";

import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/le-docteur" element={<LeDocteur />} />
            <Route path="/expertise-medicale" element={<ExpertiseMedicale />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/infos-pratiques" element={<InfosPratiques />} />
            
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
