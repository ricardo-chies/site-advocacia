import { Scale, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314417964/FL8EyJ9BRANQkvye7FFgue/logo-uriel_d175ea8f.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(12% 0.055 245)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <img src={LOGO_URL} alt="Logo Uriel Nascimento" className="w-full h-full object-contain" style={{ backgroundColor: "white", padding: "2px" }} />
            </div>
              <div>
                 <div className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Uriel Monteiro Nascimento
                </div>
                <div className="text-xs" style={{ color: "oklch(74% 0.12 80)" }}>
                  Sociedade Unipessoal de Advocacia
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(70% 0.03 245)" }}>
              Escritório de advocacia comprometido com a defesa dos seus direitos.
              Atuação ética, especializada e humanizada em diversas áreas do Direito,
              com atendimento presencial em Piracicaba/SP e digital em todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5511984708027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/#quem-somos", label: "Quem Somos" },
                { href: "/#areas", label: "Áreas de Atuação" },
                { href: "/blog", label: "Blog Jurídico" },
                { href: "/noticias", label: "Notícias" },
                { href: "/#faq", label: "Perguntas Frequentes" },
                { href: "/#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(65% 0.03 245)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(74% 0.12 80)" }} />
                <div>
                  <div className="text-sm text-white">(11) 98470-8027</div>
                  <div className="text-xs" style={{ color: "oklch(65% 0.03 245)" }}>Telefone / WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(74% 0.12 80)" }} />
                <div>
                  <div className="text-sm text-white">contato@urieladvocacia.adv.br</div>
                  <div className="text-xs" style={{ color: "oklch(65% 0.03 245)" }}>E-mail</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(74% 0.12 80)" }} />
                <div>
                  <div className="text-sm text-white">Praça da Catedral, 1023, Sala 04</div>
                  <div className="text-xs" style={{ color: "oklch(65% 0.03 245)" }}>Centro, Piracicaba – SP, CEP: 13400-160</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid oklch(22% 0.06 245)" }}>
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-xs text-center md:text-left" style={{ color: "oklch(55% 0.03 245)" }}>
              <span className="font-medium text-white">URIEL MONTEIRO NASCIMENTO SOCIEDADE UNIPESSOAL DE ADVOCACIA</span>
              <span className="mx-2">·</span>
              CNPJ: 63.625.668/0001-44
            </div>
            <div className="flex items-center gap-4 text-xs" style={{ color: "oklch(55% 0.03 245)" }}>
              <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <span>·</span>
              <span>Todos os direitos reservados © {new Date().getFullYear()}</span>
            </div>
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: "oklch(40% 0.03 245)" }}>
            Este site tem caráter meramente informativo e não constitui consulta jurídica. 
              OAB/SP — Piracicaba/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
