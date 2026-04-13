import { useState } from "react";
import { motion } from "framer-motion";

import {
  AlertCircle,
  FileText,
  Activity,
  HeartPulse,
  Scale,
  Award,
  Users,
  CheckCircle
} from "lucide-react";

export default function PlanoDeSaude() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Negativa",
      icon: AlertCircle,
      content: {
        title: "Negativa de Cobertura",
        problem:
          "Planos de saúde frequentemente recusam exames, cirurgias e tratamentos essenciais, mesmo com prescrição médica.",
        details: [
          "Recusa de procedimentos médicos",
          "Negativa de exames essenciais",
          "Cirurgias não autorizadas",
          "Abusos contratuais",
          "Descumprimento de normas da ANS"
        ],
        consequence:
          "Você pode obter decisão judicial rápida (liminar) obrigando o plano a autorizar o tratamento."
      }
    },
    {
      label: "Urgência",
      icon: HeartPulse,
      content: {
        title: "Urgência e Emergência",
        problem:
          "Em situações críticas, operadoras negam atendimento imediato, colocando a vida do paciente em risco.",
        details: [
          "Negativa em pronto atendimento",
          "Recusa de internação urgente",
          "Demora na autorização",
          "Risco à vida do paciente"
        ],
        consequence:
          "A Justiça pode obrigar o plano a custear imediatamente o atendimento sob pena de multa."
      }
    },
    {
      label: "Reajuste",
      icon: Activity,
      content: {
        title: "Reajuste Abusivo",
        problem:
          "Mensalidades aumentam de forma abusiva, especialmente para idosos.",
        details: [
          "Aumento excessivo de mensalidade",
          "Reajuste por faixa etária ilegal",
          "Falta de transparência",
          "Violação do CDC"
        ],
        consequence:
          "É possível reduzir o valor da mensalidade e recuperar valores pagos indevidamente."
      }
    },
    {
      label: "Cancelamento",
      icon: FileText,
      content: {
        title: "Cancelamento Indevido",
        problem:
          "Planos cancelam contratos sem aviso ou justificativa válida.",
        details: [
          "Cancelamento unilateral",
          "Falta de notificação prévia",
          "Rescisão ilegal",
          "Plano coletivo cancelado sem motivo"
        ],
        consequence:
          "Você pode exigir a reativação do plano e indenização por danos."
      }
    }
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "Negativa de Cobertura",
      desc: "Recusa indevida de exames, cirurgias ou tratamentos essenciais."
    },
    {
      icon: FileText,
      title: "Cancelamento Indevido",
      desc: "Plano cancelado sem aviso prévio ou justificativa legal."
    },
    {
      icon: Activity,
      title: "Reajuste Abusivo",
      desc: "Aumentos excessivos na mensalidade, principalmente para idosos."
    },
    {
      icon: Scale,
      title: "Recusa de Procedimentos",
      desc: "Negativa de terapias, medicamentos ou internações."
    },
    {
      icon: Award,
      title: "Descumprimento Contratual",
      desc: "Plano não cumpre o que foi contratado."
    },
    {
      icon: CheckCircle,
      title: "Demora no Atendimento",
      desc: "Excesso de prazo para autorizações urgentes."
    }
  ];

  return (
    <div style={{ backgroundColor: "oklch(16% 0.065 245)" }} className="min-h-screen text-white">
      
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Ação Contra <span style={{ color: "oklch(74% 0.12 80)" }}>Plano de Saúde</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Defesa especializada contra abusos de planos de saúde. Garantimos seu direito ao tratamento médico adequado.
          </p>

          <a
            href="#tabs"
            className="px-6 py-3 rounded-lg font-semibold"
            style={{ backgroundColor: "oklch(74% 0.12 80)", color: "#000" }}
          >
            Ver Problemas
          </a>
        </div>
      </section>

      {/* TABS */}
      <section id="tabs" className="py-20 container max-w-4xl">
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition"
                style={{
                  backgroundColor: activeTab === i ? "oklch(74% 0.12 80)" : "transparent"
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
          <h2 className="text-xl font-bold mb-4">
            {tabs[activeTab].content.title}
          </h2>

          <p className="mb-4">
            <strong>Problema:</strong> {tabs[activeTab].content.problem}
          </p>

          <ul className="mb-4 list-disc ml-6">
            {tabs[activeTab].content.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p>
            <strong>Consequência:</strong> {tabs[activeTab].content.consequence}
          </p>
        </div>
      </section>

      {/* PROBLEMAS BONITO */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl mb-12">Principais Problemas</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, i) => {
              const Icon = problem.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-6 rounded-2xl border backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  style={{
                    borderColor: "oklch(25% 0.06 245)",
                    background: "linear-gradient(145deg, oklch(16% 0.065 245 / 0.7), oklch(20% 0.07 245 / 0.9))"
                  }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                    style={{
                      background: "radial-gradient(circle at top, oklch(74% 0.12 80 / 0.2), transparent 70%)"
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: "oklch(74% 0.12 80 / 0.15)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "oklch(74% 0.12 80)" }} />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                      {problem.title}
                    </h3>

                    <p className="text-sm text-gray-300">
                      {problem.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl mb-4">Precisa de tratamento urgente?</h2>
        <p className="mb-6">Podemos te ajudar imediatamente.</p>

        <a
          href="https://wa.me/5511984708027?text=Olá! Preciso de ajuda com plano de saúde."
          className="px-8 py-4 rounded-lg font-bold"
          style={{ backgroundColor: "oklch(74% 0.12 80)", color: "#000" }}
        >
          Falar no WhatsApp
        </a>
      </section>

    </div>
  );
}