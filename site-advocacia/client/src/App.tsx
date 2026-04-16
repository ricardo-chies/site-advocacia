import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Noticias from "./pages/Noticias";
import NoticiaPost from "./pages/NoticiaPost";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import TrabalhistaBancario from "./pages/areas/trabalhista-bancario";
import Trabalhista from "./pages/areas/trabalhista";
import Previdenciario from "./pages/areas/previdenciario";
import PlanoDeSaude from "./pages/areas/plano-de-saude";
import DireitoImobiliario from "./pages/areas/Direito-Imobiliario";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/noticias/:slug" component={NoticiaPost} />
      <Route path="/areas/trabalhista-bancario" component={TrabalhistaBancario} />
      <Route path="/areas/trabalhista" component={Trabalhista} />
      <Route path="/areas/previdenciario" component={Previdenciario} />
      <Route path="/areas/plano-de-saude" component={PlanoDeSaude} />
      {/* 2. Adicione a rota aqui */}
      <Route path="/areas/direito-imobiliario" component={DireitoImobiliario} />
      
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={Admin} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navbar />
          <Router />
          <Footer />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;