
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Language paths
import EnglishHome from "./pages/languages/en/Index";
import SpanishHome from "./pages/languages/es/Index";
import FrenchHome from "./pages/languages/fr/Index";
import GermanHome from "./pages/languages/de/Index";
import ChineseHome from "./pages/languages/zh/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default English routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* English routes (explicit) */}
          <Route path="/en" element={<EnglishHome />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/faq" element={<FAQPage />} />
          <Route path="/en/privacy" element={<PrivacyPolicy />} />
          <Route path="/en/terms" element={<Terms />} />
          <Route path="/en/contact" element={<Contact />} />
          
          {/* Spanish routes */}
          <Route path="/es" element={<SpanishHome />} />
          <Route path="/es/about" element={<About />} />
          <Route path="/es/faq" element={<FAQPage />} />
          <Route path="/es/privacy" element={<PrivacyPolicy />} />
          <Route path="/es/terms" element={<Terms />} />
          <Route path="/es/contact" element={<Contact />} />
          
          {/* French routes */}
          <Route path="/fr" element={<FrenchHome />} />
          <Route path="/fr/about" element={<About />} />
          <Route path="/fr/faq" element={<FAQPage />} />
          <Route path="/fr/privacy" element={<PrivacyPolicy />} />
          <Route path="/fr/terms" element={<Terms />} />
          <Route path="/fr/contact" element={<Contact />} />
          
          {/* German routes */}
          <Route path="/de" element={<GermanHome />} />
          <Route path="/de/about" element={<About />} />
          <Route path="/de/faq" element={<FAQPage />} />
          <Route path="/de/privacy" element={<PrivacyPolicy />} />
          <Route path="/de/terms" element={<Terms />} />
          <Route path="/de/contact" element={<Contact />} />
          
          {/* Chinese routes */}
          <Route path="/zh" element={<ChineseHome />} />
          <Route path="/zh/about" element={<About />} />
          <Route path="/zh/faq" element={<FAQPage />} />
          <Route path="/zh/privacy" element={<PrivacyPolicy />} />
          <Route path="/zh/terms" element={<Terms />} />
          <Route path="/zh/contact" element={<Contact />} />
          
          {/* Not found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
