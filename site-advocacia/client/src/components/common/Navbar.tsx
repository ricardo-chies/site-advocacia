import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Scale, Lock } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314417964/FL8EyJ9BRANQkvye7FFgue/logo-uriel_d175ea8f.png";

const navLinks = [
  { href: "/#quem-somos", label: "Quem Somos" },
  { href: "/#areas", label: "Áreas de Atuação" },
  { href: "/blog", label: "Blog" },
  { href: "/noticias", label: "Notícias" },
  { href: "/#faq", label: "Perguntas Frequentes" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(16% 0.065 245)" : "oklch(16% 0.065 245 / 0.97)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <img src={LOGO_URL} alt="Logo Uriel Nascimento" className="w-full h-full object-contain" style={{ backgroundColor: "white", padding: "2px" }} />
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-sm leading-tight"
                style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
              >
                Uriel Monteiro Nascimento
              </span>
              <span className="text-xs leading-tight" style={{ color: "oklch(74% 0.12 80)" }}>
                Sociedade Unipessoal de Advocacia
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:text-white"
                style={{ color: "oklch(85% 0.02 245)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(74% 0.12 80)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(85% 0.02 245)";
                }}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/admin"
              className="ml-2 p-2 rounded-md transition-colors duration-200 hover:bg-opacity-20"
              style={{ color: "oklch(74% 0.12 80)", backgroundColor: "oklch(74% 0.12 80 / 0.1)" }}
              title="Painel de Admin"
            >
              <Lock className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/5511984708027"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: "oklch(74% 0.12 80)",
                color: "oklch(16% 0.065 245)",
              }}
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: "white" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="lg:hidden py-4 border-t"
            style={{ borderColor: "oklch(25% 0.06 245)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-4 py-3 text-sm font-medium transition-colors"
                style={{ color: "oklch(85% 0.02 245)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3 space-y-2">
              <Link
                href="/admin"
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: "oklch(74% 0.12 80 / 0.2)",
                  color: "oklch(74% 0.12 80)",
                  border: "1px solid oklch(74% 0.12 80)",
                }}
              >
                Painel de Admin
              </Link>
              <a
                href="https://wa.me/5511984708027"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold"
                style={{
                  backgroundColor: "oklch(74% 0.12 80)",
                  color: "oklch(16% 0.065 245)",
                }}
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
