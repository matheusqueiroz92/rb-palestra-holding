export function AgendaSection() {
  return (
    <section className="agenda-section" id="agenda">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Programacao</span>
          <h2 className="section-title">
            O que você vai <em>aprender</em>
          </h2>
          <p className="section-lead">
            Conteúdo estruturado com profundidade técnica e aplicação prática imediata.
          </p>
        </div>
        <div className="agenda-grid">
          <div className="agenda-item reveal">
            <span className="agenda-number">Módulo 01</span>
            <h3 className="agenda-title">Fundamentos Jurídicos da Holding</h3>
            <p className="agenda-desc">
              Tipos societários, enquadramento fiscal, responsabilidade dos sócios e a escolha da
              estrutura ideal conforme o perfil do grupo empresarial.
            </p>
          </div>
          <div className="agenda-item reveal">
            <span className="agenda-number">Módulo 02</span>
            <h3 className="agenda-title">Blindagem Patrimonial e Gestão de Riscos</h3>
            <p className="agenda-desc">
              Mecanismos legais de segregação de ativos, proteção contra credores e
              responsabilidades empresariais sem incidir em simulação ou fraude.
            </p>
          </div>
          <div className="agenda-item reveal">
            <span className="agenda-number">Módulo 03</span>
            <h3 className="agenda-title">Planejamento Tributário Avançado</h3>
            <p className="agenda-desc">
              Redução da carga tributária na distribuição de lucros, gestão de royalties, redução do
              ITCMD no processo sucessório e demais benefícios fiscais.
            </p>
          </div>
          <div className="agenda-item reveal">
            <span className="agenda-number">Módulo 04</span>
            <h3 className="agenda-title">Governança Corporativa e Acordo de Sócio</h3>
            <p className="agenda-desc">
              Estrutura de tomada de decisão, cláusulas essenciais do acordo de sócios, mecanismos
              de resolução de conflitos e perpetuação do controle familiar.
            </p>
          </div>
          <div className="agenda-item reveal">
            <span className="agenda-number">Módulo 05</span>
            <h3 className="agenda-title">Sucessão Patrimonial e Inventário</h3>
            <p className="agenda-desc">
              Como a holding elimina o processo de inventário, protege herdeiros e garante a
              continuidade dos negócios sem ruptura operacional.
            </p>
          </div>
          <div className="agenda-item reveal">
            <span className="agenda-number">Módulo 06</span>
            <h3 className="agenda-title">Implementação Prática: Do Zero ao Operacional</h3>
            <p className="agenda-desc">
              Roteiro completo de constituição, documentação necessária, integralização de ativos,
              registro e os erros mais comuns a evitar no processo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
