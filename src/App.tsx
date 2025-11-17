import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import AssetDetails from "./pages/AssetDetails";
import CreateAsset from "./pages/CreateAsset";
import Portfolios from "./pages/Portfolios";
import Benchmarks from "./pages/Benchmarks";
import Personas from "./pages/Personas";
import Licensing from "./pages/Licensing";
import Workspaces from "./pages/Workspaces";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/assets/:id" element={<AssetDetails />} />
          <Route path="/create" element={<CreateAsset />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/benchmarks" element={<Benchmarks />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
