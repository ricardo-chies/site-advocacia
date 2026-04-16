import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Home, 
  FileKey, 
  FileWarning,  
  Clock,
  Users,
  Hammer,
  MapPin,
  Banknote,
  LucideIcon
} from "lucide-react";

// --- DEFINIÇÃO DOS DADOS (Problems e Services precisam estar definidos antes do uso) ---

interface ProblemItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const problems: ProblemItem[] = [
  { icon: Clock, title: "Atraso na Entrega", desc: "Construtora não entrega o imóvel na data estipulada, causando prejuízos com aluguéis" },
  { icon: FileWarning, title: "Vícios Construtivos", desc: "Infiltrações, rachaduras, pisos soltos ou acabamentos inferiores ao padrão vendido" },
  { icon: Banknote, title: "Retenção Abusiva", desc: "Multas exorbitantes ao tentar cancelar a compra do imóvel na planta" },
  { icon: Home, title: "Despejo Ilegal", desc: "Tentativas de reintegração de posse ou despejo sem o devido processo legal ou justa causa" },
  { icon: Users, title: "Herança e Inventário", desc: "Partilha de bens imóveis complexa e disputas familiares sobre propriedades" },
  { icon: FileKey, title: "Contratos Fraudulentos", desc: "Golpes em compra e venda, duplicidade de vendas ou documentos falsificados" }
];

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    icon: "🔍",
    title: "Due Diligence",
    desc: "Análise minuciosa da documentação do imóvel e dos vendedores antes da compra para evitar golpes e dívidas ocultas"
  },
  {
    icon: "⚖️",
    title: "Ações Possessórias",
    desc: "Defesa ou reintegração de posse rápida e eficaz contra invasões, esbulhos ou turbações"
  },
  {
    icon: "📝",
    title: "Contratos Blindados",
    desc: "Elaboração e revisão de contratos de compra e venda, locação e permuta para máxima segurança jurídica"
  },
  {
    icon: "🏢",
    title: "Direito Condominial",
    desc: "Assessoria para síndicos e condôminos em cobranças de inadimplentes, assembleias e conflitos internos"
  }
];

// Interface para o conteúdo das abas
interface TabContent {
  title: string;
  problem: string;
  details: string[];
  consequence: string;
}

interface TabItem {
  label: string;
  icon: LucideIcon;
  content: TabContent;
}

