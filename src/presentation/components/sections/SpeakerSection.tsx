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
                José Ricardo de Souza
                <br />
                <em>Rebouças Bulhões</em>
              </h2>
            </div>
            <p className="speaker-bio reveal">
              Advogado e Sócio-Fundador da Rebouças & Bulhões Assessoria Empresarial, firma
              multidisciplinar especializada em Estratégia, Gestão, Governança e Negócios para
              grupos empresariais.
            </p>
            <p className="speaker-bio reveal">
              Com experiência consolidada na assessoria jurídica e empresarial a empreendedores e
              familias empresariais, José Ricardo acumula atuação em reestruturações societárias,
              planejamento sucessório, proteção patrimonial e governança corporativa em setores
              variados da economia brasileira.
            </p>
            <p className="speaker-bio reveal">
              É reconhecido por traduzir estruturas jurídicas complexas em estratégias claras,
              aplicáveis e orientadas a resultados reais para o patrimônio de seus clientes.
            </p>
            <div className="speaker-credentials reveal">
              <div className="credential">Advogado inscrito na OAB</div>
              <div className="credential">Sócio-Fundador da Rebouças & Bulhões Assessoria Empresarial</div>
              <div className="credential">Especialista em Estrututuracao de Holdings e Planejamento Patrimonial</div>
              <div className="credential">
                Assessor de grupos empresariais em reestruturações societárias e tributárias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
