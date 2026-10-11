/** SQAHIA Digital global shell — warm editorial paper and precise cobalt accents. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Route, Switch, useLocation } from "wouter";
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
      <Route path="/privacy" component={CorporatePage} />
      <Route path="/terms" component={CorporatePage} />
      <Route path="/support" component={CorporatePage} />
      <Route path="/releases" component={CorporatePage} />
      <Route path="/developers" component={CorporatePage} />
      <Route path="/press" component={CorporatePage} />
      <Route path="/accessibility" component={CorporatePage} />
      <Route path="/sitemap" component={CorporatePage} />
      <Route path="/news/archive" component={CorporatePage} />
      <Route path="/products/heraixos/kub" component={CorporatePage} />
      <Route path="/forum/tbl/guidelines" component={CorporatePage} />
      <Route path="/forum/tbl/characters" component={CorporatePage} />
      <Route path="/projects" component={CorporatePage} />
      <Route path="/garage" component={CorporatePage} />
      <Route path="/news" component={CorporatePage} />
      <Route path="/careers" component={CorporatePage} />
      <Route path="/contact" component={CorporatePage} />
      <Route path="/:section/:page" component={CorporatePage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AnimatedRouter() {
  const [location] = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        className="page-transition-shell"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
      >
        <Router />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider><Toaster /><AnimatedRouter /></TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
