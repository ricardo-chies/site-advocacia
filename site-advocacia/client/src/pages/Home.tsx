import { useState } from "react";
import { Link } from "wouter";
import {
  Scale, 
  HeartPulse, 
  Home as HomeIcon, 
  ArrowRight, 
  Search, 
  MessageCircle,
  CheckCircle, 
  Award, 
  Clock, 
  Shield,
  LucideIcon,
} from "lucide-react";

const LAWYER_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314417964/FL8EyJ9BRANQkvye7FFgue/advogado-uriel_4967a405.jpeg";
const WHATSAPP_URL = "https://wa.me/5511984708027?text=Olá! Gostaria de saber mais sobre os serviços do escritório Uriel Monteiro Nascimento Sociedade Unipessoal de Advocacia.";

// Interface para as áreas
interface AreaItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
}

const areas: AreaItem[] = [
  {
    icon: Scale,
    title: "Direito Trabalhista",
    desc: "Defesa especializada para bancários contra abusos trabalhistas.",
    link: "/areas/trabalhista-bancario"
  },
  {
    icon: HeartPulse,
    title: "Direito da Saúde",
    desc: "Negativa de cobertura, cancelamento indevido e reajustes abusivos.",
    link: "/areas/plano-de-saude"
  },
  {
    icon: HomeIcon,
    title: "Direito Imobiliário",
    desc: "Compra e venda, regularização, usucapião e contratos.",
    link: "/areas/direito-imobiliario"
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
          
          {/* COLUNA ESQUERDA: Texto + Cards de Áreas */}
          <div className="flex flex-col justify-center">
            {/* REMOVIDO: Badge "Advocacia Especializada" */}

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

            <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: "oklch(80% 0.03 245)" }}>
             Especialistas em <strong>Direito da Saúde</strong>, <strong>Trabalhista Bancário</strong> e <strong>Imobiliário</strong>. 
             Defendemos seus direitos com expertise técnica e atendimento humanizado.
            </p>

            {/* --- CARDS DE ÁREAS INTEGRADOS AQUI (Minimalista) --- */}
            <div className="space-y-3 mb-8">
              {areas.map((area, index) => (
                <Link key={index} href={area.link}>
                  <div
                    className="group flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-300 hover:bg-white/5"
                    style={{ borderColor: "oklch(25% 0.06 245)" }}
                  >
                    <div className="mr-3 p-2 rounded-md bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                      <area.icon className="w-5 h-5" style={{ color: "oklch(74% 0.12 80)" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-sm group-hover:text-yellow-400 transition-colors">
                        {area.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0" style={{ color: "oklch(74% 0.12 80)" }} />
                  </div>
                </Link>
              ))}
            </div>
            {/* --------------------------------------------------- */}

            <div className="flex flex-wrap gap-4">
              <a
                href="#quem-somos"
                className="flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-base border-2 transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: "white", color: "white" }}
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
              >
                Falar no WhatsApp
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: Foto (Mantida no Tamanho Original) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-40 blur-2xl"
                style={{ border: "3px solid oklch(74% 0.12 80)", backgroundColor: "oklch(74% 0.12 80 / 0.1)" }}
              />
              <img
                src={LAWYER_PHOTO}
                alt="Dr. Uriel Nascimento - Advogado"
                className="relative w-96 h-[480px] lg:w-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl border-2 transition-all duration-300 hover:shadow-2xl"
                style={{ objectPosition: "center top", borderColor: "oklch(74% 0.12 80 / 0.3)" }}
              />
              {/* Badge */}
              <div
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur"
                style={{ backgroundColor: "oklch(74% 0.12 80)" }}
              >
                <div className="text-sm font-bold" style={{ color: "oklch(16% 0.065 245)" }}>
                  OAB/SP: 491.479
                </div>
                <div className="text-xs" style={{ color: "oklch(25% 0.065 245)" }}>Advogado Inscrito</div>
              </div>

              {/* Google Reviews Badge */}
              <div
                className="absolute -top-6 -right-6 px-5 py-3 rounded-2xl shadow-2xl border border-white/10 backdrop-blur flex items-center gap-3"
                style={{ backgroundColor: "oklch(16% 0.065 245 / 0.8)" }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: "oklch(74% 0.12 80)" }}>
                    5.0
                  </div>
                  <div className="text-xs" style={{ color: "oklch(65% 0.03 245)" }}>★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleReviewsSection() {
  return (
    <section style={{ backgroundColor: "oklch(20% 0.07 245)" }} className="py-12 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Reviews Card */}
          <div
            className="flex items-center gap-6 px-8 py-6 rounded-2xl border backdrop-blur transition-all duration-300 hover:border-yellow-400 group"
            style={{
              backgroundColor: "oklch(16% 0.065 245 / 0.6)",
              borderColor: "oklch(74% 0.12 80 / 0.5)",
            }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "oklch(74% 0.12 80)" }}>
                5.0
              </div>
              <div className="text-lg tracking-wider mb-2" style={{ color: "oklch(74% 0.12 80)" }}>
                ★★★★★
              </div>
              <p className="text-sm" style={{ color: "oklch(75% 0.02 245)" }}>
                Avaliações no Google
              </p>
            </div>

            <div className="h-12 w-px" style={{ backgroundColor: "oklch(74% 0.12 80 / 0.3)" }} />

            <div>
              <p
                className="font-semibold mb-4 max-w-xs leading-relaxed"
                style={{ color: "oklch(85% 0.02 245)" }}
              >
                Conheça as experiências de nossos clientes e como ajudamos em seus processos legais.
              </p>
              <a
                href="https://www.google.com/search?q=Uriel+Monteiro+Nascimento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
              >
                Ver no Google
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchSection() {
  const [search, setSearch] = useState("");
  
  // Tipagem correta do evento
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
              Nossas Especialidades
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
                { icon: Award, text: "Especialista Multidisciplinar" },
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

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
}

const REVIEWS: Review[] = [
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

// Tipagem da prop rating
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            O que nossos clientes dizem
          </h2>
          <p className="text-base mt-4" style={{ color: "oklch(75% 0.03 245)" }}>
            Avaliações reais de clientes satisfeitos com nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "oklch(20% 0.07 245)", border: "1px solid oklch(25% 0.06 245)" }}
            >
              <StarRating rating={review.rating} />
              
              <p className="text-sm leading-relaxed flex-1" style={{ color: "oklch(75% 0.03 245)" }}>
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "oklch(25% 0.06 245)" }}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GoogleReviewsSection />
      <SearchSection />
      <AboutSection />
      <ReviewsSection />
    </div>
  );
}