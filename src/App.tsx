import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-16 flex items-center justify-between border-b bg-background px-4 sticky top-0 z-50 backdrop-blur-sm bg-background/95">
                <div className="flex items-center space-x-4">
                  <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground transition-colors" />
                  <div className="flex items-center space-x-3 animate-slide-in">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-elegant">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <div>
                      <h1 className="text-base sm:text-lg font-bold text-foreground">Patidar Hospital</h1>
                      <p className="text-xs text-muted-foreground hidden sm:block">Excellence in Healthcare</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">Emergency: 24/7</p>
                      <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      Login
                    </button>
                    <span className="text-muted-foreground">|</span>
                    <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      Sign Up
                    </button>
                  </div>
                </div>
              </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
