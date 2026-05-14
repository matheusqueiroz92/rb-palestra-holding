import { TicketPurchaseLink } from "@/presentation/components/TicketPurchaseLink";

export function InvestmentSection() {
  return (
    <section className="investment-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Investimento</span>
          <h2 className="section-title">
            Seu acesso ao
            <br />
            <em>Summit</em>
          </h2>
        </div>
        <div className="investment-card reveal">
          <span className="investment-tag">Inscrição Individual</span>
          <div className="investment-price">
            <span>R$</span> 590
          </div>
          <p className="investment-sub">Pagamento único. Sem taxas adicionais.</p>
          <div className="investment-includes">
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Acesso integral ao evento no Auditório do Multiplace</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Material didático exclusivo elaborado pela equipe da Rebouças & Bulhões</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Coffee break e almoço em ambiente de networking seleto</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Certificado de participação</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Sessão de perguntas e respostas direta com o palestrante</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Acesso ao grupo exclusivo de participantes para networking pós-evento</span>
            </div>
          </div>
          <TicketPurchaseLink
            className="btn-primary"
            style={{ display: "block", textAlign: "center" }}
          >
            Garantir Minha Vaga Agora
          </TicketPurchaseLink>
          <div className="investment-warning">
            Vagas limitadas ao auditório. Não há garantia de novas edições em 2026.
          </div>
        </div>
      </div>
    </section>
  );
}
