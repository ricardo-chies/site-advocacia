import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PlanoSaudePadrao() {
  return (
    <div style={{ backgroundColor: "oklch(16% 0.065 245)" }} className="min-h-screen text-white">

      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(16% 0.065 245)" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(16% 0.065 245 / 0.95) 0%, oklch(18% 0.065 245 / 0.85) 100%)",
          }}
        />

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            
            {/* BADGE DOURADO */}
            <div className="flex items-center justify-center gap-2 mb-6">
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

            <h1 className="text-6xl font-bold mb-6">
              Direito Plano de <span style={{ color: "oklch(74% 0.12 80)" }}>Saúde</span>
            </h1>

            <p className="text-lg mb-8" style={{ color: "oklch(80% 0.03 245)" }}>
              Defesa contra abusos de operadoras e negativas indevidas de cobertura.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
            >
              Falar com Advogado
              <ArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 1 (MAIS CLARO) */}
      <section className="py-20" style={{ backgroundColor: "oklch(18% 0.065 245)" }}>
        <div className="container text-center">
          <h2 className="text-4xl mb-6">Problemas Comuns</h2>
        </div>
      </section>

      {/* SEÇÃO 2 (MAIS ESCURO) */}
      <section className="py-20" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
        <div className="container grid md:grid-cols-3 gap-6">

          {/* CARD PADRÃO */}
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer"
              style={{
                borderColor: "oklch(25% 0.06 245)",
                backgroundColor: "oklch(18% 0.065 245)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "oklch(74% 0.12 80)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "oklch(25% 0.06 245)";
              }}
            >
              <h3 className="text-xl mb-2" style={{ color: "oklch(74% 0.12 80)" }}>
                Negativa de Tratamento
              </h3>

              <p style={{ color: "oklch(75% 0.02 245)" }}>
                Plano recusou cirurgia, exame ou medicamento essencial.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20" style={{ backgroundColor: "oklch(18% 0.065 245)" }}>
        <div className="container text-center">
          <h2 className="text-4xl mb-6">Precisa de ajuda?</h2>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
          >
            Agendar Consulta
            <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}