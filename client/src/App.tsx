import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Booking from "@/pages/Booking";
import BookingDemo from "./pages/BookingDemo";
import DemoPage from "./pages/DemoPage";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/booking/:serviceId" component={Booking} />
      <Route path="/booking-demo" component={BookingDemo} />
      <Route path="/demo" component={DemoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  // Apply scroll animations to the entire application
  useScrollAnimation();
  
  return (
    <div className="relative w-full overflow-x-hidden">
      <Router />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
