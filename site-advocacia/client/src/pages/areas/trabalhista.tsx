export default function Trabalhista() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-5xl font-bold mb-6"
          style={{ color: "oklch(16% 0.065 245)" }}
        >
          Direito Trabalhista
        </h1>

        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: "oklch(40% 0.05 245)" }}
        >
          Atuamos na defesa abrangente dos direitos trabalhistas, protegendo
          trabalhadores em todas as relações laborais. Nossa experiência
          contempla as diversas modalidades de trabalho e setores econômicos.
        </p>

        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Serviços Oferecidos
          </h2>
          <ul
            className="space-y-3 text-lg"
            style={{ color: "oklch(40% 0.05 245)" }}
          >
            <li>✓ Reclamação trabalhista e ações judiciais</li>
            <li>✓ Negociação de rescisão e indenizações</li>
            <li>✓ Proteção contra demissão discriminatória</li>
            <li>✓ Cobrança de salários atrasados e verbas rescisórias</li>
            <li>✓ Estágio, aprendizagem e contratos especiais</li>
            <li>✓ Questões de jornada de trabalho e descansos</li>
            <li>✓ Acordos coletivos e negociações coletivas</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Nossa Abordagem
          </h2>
          <p
            className="text-lg mb-4 leading-relaxed"
            style={{ color: "oklch(40% 0.05 245)" }}
          >
            Cada caso recebe atenção individualizada com análise detalhada dos
            direitos envolvidos. Buscamos sempre a melhor solução, seja na esfera
            administrativa, na negociação ou na via judicial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Consultoria",
              description:
                "Orientação preventiva sobre direitos e obrigações",
            },
            {
              title: "Negociação",
              description: "Resolução amigável de conflitos trabalhistas",
            },
            {
              title: "Litigância",
              description: "Representação em processos judiciais especializados",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: "oklch(95% 0.02 245)",
                borderColor: "oklch(85% 0.02 245)",
              }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "oklch(16% 0.065 245)" }}
              >
                {item.title}
              </h3>
              <p style={{ color: "oklch(40% 0.05 245)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-8 text-center"
          style={{ backgroundColor: "oklch(95% 0.02 245)" }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Proteja seus direitos trabalhistas
          </h3>
          <p
            className="mb-6 text-lg"
            style={{ color: "oklch(40% 0.05 245)" }}
          >
            Consulte-nos para conhecer suas opções e defender seus interesses.
          </p>
          <a
            href="https://wa.me/5511984708027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              backgroundColor: "oklch(74% 0.12 80)",
              color: "oklch(16% 0.065 245)",
            }}
          >
            Falar com advogado
          </a>
        </div>
      </div>
    </div>
  );
}
