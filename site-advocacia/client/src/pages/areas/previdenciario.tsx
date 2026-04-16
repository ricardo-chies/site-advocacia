export default function Previdenciario() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-5xl font-bold mb-6"
          style={{ color: "oklch(16% 0.065 245)" }}
        >
          Direito Previdenciário
        </h1>

        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: "oklch(40% 0.05 245)" }}
        >
          Oferecemos consultoria completa em direito previdenciário,
          garantindo o acesso aos seus direitos perante o INSS e sistemas
          previdenciários. Atuamos em processos de concessão, manutenção e
          revisão de benefícios.
        </p>

        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Benefícios que Abordamos
          </h2>
          <ul
            className="space-y-3 text-lg"
            style={{ color: "oklch(40% 0.05 245)" }}
          >
            <li>✓ Auxílio-doença e Aposentadoria por Invalidez</li>
            <li>✓ Auxílio-acidente</li>
            <li>✓ Aposentadoria por Tempo de Contribuição</li>
            <li>✓ Aposentadoria por Idade</li>
            <li>✓ Pensão por Morte</li>
            <li>✓ Auxílio-reclusão</li>
            <li>✓ Revisão e majoração de benefícios</li>
            <li>✓ Restabelecimento de beneficiários</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Etapas do Processo
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Análise e Consultoria",
                description:
                  "Avaliação detalhada do seu caso e direitos previdenciários",
              },
              {
                step: "2",
                title: "Documentação",
                description:
                  "Preparação e organização de toda documentação necessária",
              },
              {
                step: "3",
                title: "Protocolo no INSS",
                description:
                  "Apresentação do pedido administrativo ao Instituto Nacional",
              },
              {
                step: "4",
                title: "Acompanhamento",
                description:
                  "Monitoramento do processo e recurso se necessário",
              },
              {
                step: "5",
                title: "Ação Judicial",
                description:
                  "Judicialização se recusado o benefício administrativamente",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "oklch(74% 0.12 80)" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ color: "oklch(16% 0.065 245)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "oklch(40% 0.05 245)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Por que contratar um advogado?
          </h2>
          <p
            className="text-lg mb-4 leading-relaxed"
            style={{ color: "oklch(40% 0.05 245)" }}
          >
            O processo previdenciário é complexo e requer conhecimento específico.
            Um advogado especializado aumenta significativamente as chances de
            sucesso e garante que todos os seus direitos sejam protegidos.
          </p>
        </div>

        <div
          className="rounded-lg p-8 text-center"
          style={{ backgroundColor: "oklch(95% 0.02 245)" }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "oklch(16% 0.065 245)" }}
          >
            Garanta seus direitos previdenciários
          </h3>
          <p
            className="mb-6 text-lg"
            style={{ color: "oklch(40% 0.05 245)" }}
          >
            Entre em contato para analisarmos seu caso gratuitamente.
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
