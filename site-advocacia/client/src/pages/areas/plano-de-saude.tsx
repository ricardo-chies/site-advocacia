import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  HeartPulse, 
  Pill, 
  FileWarning,  
  ShieldCheck, 
  Activity,
  Clock,
  UserCheck,
} from "lucide-react";

export default function DireitoSaude() {
  const [activeTab, setActiveTab] = useState(0);

  // Dados das Abas Principais - Conteúdo de Saúde
  const tabs = [
    {
      label: "Negativa de Cobertura",
      icon: FileWarning,
      content: {
        title: "Negativa Indevida de Procedimentos",
        problem: "Planos de saúde frequentemente negam cirurgias, exames ou terapias alegando 'carência' ou 'ausência de previsão contratual', mesmo com indicação médica urgente.",
        details: [
          "Negativa de cirurgias de alta complexidade",
          "Recusa de cobertura para doenças preexistentes após 2 anos",
          "Limitação abusiva de sessões (psicologia, fonoaudiologia)",
          "Exigência de autorização prévia burocrática",
          "Direito à inversão do ônus da prova em casos urgentes"
        ],
        consequence: "A justiça pode obrigar o plano a autorizar o procedimento imediatamente (tutela de urgência), sob pena de multa diária, além de indenização por danos morais."
      }
    },
    {
      label: "Medicamentos",
      icon: Pill,
      content: {
        title: "Fornecimento de Medicamentos",
        problem: "Negativa de fornecimento de remédios de alto custo, importados ou fora do rol da ANS, essenciais para a sobrevivência ou qualidade de vida do paciente.",
        details: [
          "Medicamentos de alto custo não listados pela ANS",
          "Remédios importados sem registro na ANVISA (em casos específicos)",
          "Tratamentos experimentais com comprovação científica",
          "Negativa baseada apenas no custo elevado do fármaco",
          "Obrigação solidária entre Plano de Saúde e Estado"
        ],
        consequence: "É possível obter liminar para fornecimento imediato do medicamento pelo plano ou pelo SUS, garantindo a continuidade do tratamento sem interrupções."
      }
    },
    {
      label: "Reajustes Abusivos",
      icon: Activity,
      content: {
        title: "Reajustes por Faixa Etária",
        problem: "Aumentos exorbitantes na mensalidade ao completar 59 anos, muitas vezes ultrapassando 100%, tornando o plano inacessível para idosos.",
        details: [
          "Reajuste superior a 20% na mudança de faixa etária",
          "Ausência de estudo atuarial justificando o aumento",
          "Aplicação de reajuste em contratos antigos (anteriores a 1999)",
          "Abusividade reconhecida pelo STJ e Tribunais Estaduais",
          "Direito à revisão do valor cobrado retroativamente"
        ],
        consequence: "O juiz pode determinar a redução do reajuste a um índice médio razoável e condenar o plano a devolver os valores pagos a maior nos últimos anos."
      }
    },
    {
      label: "Cancelamento",
      icon: ShieldCheck,
      content: {
        title: "Cancelamento Ilegal do Plano",
        problem: "Suspensão ou cancelamento unilateral do contrato coletivo ou individual, deixando o beneficiário desamparado em momento crítico.",
        details: [
          "Cancelamento sem aviso prévio de 60 dias",
          "Suspensão por suposta falta de pagamento (sem notificação)",
          "Cancelamento de contrato coletivo por sinistralidade",
          "Demissão do funcionário representante do contrato coletivo",
          "Manutenção do vínculo durante tratamento de doença grave"
        ],
        consequence: "O cancelamento pode ser declarado nulo, com a reintegração imediata do beneficiado ao plano, garantindo a continuidade do tratamento médico."
      }
    }
  ];

  // Cards de Problemas Comuns
  const problems = [
    { icon: HeartPulse, title: "Negativa de Cirurgias", desc: "Recusa em autorizar procedimentos cirúrgicos essenciais indicados pelo médico assistente" },
    { icon: Pill, title: "Medicamentos de Alto Custo", desc: "Negativa de fornecimento de remédios caros, importados ou fora do rol da ANS" },
    { icon: Activity, title: "Reajuste por Idade", desc: "Aumentos abusivos na mensalidade ao completar 59 anos ou mudar de faixa etária" },
    { icon: Clock, title: "Carência Irregular", desc: "Exigência de cumprimento de prazos de carência em casos de urgência e emergência" },
    { icon: FileWarning, title: "Limite de Sessões", desc: "Restrição abusiva do número de sessões de fisioterapia, psicoterapia ou fonoaudiologia" },
    { icon: UserCheck, title: "Doenças Preexistentes", desc: "Cobrança de taxa extra ou negativa de cobertura para doenças declaradas no início" }
  ];

  // Serviços Oferecidos
  const services = [
    {
      icon: "📋",
      title: "Análise de Contrato",
      desc: "Verificação detalhada das cláusulas contratuais para identificar abusividades e ilegalidades nas negativas"
    },
    {
      icon: "⚖️",
      title: "Ações Liminares",
      desc: "Pedidos de urgência para garantir cirurgias, exames ou medicamentos em tempo hábil para o tratamento"
    },
    {
      icon: "💰",
      title: "Indenizações",
      desc: "Busca por reparação financeira por danos morais e materiais decorrentes da negativa ou demora no atendimento"
    },
    {
      icon: "🛡️",
      title: "Defesa do Idoso",
      desc: "Atuação especializada contra reajustes abusivos e cancelamentos ilegais de planos de saúde para maiores de 60 anos"
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

        {/* Decorative elements - Mantido Dourado/Amarelo */}
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
              Direito da
              <br />
              <span style={{ color: "oklch(74% 0.12 80)" }}>Saúde</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "oklch(80% 0.03 245)" }}
            >
              Defesa intransigente do seu direito à vida e à saúde. Lutamos contra abusos de planos de saúde, negativas de cobertura e garantimos o acesso a tratamentos e medicamentos.
            </p>

            {/* CTA */}
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
                Por Que Precisa de Advocacia Especializada?
              </h2>
            </div>

            <div className="space-y-4">
              <p style={{ color: "oklch(80% 0.03 245)", fontSize: "16px", lineHeight: "1.7" }}>
                <strong style={{ color: "oklch(74% 0.12 80)" }}>A saúde é um direito fundamental</strong> garantido pela Constituição, mas a realidade dos usuários de planos de saúde é marcada por batalhas diárias contra burocracias e lucros exacerbados.
              </p>

              <p style={{ color: "oklch(80% 0.03 245)", fontSize: "16px", lineHeight: "1.7" }}>
                As operadoras frequentemente utilizam práticas abusivas como:
              </p>

              <ul className="space-y-2 ml-4">
                {[
                  "Negativa de procedimentos médicos indicados pelo seu doutor",
                  "Reajustes de mensalidades acima da inflação médica",
                  "Cancelamento unilateral do contrato sem justa causa",
                  "Limitação de sessões de terapias contínuas",
                  "Exigência de carências ilegais em casos de urgência"
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
                  <strong style={{ color: "oklch(74% 0.12 80)" }}>Não aceite a negativa como final.</strong> Existem leis específicas (Lei 9.656/98 e Código de Defesa do Consumidor) que protegem você.
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
              Entenda os principais conflitos e como resolvemos
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
              Situações Comuns no Dia a Dia
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Identifique se você está tendo seus direitos violados
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
              Nossa Estratégia de Defesa
            </h2>
            <p style={{ color: "oklch(80% 0.03 245)" }}>
              Agilidade e conhecimento técnico para garantir seu tratamento
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
              Sua Saúde Não Pode Esperar
            </h2>
            <p className="text-lg mb-8" style={{ color: "oklch(80% 0.03 245)" }}>
              Se você recebeu uma negativa ou teve seu plano cancelado, aja rápido. Prazos são essenciais para garantir liminares.
            </p>
            <a
              href="https://wa.me/5511984708027?text=Olá! Gostaria de saber mais sobre Direito da Saúde e tenho uma dúvida sobre meu plano."
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
              Experiência comprovada em lidar com grandes operadoras de saúde
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
                  title: "Agilidade Processual",
                  desc: "Sabemos que saúde é urgente. Atuamos para obter liminares rápidas e efetivas.",
                  icon: "⚡",
                },
                {
                  title: "Conhecimento Técnico",
                  desc: "Domínio profundo da Lei 9.656/98, normas da ANS e jurisprudência atualizada dos tribunais.",
                  icon: "📚",
                },
                {
                  title: "Atendimento Humano",
                  desc: "Entendemos a sensibilidade do momento. Tratamos cada caso com empatia e determinação.",
                  icon: "❤️",
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