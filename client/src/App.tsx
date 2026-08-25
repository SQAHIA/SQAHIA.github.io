/** SQAHIA Digital global shell — warm editorial paper and precise cobalt accents. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CorporatePage from "./pages/CorporatePage";
import Home from "./pages/Home";
import RoadToCorporation from "./pages/RoadToCorporation";
import TBLForum from "./pages/TBLForum";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/forum/tbl" component={TBLForum} />
      <Route path="/forum" component={RoadToCorporation} />
      <Route path="/road-to-incorporation" component={RoadToCorporation} />
      <Route path="/about" component={CorporatePage} />
      <Route path="/business" component={CorporatePage} />
      <Route path="/products" component={CorporatePage} />
      <Route path="/technology" component={CorporatePage} />
      <Route path="/research" component={CorporatePage} />
      <Route path="/qa-security" component={CorporatePage} />
      <Route path="/downloads" component={CorporatePage} />
      <Route path="/technology-map" component={CorporatePage} />
      <Route path="/projects" component={CorporatePage} />
      <Route path="/news" component={CorporatePage} />
      <Route path="/careers" component={CorporatePage} />
      <Route path="/contact" component={CorporatePage} />
      <Route path="/:section/:page" component={CorporatePage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider><Toaster /><Router /></TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
