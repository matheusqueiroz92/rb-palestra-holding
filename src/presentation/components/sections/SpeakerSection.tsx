export function SpeakerSection() {
  return (
    <section className="speaker-section">
      <div className="container">
        <div className="speaker-grid">
          <div className="speaker-photo-wrap reveal">
            <div className="speaker-photo-border" />
            <div className="speaker-photo-inner">
              <img src="/images/image-2.jpg" alt="Jose Ricardo de Souza Reboucas Bulhoes" />
            </div>
          </div>
          <div className="speaker-info">
            <div className="section-header reveal">
              <span className="section-tag">Palestrante</span>
              <h2 className="section-title">
                Jose Ricardo de Souza
                <br />
                <em>Reboucas Bulhoes</em>
              </h2>
            </div>
            <p className="speaker-bio reveal">
              Advogado e Socio-Fundador da Reboucas & Bulhoes Assessoria Empresarial, firma
              multidisciplinar especializada em Estrategia, Gestao, Governanca e Negocios para
              grupos empresariais.
            </p>
            <p className="speaker-bio reveal">
              Com experiencia consolidada na assessoria juridica e empresarial a empreendedores e
              familias empresariais, Jose Ricardo acumula atuacao em reestruturacoes societarias,
              planejamento sucessorio, protecao patrimonial e governanca corporativa em setores
              variados da economia brasileira.
            </p>
            <p className="speaker-bio reveal">
              E reconhecido por traduzir estruturas juridicas complexas em estrategias claras,
              aplicaveis e orientadas a resultados reais para o patriomio de seus clientes.
            </p>
            <div className="speaker-credentials reveal">
              <div className="credential">Advogado inscrito na OAB</div>
              <div className="credential">Socio-Fundador da Reboucas & Bulhoes Assessoria Empresarial</div>
              <div className="credential">Especialista em Estrututuracao de Holdings e Planejamento Patrimonial</div>
              <div className="credential">
                Assessor de grupos empresariais em reestruturacoes societarias e tributarias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