export default function DireitoImobiliario() {
  const [activeTab, setActiveTab] = useState(0);

  // Dados das Abas Principais
  const tabs: TabItem[] = [
    {
      label: "Vício na Obra",
      icon: Hammer,
      content: {
        title: "Atraso e Defeitos na Construção",
        problem: "Construtoras frequentemente entregam imóveis com atraso, desvios de projeto ou vícios construtivos (infiltrações, trincas), deixando o comprador sem o bem e pagando aluguel.",
        details: [
          "Atraso na entrega das chaves além do prazo de tolerância",
          "Vícios construtivos ocultos ou aparentes",
          "Desvio de material ou acabamento inferior ao prometido",
          "Alteração unilateral do projeto arquitetônico",
          "Responsabilidade solidária da construtora e incorporadora"
        ],
        consequence: "É possível exigir o reparo imediato, abatimento no preço ou até a rescisão do contrato com devolução integral dos valores pagos, mais perdas e danos."
      }
    },
    {
      label: "Distrato Imobiliário",
      icon: FileKey,
      content: {
        title: "Rescisão de Contrato de Compra e Venda",
        problem: "Ao desistir do imóvel, as construtoras retêm valores abusivos (muitas vezes acima de 50%), aproveitando-se da hipossuficiência do consumidor.",
        details: [
          "Retenção abusiva de valores superiores a 10-25%",
          "Devolução imediata vs. parcelada (Súmula 543 STJ)",
          "Cobrança de comissão de corretagem indevida",
          "Cláusulas de irretratabilidade nulas",
          "Direito à restituição corrigida monetariamente"
        ],
        consequence: "A justiça pode determinar a devolução dos valores pagos conforme o caso (culpa exclusiva do consumidor ou da construtora), anulando cláusulas abusivas de retenção."
      }
    },
    {
      label: "Locação e Despejo",
      icon: Home,
      content: {
        title: "Disputas Locatícias",
        problem: "Conflitos entre locadores e locatários envolvendo despejos, revisão de aluguel, fiadores e multas contratuais em momentos de crise financeira.",
        details: [
          "Ação de despejo por falta de pagamento",
          "Revisão de aluguel defasado ou abusivo",
          "Liberação do fiador em contratos longos",
          "Denúncia vazia em contratos indeterminados",
          "Retenção do caução sem justificativa"
        ],
        consequence: "Defesa robusta para evitar o despejo ou garantir a retomada do imóvel, além de revisão de valores para equilibrar a relação contratual."
      }
    },
    {
      label: "Usucapião",
      icon: MapPin,
      content: {
        title: "Regularização de Propriedade",
        problem: "Pessoas que moram ou utilizam um terreno/imóvel há anos, mas não possuem a escritura definitiva, correndo risco de perder o bem.",
        details: [
          "Usucapião Urbana e Rural",
          "Usucapião Familiar (abandono do lar)",
          "Usucapião Extrajudicial (direto no cartório)",
          "Posse mansa e pacífica por tempo determinado",
          "Regularização de imóveis invadidos ou irregulares"
        ],
        consequence: "Obtenção da propriedade definitiva do imóvel através de sentença judicial ou ata notarial, garantindo a segurança patrimonial da família."
      }
    }
  ];

  // --- LÓGICA DO CARROSSEL AUTOMÁTICO ---
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(intervalId);
  }, [tabs.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div style={{ backgroundColor: "oklch(16% 0.065 245)" }} className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "oklch(16% 0.065 245)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(16% 0.065 245 / 0.95) 0%, oklch(18% 0.065 245 / 0.85) 100%)",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-yellow-500 to-transparent opacity-5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-yellow-500 to-transparent opacity-5 blur-3xl rounded-full" />

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
              <span
                className="text-sm font-medium uppercase tracking-widest px-4 py-2 rounded-full border"
                style={{
                  color: "oklch(74% 0.12 80)",
                  borderColor: "oklch(74% 0.12 80 / 0.3)",
                  backgroundColor: "oklch(74% 0.12 80 / 0.1)",
                }}
              >
                Especialidade
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
            </div>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Direito
              <br />
              <span style={{ color: "oklch(74% 0.12 80)" }}>Imobiliário</span>
            </h1>

            <p
              className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "oklch(80% 0.03 245)" }}
            >
              Segurança jurídica para o seu patrimônio. Atuação especializada em compra e venda, regularização de imóveis, disputas contratuais e defesa contra abusos de construtoras.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <a
                href="#problemas"
                className="flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 group"
                style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
              >
                Ver Seus Direitos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#solucoes"
                className="flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-200 hover:bg-white/10 group"
                style={{ borderColor: "white", color: "white" }}
              >
                Como Ajudamos
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: "oklch(74% 0.12 80)" }}>
            <div className="w-1 h-2 bg-gradient-to-b rounded-full mt-2" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20" style={{ backgroundColor: "oklch(18% 0.065 245)" }}>
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-3 mb-4">
              <div className="h-px w-10 mt-3" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Por Que Precisa de Advocacia Imobiliária?
              </h2>
            </div>

            <div className="space-y-4">
              <p style={{ color: "oklch(80% 0.03 245)", fontSize: "16px", lineHeight: "1.7" }}>
                <strong style={{ color: "oklch(74% 0.12 80)" }}>O imóvel é, para a maioria, o bem mais valioso da vida.</strong> Contudo, o mercado imobiliário é repleto de armadilhas contratuais, burocracias registrais e práticas comerciais agressivas.
              </p>

              <p style={{ color: "oklch(80% 0.03 245)", fontSize: "16px", lineHeight: "1.7" }}>
                Os riscos são constantes e podem gerar grandes prejuízos:
              </p>

              <ul className="space-y-2 ml-4">
                {[
                  "Compra de imóveis com pendências judiciais ou dívidas",
                  "Atrasos injustificados na entrega de imóveis na planta",
                  "Cobranças abusivas de taxas condominiais e IPTU",
                  "Contratos de locação com cláusulas ilegais",
                  "Dificuldade na regularização de escrituras e registros"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3"
                    style={{ color: "oklch(80% 0.03 245)" }}
                  >
                    <span style={{ color: "oklch(74% 0.12 80)" }} className="font-bold">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div
                className="p-6 rounded-lg border-l-4 mt-6"
                style={{
                  borderLeftColor: "oklch(74% 0.12 80)",
                  backgroundColor: "oklch(74% 0.12 80 / 0.1)",
                }}
              >
                <p style={{ color: "oklch(85% 0.02 245)" }}>
                  <strong style={{ color: "oklch(74% 0.12 80)" }}>Prevenir é melhor que remediar.</strong> Uma análise preventiva de contrato ou documentação pode economizar anos de litígio e milhares de reais.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20" id="tabs">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Áreas de Atuação
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Entenda os principais conflitos imobiliários e como resolvemos
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10 pb-4 border-b-2"
            style={{ borderBottomColor: "oklch(25% 0.06 245)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 group"
                  style={{
                    backgroundColor: activeTab === idx ? "oklch(74% 0.12 80)" : "transparent",
                    color: activeTab === idx ? "oklch(16% 0.065 245)" : "oklch(80% 0.03 245)",
                    borderBottom: activeTab === idx ? "2px solid oklch(74% 0.12 80)" : "none"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Tabs Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 p-8 rounded-2xl"
            style={{ backgroundColor: "oklch(18% 0.065 245)", border: "1px solid oklch(25% 0.06 245)" }}
          >
            <h3 className="text-2xl font-bold" style={{ color: "oklch(74% 0.12 80)" }}>
              {tabs[activeTab].content.title}
            </h3>

            <div>
              <p style={{ color: "oklch(80% 0.03 245)", lineHeight: "1.7" }}>
                <strong>Problema:</strong> {tabs[activeTab].content.problem}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span style={{ color: "oklch(74% 0.12 80)" }}>✓</span>
                Detalhes Importantes
              </h4>
              <ul className="space-y-2 ml-4">
                {tabs[activeTab].content.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-2"
                    style={{ color: "oklch(80% 0.03 245)" }}
                  >
                    <span style={{ color: "oklch(74% 0.12 80)" }}>•</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "oklch(74% 0.12 80 / 0.1)",
                borderLeft: "4px solid oklch(74% 0.12 80)"
              }}
            >
              <p style={{ color: "oklch(90% 0.02 245)" }}>
                <strong style={{ color: "oklch(74% 0.12 80)" }}>Consequência Legal:</strong> {tabs[activeTab].content.consequence}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problemas" className="py-20" style={{ backgroundColor: "oklch(18% 0.065 245)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Situações Comuns no Mercado
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Identifique se você está tendo seus direitos patrimoniais violados
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl border-2 backdrop-blur transition-all duration-300 hover:shadow-2xl cursor-pointer"
                  style={{
                    borderColor: "oklch(25% 0.06 245)",
                    backgroundColor: "oklch(16% 0.065 245 / 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "oklch(74% 0.12 80)";
                    el.style.backgroundColor = "oklch(25% 0.08 245)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "oklch(25% 0.06 245)";
                    el.style.backgroundColor = "oklch(16% 0.065 245 / 0.5)";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ backgroundColor: "oklch(74% 0.12 80 / 0.2)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "oklch(74% 0.12 80)" }} />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                    {problem.title}
                  </h3>

                  <p className="text-sm" style={{ color: "oklch(75% 0.02 245)" }}>
                    {problem.desc}
                  </p>

                  <div
                    className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "oklch(74% 0.12 80)" }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="solucoes" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Nossa Estratégia de Atuação
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Proteção completa para compradores, vendedores, locadores e condôminos
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <div
                  className="p-6 rounded-2xl border-2 transition-all duration-300 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/10 group cursor-pointer h-full flex flex-col"
                  style={{ borderColor: "oklch(25% 0.06 245)", backgroundColor: "oklch(18% 0.065 245)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "oklch(74% 0.12 80)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "oklch(25% 0.06 245)";
                  }}
                >
                  <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-400 transition-colors" style={{ color: "oklch(74% 0.12 80)" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "oklch(75% 0.02 245)" }} className="flex-grow">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "oklch(18% 0.065 245)" }}>
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Garanta a Segurança do Seu Patrimônio
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(80% 0.03 245)" }}>
              Não assine contratos ou aceite intimações sem orientação especializada. Prazos processuais e documentais são rigorosos.
            </p>
            <a
              href="https://wa.me/5511984708027?text=Olá! Gostaria de saber mais sobre Direito Imobiliário e tenho uma dúvida sobre meu imóvel/contrato."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="diferenciais" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Por Que nos Escolher?
            </h2>
            <p className="mb-12" style={{ color: "oklch(80% 0.03 245)" }}>
              Experiência sólida na proteção de bens e resolução de conflitos fundiários
            </p>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Segurança Jurídica",
                  desc: "Análise preventiva detalhada para evitar nulidades, fraudes e prejuízos financeiros futuros.",
                  icon: "🛡️",
                },
                {
                  title: "Atuação Contenciosa",
                  desc: "Experiência em tribunais para reverter multas, cancelar contratos abusivos e reintegrar posses.",
                  icon: "⚖️",
                },
                {
                  title: "Agilidade Registral",
                  desc: "Conhecimento profundo dos procedimentos cartorários para acelerar escrituras e usucapiões.",
                  icon: "📜",
                },
              ].map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <div
                    className="p-8 rounded-2xl border-2 transition-all duration-300 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/10 group cursor-pointer"
                    style={{ borderColor: "oklch(25% 0.06 245)", backgroundColor: "oklch(18% 0.065 245)" }}
                  >
                    <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors" style={{ color: "oklch(74% 0.12 80)" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "oklch(75% 0.02 245)" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}