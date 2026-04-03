import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import {
  Scale, HeartPulse, Stethoscope, ShieldCheck, FileText, Hospital, Syringe,
  ChevronDown, ChevronUp, ArrowRight, Search, MessageCircle,
  CheckCircle, Award, Clock, Shield
} from "lucide-react";

const LAWYER_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314417964/FL8EyJ9BRANQkvye7FFgue/advogado-uriel_4967a405.jpeg";
const WHATSAPP_URL = "https://wa.me/5511984708027?text=Olá! Gostaria de saber mais sobre os serviços do escritório Uriel Monteiro Nascimento Sociedade Unipessoal de Advocacia.";

const areas = [
  {
    icon: HeartPulse,
    title: "Ação Contra Plano de Saúde",
    desc: "Negativa de cobertura, cancelamento indevido, reajustes abusivos e recusa de procedimentos médicos pelo plano de saúde."
  },
  {
    icon: Stethoscope,
    title: "Indenização por Erro Médico",
    desc: "Responsabilização de médicos, hospitais e clínicas por negligência, imprudência ou imperícia no atendimento."
  },
  {
    icon: ShieldCheck,
    title: "Indenização de Seguros em Geral",
    desc: "Recusa indevida de sinistros, cobranças abusivas e descumprimento de contratos de seguro de saúde e vida."
  },
  {
    icon: Hospital,
    title: "Ação Contra o SUS",
    desc: "Obrigação do Estado ao fornecimento de medicamentos, cirurgias, tratamentos e leitos hospitalares pelo sistema público."
  },
  {
    icon: Syringe,
    title: "Fornecimento de Medicamentos",
    desc: "Ações judiciais para garantir o fornecimento de medicamentos de alto custo, órfãos ou não disponíveis na rede pública."
  },
  {
    icon: FileText,
    title: "Direito Médico e Hospitalar",
    desc: "Defesa de profissionais de saúde, processos no CRM, contratos hospitalares e questões regulatórias da área da saúde."
  },
];

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "oklch(16% 0.065 245)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />
      </div>

      {/* Decorative circle */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "oklch(74% 0.12 80)" }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
                Especialistas em Direito da Saúde
              </span>
            </div>

            <h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Uriel Nascimento
              <span className="block" style={{ color: "oklch(74% 0.12 80)" }}>
                Sociedade de
              </span>
              Advocacia
            </h1>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(80% 0.03 245)" }}>
              Especialistas em Direito da Saúde: planos de saúde, erro médico, SUS e seguros.
              Defenda seus direitos com quem entende profundamente da área.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
              >
                <MessageCircle className="w-5 h-5" />
                Contato no WhatsApp
              </a>
              <a
                href="#quem-somos"
                className="flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-base border-2 transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: "white", color: "white" }}
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10" style={{ borderTop: "1px solid oklch(25% 0.06 245)" }}>
              {[
                { value: "10+", label: "Anos de Experiência" },
                { value: "500+", label: "Clientes Atendidos" },
                { value: "98%", label: "Casos Resolvidos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold" style={{ color: "oklch(74% 0.12 80)", fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "oklch(65% 0.03 245)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-30"
                style={{ border: "2px solid oklch(74% 0.12 80)" }}
              />
              <img
                src={LAWYER_PHOTO}
                alt="Dr. Uriel Nascimento - Advogado"
                className="relative w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-2xl shadow-2xl"
                style={{ objectPosition: "center top" }}
              />
              {/* Badge */}
              <div
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-xl"
                style={{ backgroundColor: "oklch(74% 0.12 80)" }}
              >
                <div className="text-sm font-bold" style={{ color: "oklch(16% 0.065 245)" }}>
                  OAB/SP: 491.479
                </div>
                <div className="text-xs" style={{ color: "oklch(25% 0.065 245)" }}>Advogado Inscrito</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchSection() {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) window.location.href = `/blog?search=${encodeURIComponent(search)}`;
  };
  return (
    <section className="py-10" style={{ backgroundColor: "oklch(20% 0.07 245)" }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "oklch(74% 0.12 80)" }}>
              Encontre informações sobre
            </div>
            <div className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Direito da Saúde
            </div>
          </div>
          <form onSubmit={handleSearch} className="flex-1 flex gap-3 md:ml-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "oklch(65% 0.03 245)" }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite o assunto jurídico e encontre um artigo..."
                className="w-full pl-12 pr-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
                style={{
                  backgroundColor: "oklch(16% 0.065 245)",
                  color: "white",
                  border: "1px solid oklch(30% 0.06 245)",
                }}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
              Direito da Saúde
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
            Áreas de Atuação
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(45% 0.04 245)" }}>
            Advocacia especializada exclusivamente em Direito da Saúde: planos de saúde, SUS,
            erro médico e seguros. Defendemos seus direitos com expertise e comprometimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group p-7 rounded-xl border-2 transition-all duration-300 hover:shadow-xl cursor-pointer"
              style={{ borderColor: "oklch(90% 0.02 245)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(74% 0.12 80)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(98% 0.005 245)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(90% 0.02 245)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "white";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ backgroundColor: "oklch(96% 0.01 245)" }}
              >
                <area.icon className="w-6 h-6" style={{ color: "oklch(16% 0.065 245)" }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(45% 0.04 245)" }}>
                {area.desc}
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm font-medium" style={{ color: "oklch(74% 0.12 80)" }}>
                Saiba mais <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}
          >
            <MessageCircle className="w-5 h-5" />
            Consulte seu caso
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="quem-somos" className="py-20" style={{ backgroundColor: "oklch(97% 0.005 245)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl opacity-20"
              style={{ backgroundColor: "oklch(74% 0.12 80)" }}
            />
            <img
              src={LAWYER_PHOTO}
              alt="Dr. Uriel Nascimento"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
              style={{ height: "500px", objectPosition: "center top" }}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
                Quem Somos
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
              Uriel Monteiro Nascimento
            </h2>
            <p className="text-base font-medium mb-6" style={{ color: "oklch(74% 0.12 80)" }}>
              Advogado — OAB/SP: 491.479
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(35% 0.04 245)" }}>
              O Dr. Uriel Monteiro Nascimento é advogado especialista em Direito da Saúde, atuando na defesa de pacientes
              contra planos de saúde, erros médicos e omissões do SUS. Localizado na Praça da Catedral,
              1023, Sala 04, Centro, Piracicaba/SP, o escritório atende em todo o Brasil.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(35% 0.04 245)" }}>
              Com profundo conhecimento das normas da ANS, legislação do SUS e jurisprudência em saúde,
              atuamos com ética, transparência e comprometimento para garantir que você receba o tratamento
              que tem direito — seja pelo plano de saúde, pelo Estado ou por via judicial.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, text: "Especialista em Direito da Saúde" },
                { icon: Clock, text: "Mais de 10 anos de experiência" },
                { icon: Shield, text: "Ética e sigilo profissional" },
                { icon: CheckCircle, text: "Atendimento em todo o Brasil" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "oklch(74% 0.12 80)" }} />
                  <span className="text-sm" style={{ color: "oklch(35% 0.04 245)" }}>{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const { data: newsList, isLoading } = trpc.news.list.useQuery({ limit: 3 });

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
                Imprensa
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
              Últimas Notícias
            </h2>
          </div>
          <Link
            href="/noticias"
            className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Ver Todas as Notícias <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border animate-pulse" style={{ borderColor: "oklch(90% 0.02 245)" }}>
                <div className="h-48" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
                <div className="p-6 space-y-3">
                  <div className="h-4 rounded" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
                  <div className="h-4 w-3/4 rounded" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList?.map((item) => (
              <Link key={item.id} href={`/noticias/${item.slug}`}>
                <div
                  className="group rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl cursor-pointer h-full"
                  style={{ borderColor: "oklch(90% 0.02 245)" }}
                >
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ backgroundColor: "oklch(16% 0.065 245)" }}
                  >
                    <Scale className="w-16 h-16 opacity-20" style={{ color: "oklch(74% 0.12 80)" }} />
                  </div>
                  <div className="p-6">
                    {item.source && (
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mb-3 px-2 py-1 rounded inline-block"
                        style={{ backgroundColor: "oklch(96% 0.01 245)", color: "oklch(74% 0.12 80)" }}
                      >
                        {item.source}
                      </div>
                    )}
                    <h3 className="font-bold text-base mb-3 leading-snug line-clamp-3 group-hover:underline" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: "oklch(45% 0.04 245)" }}>
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "oklch(74% 0.12 80)" }}>
                      Ver Conteúdo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BlogSection() {
  const { data: posts, isLoading } = trpc.blog.list.useQuery({ limit: 3 });

  return (
    <section id="blog" className="py-20" style={{ backgroundColor: "oklch(97% 0.005 245)" }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
                Blog Jurídico
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
              Confira Nossos Conteúdos
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Ver Todo o Conteúdo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border animate-pulse" style={{ borderColor: "oklch(90% 0.02 245)" }}>
                <div className="p-6 space-y-3">
                  <div className="h-4 rounded" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
                  <div className="h-4 w-3/4 rounded" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts?.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div
                  className="group bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl cursor-pointer h-full flex flex-col"
                  style={{ borderColor: "oklch(90% 0.02 245)" }}
                >
                  <div
                    className="h-3 w-full"
                    style={{ backgroundColor: "oklch(74% 0.12 80)" }}
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    {post.category && (
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mb-3 px-2 py-1 rounded inline-block self-start"
                        style={{ backgroundColor: "oklch(96% 0.01 245)", color: "oklch(16% 0.065 245)" }}
                      >
                        {post.category}
                      </div>
                    )}
                    <h3 className="font-bold text-base mb-3 leading-snug line-clamp-3 group-hover:underline flex-1" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-3 mb-4" style={{ color: "oklch(45% 0.04 245)" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold mt-auto" style={{ color: "oklch(74% 0.12 80)" }}>
                      Ver Conteúdo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BrazilSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
              <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
                Atendimento Nacional
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Atendemos em Todo o Brasil
            </h2>
            <p className="text-base mb-6" style={{ color: "oklch(75% 0.03 245)" }}>
              Com processos totalmente digitais, oferecemos suporte jurídico sem barreiras, 
              independentemente de onde você esteja. Consultas online e acompanhamento 
              processual remoto para todo o território nacional.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-4 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
            >
              <MessageCircle className="w-5 h-5" />
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const { data: faqs, isLoading } = trpc.faq.list.useQuery();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
              Dúvidas
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
            Perguntas Frequentes
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "oklch(45% 0.04 245)" }}>
            Encontre respostas para as dúvidas mais comuns sobre direitos e serviços jurídicos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {isLoading ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 rounded-xl animate-pulse" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
            ))
          ) : (
            faqs?.map((faq) => (
              <div
                key={faq.id}
                className="rounded-xl border-2 overflow-hidden transition-all duration-200"
                style={{ borderColor: openId === faq.id ? "oklch(74% 0.12 80)" : "oklch(90% 0.02 245)" }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  style={{ backgroundColor: openId === faq.id ? "oklch(97% 0.005 245)" : "white" }}
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className="font-semibold text-sm pr-4" style={{ color: "oklch(16% 0.065 245)" }}>
                    {faq.question}
                  </span>
                  {openId === faq.id
                    ? <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(74% 0.12 80)" }} />
                    : <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(45% 0.04 245)" }} />
                  }
                </button>
                {openId === faq.id && (
                  <div className="px-5 pb-5" style={{ backgroundColor: "oklch(97% 0.005 245)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(35% 0.04 245)" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => { setSuccess(true); setName(""); setEmail(""); setConsentPrivacy(false); setConsentMarketing(false); },
    onError: (err) => setError(err.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    subscribe.mutate({ name, email, consentPrivacy, consentMarketing });
  };

  return (
    <section id="contato" className="py-20" style={{ backgroundColor: "oklch(97% 0.005 245)" }}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
              Newsletter
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
          </div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
            Fique por Dentro das Atualizações
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(45% 0.04 245)" }}>
            Inscreva-se para receber nossos artigos jurídicos, notícias do meio e 
            informações relevantes sobre seus direitos.
          </p>

          {success ? (
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: "oklch(96% 0.05 155)", border: "1px solid oklch(74% 0.12 80)" }}>
              <CheckCircle className="w-12 h-12 mx-auto mb-3" style={{ color: "oklch(74% 0.12 80)" }} />
              <p className="font-semibold" style={{ color: "oklch(16% 0.065 245)" }}>Inscrição realizada com sucesso!</p>
              <p className="text-sm mt-1" style={{ color: "oklch(35% 0.04 245)" }}>Em breve você receberá nossos conteúdos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 border"
                  style={{ borderColor: "oklch(85% 0.02 245)", color: "oklch(16% 0.065 245)" }}
                />
                <input
                  type="email"
                  placeholder="Seu e-mail *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 border"
                  style={{ borderColor: "oklch(85% 0.02 245)", color: "oklch(16% 0.065 245)" }}
                />
              </div>

              <div className="space-y-3 text-left">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentPrivacy}
                    onChange={(e) => setConsentPrivacy(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded flex-shrink-0"
                    required
                  />
                  <span className="text-sm" style={{ color: "oklch(35% 0.04 245)" }}>
                    Ao informar meus dados, eu concordo com a{" "}
                    <a href="/politica-de-privacidade" className="underline" style={{ color: "oklch(16% 0.065 245)" }}>
                      Política de Privacidade
                    </a>. *
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentMarketing}
                    onChange={(e) => setConsentMarketing(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded flex-shrink-0"
                  />
                  <span className="text-sm" style={{ color: "oklch(35% 0.04 245)" }}>
                    Eu concordo em receber comunicações e conteúdos personalizados de acordo com meus interesses.
                  </span>
                </label>
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={subscribe.isPending}
                className="w-full py-4 rounded-lg font-semibold text-base transition-all hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}
              >
                {subscribe.isPending ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Karina Secco",
    rating: 5,
    date: "Há 37 semanas",
    text: "Ótimo! O Dr Uriel foi fundamental para resolver meu problema na área do direito. Tive uma boa experiência que impactou positivamente minha vida. Ele foi bastante claro e acessível. Super Recomendo!",
    initials: "KS",
  },
  {
    name: "Ya Souza",
    rating: 5,
    date: "Há 41 semanas",
    text: "Atendimento com excelência, e muita dedicação com seus clientes, indico o atendimento de olhos fechados!",
    initials: "YS",
  },
  {
    name: "Lucimara Monteiro",
    rating: 5,
    date: "20 de jul. de 2024",
    text: "Muito prestativo e atencioso. Eficácia em entregar documentos e resolver problemas. Muito educado e conhecedor das leis.",
    initials: "LM",
  },
  {
    name: "Camila Alves",
    rating: 5,
    date: "21 de jun. de 2024",
    text: "Ótimo Advogado, bom ouvinte e sempre à sua disposição, grata grandemente por toda atenção! Indico muito.",
    initials: "CA",
  },
  {
    name: "Raul Lopes",
    rating: 5,
    date: "20 de out. de 2023",
    text: "Profissional de ótima formação, atendeu as minhas expectativas, recomendo.",
    initials: "RL",
  },
  {
    name: "leonardo Mourão",
    rating: 5,
    date: "18 de set. de 2023",
    text: "Uma experiência magnífica, realmente uma empresa de ótima qualidade.",
    initials: "LM",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4"
          fill={star <= rating ? "oklch(74% 0.12 80)" : "oklch(85% 0.02 245)"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
      <div className="container">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
              Avaliações
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            O que nossos clientes dizem
          </h2>
          {/* Google rating summary */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-2xl font-bold text-white">5.0</span>
            </div>
            <div>
              <StarRating rating={5} />
              <p className="text-xs mt-1" style={{ color: "oklch(65% 0.03 245)" }}>Avaliado no Google</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: "oklch(20% 0.07 245)", border: "1px solid oklch(25% 0.06 245)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{review.name}</div>
                  <div className="text-xs" style={{ color: "oklch(55% 0.03 245)" }}>{review.date}</div>
                </div>
                {/* Google G logo */}
                <div className="ml-auto">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-sm leading-relaxed" style={{ color: "oklch(75% 0.03 245)" }}>
                “{review.text}”
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Uriel+Nascimento+Sociedade+de+Advocacia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchSection />
      <AreasSection />
      <AboutSection />
      <ReviewsSection />
      <NewsSection />
      <BrazilSection />
      <BlogSection />
      <FaqSection />
      <NewsletterSection />
    </div>
  );
}
