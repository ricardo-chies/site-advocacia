import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Award, TrendingUp, AlertCircle, Users, FileText, Scale } from "lucide-react";

export default function TrabalhistaBancario() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Horas Extras",
      icon: TrendingUp,
      content: {
        title: "Horas Extras e Jornada Especial",
        problem: "Bancários têm direito a jornada máxima de 6 horas diárias, conforme Lei nº 7.102/1983. Porém, muitos bancos descumprem essa norma cobrando jornadas de 8 horas ou mais.",
        details: [
          "Jornada máxima permitida: 6 horas diárias",
          "Horas excedentes geram direito a adicional por hora extra",
          "Uso indevido de 'cargo de confiança' para aumentar jornada",
          "Bancos descumprem com frequência a Lei 7.102/83",
          "Direito a recebimento retroativo de extras não pagas"
        ],
        consequence: "Você pode entrar na Justiça para receber todas as horas extras não pagas, com juros e correção monetária desde o mês em que foram trabalhadas."
      }
    },
    {
      label: "Assédio Moral",
      icon: AlertCircle,
      content: {
        title: "Assédio Moral e Metas Abusivas",
        problem: "Muitos bancos implementam sistemas de metas abusivas que causam pressão psicológica extrema, humilhação pública e ambiente hostil.",
        details: [
          "Metas irreais que geram cobrança excessiva",
          "Humilhação pública por não atingimento de metas",
          "Ameaças de redução de comissão ou demissão",
          "Jornada prolongada para atingir metas",
          "Afastamentos por transtornos mentais relacionados",
          "Direito a indenização por dano moral comprovado"
        ],
        consequence: "Comprovado o assédio, você tem direito a indenização por danos morais que pode variar de R$ 5 mil a R$ 100 mil ou mais conforme o caso."
      }
    },
    {
      label: "Equiparação Salarial",
      icon: Scale,
      content: {
        title: "Equiparação Salarial e Discriminação",
        problem: "Funcionários exercendo funções idênticas recebem salários diferentes, muitas vezes baseado em discriminação ou arbitrariedade.",
        details: [
          "Mesmo cargo com salários completamente diferentes",
          "Discriminação por gênero, raça ou origem",
          "Promoções negadas injustificadamente",
          "Comissões aplicadas de forma discriminatória",
          "Lei nº 5.772/1971 garante equiparação salarial",
          "Direito a recebimento retroativo das diferenças"
        ],
        consequence: "A equiparação salarial pode ser requerida com efeito retroativo de até 2 anos, gerando ganho financeiro significativo para o empregado."
      }
    },
    {
      label: "Demissão Indevida",
      icon: FileText,
      content: {
        title: "Demissão Irregular e Verbas Rescisórias",
        problem: "Demissões sem justa causa devem seguir procedimentos rigorosos e gerar direitos específicos. Muitos bancos descumprem obrigações de pagamento.",
        details: [
          "Demissão sem justa causa sem aviso prévio",
          "Débitos em holerite (descontos não permitidos)",
          "Não pagamento de comissões/bônus devidos",
          "Atraso no pagamento das verbas rescisórias",
          "Não concessão de aviso prévio remunerado",
          "Direito a multa de 40% do FGTS + indenizações"
        ],
        consequence: "Em caso de demissão irregular, você pode reclamar multa rescisória de 40% do FGTS, comissões não pagas, aviso prévio indenizado e demais verbas."
      }
    }
  ];

  const problems = [
    { icon: TrendingUp, title: "Horas Extras Não Pagas", desc: "Cobrança de jornada além das 6 horas permitidas sem compensação adequada" },
    { icon: AlertCircle, title: "Assédio Moral e Metas Abusivas", desc: "Pressão psicológica extrema, humilhação e ambiente hostil gerado por metas irreais" },
    { icon: Scale, title: "Equiparação Salarial", desc: "Recebimento de salário inferior ao de colega que exerce função idêntica" },
    { icon: Users, title: "Desvio de Função", desc: "Exercício de funções diferentes ou superiores sem alteração contratual" },
    { icon: FileText, title: "Demissão Irregular", desc: "Rescisão sem justa causa ou com descumprimento de direitos legais" },
    { icon: Award, title: "Verbas Rescisórias Incorretas", desc: "Cálculo inadequado ou não pagamento de valores devidos na rescisão" }
  ];

  const services = [
    {
      icon: "📋",
      title: "Análise Completa do Contrato",
      desc: "Revisão profunda de todos os termos contratuais para identificar irregularidades e violações de direitos"
    },
    {
      icon: "⏱️",
      title: "Revisão de Jornada e Extras",
      desc: "Cálculo preciso de horas trabalhadas além do limite legal com quantificação de débitos bancários"
    },
    {
      icon: "⚖️",
      title: "Ações Judiciais",
      desc: "Representação legal completa em demandas trabalhistas contra instituições financeiras"
    },
    {
      icon: "🛡️",
      title: "Defesa de Direitos",
      desc: "Proteção integral dos direitos do bancário em negociações e processos judiciais"
    }
  ];

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
        {/* Background with overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "oklch(16% 0.065 245)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(16% 0.065 245 / 0.95) 0%, oklch(18% 0.065 245 / 0.85) 100%)",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-yellow-500 to-transparent opacity-5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-yellow-500 to-transparent opacity-5 blur-3xl rounded-full" />

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
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

            {/* Title */}
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Direito Trabalhista
              <br />
              <span style={{ color: "oklch(74% 0.12 80)" }}>Bancário</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "oklch(80% 0.03 245)" }}
            >
              Defesa especializada para profissionais do setor financeiro. Conhecemos as práticas abusivas e sabemos como proteger seus direitos.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <a
                href="#problemas"
                className="flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 group"
                style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
              >
                Ver Problemas
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

        {/* Scroll indicator */}
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
                Por Que Precisa de Defesa Jurídica?
              </h2>
            </div>

            <div className="space-y-4">
              <p style={{ color: "oklch(80% 0.03 245)", fontSize: "16px", lineHeight: "1.7" }}>
                <strong style={{ color: "oklch(74% 0.12 80)" }}>Profissionais do setor bancário</strong> enfrentam desafios trabalhistas únicos. A Lei nº 7.102/1983 estabelece que bancários têm direito a jornada máxima de <strong>6 horas diárias</strong>, mas a realidade é bem diferente.
              </p>

              <p style={{ color: "oklch(80% 0.03 245)", fontSize: "16px", lineHeight: "1.7" }}>
                Muitos bancos sistematicamente violam seus direitos através de:
              </p>

              <ul className="space-y-2 ml-4">
                {[
                  "Exigência de jornada de 8 ou mais horas diárias",
                  "Classificação injustificada como 'cargo de confiança' para burlar a jornada",
                  "Metas abusivas que geram assédio moral e pressão psicológica",
                  "Equiparação salarial violada com diferenças injustificadas",
                  "Demissões irregulares com débitos em holerite"
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
                  <strong style={{ color: "oklch(74% 0.12 80)" }}>Você não está sozinho.</strong> Lutaremos pelos seus direitos com experiência comprovada em direito bancário.
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
              Principais Demandas
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Conheça os direitos mais violados e como defendê-los
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
              Principais Problemas Enfrentados
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Problemas comuns que profissionais bancários enfrentam diariamente
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
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "oklch(74% 0.12 80)";
                    el.style.backgroundColor = "oklch(25% 0.08 245)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
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
              Como Podemos Ajudar
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Soluções completas para defender seus direitos
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
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "oklch(74% 0.12 80)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
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
              Pronto para Defender Seus Direitos?
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(80% 0.03 245)" }}>
              Entre em contato conosco para uma avaliação gratuita do seu caso. Analisaremos sua situação e indicaremos o melhor caminho.
            </p>
            <a
              href="https://wa.me/5511984708027?text=Olá! Gostaria de saber mais sobre os serviços de Direito Trabalhista Bancário."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
            >
              Agendar Consulta
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
              Experiência comprovada defendendo profissionais financeiros
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
                  title: "Consultoria Especializada",
                  desc: "Orientação profunda em direito bancário e relações trabalhistas específicas do setor",
                  icon: "⚖️",
                },
                {
                  title: "Negociação Efetiva",
                  desc: "Resolução amigável quando possível ou estratégia agressiva quando necessário",
                  icon: "🤝",
                },
                {
                  title: "Litigância de Excelência",
                  desc: "Representação em processos judiciais especializados com histórico comprovado de sucesso",
                  icon: "📋",
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
