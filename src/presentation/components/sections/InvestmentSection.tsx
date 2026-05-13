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
          <span className="investment-tag">Inscricao Individual</span>
          <div className="investment-price">
            <span>R$</span> 590
          </div>
          <p className="investment-sub">Pagamento unico. Sem taxas adicionais.</p>
          <div className="investment-includes">
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Acesso integral ao evento no Auditorio do Multiplace</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Material didatico exclusivo elaborado pela equipe da Reboucas & Bulhoes</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Coffee break e almoco em ambiente de networking seleto</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Certificado de participacao</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Sessao de perguntas e respostas direta com o palestrante</span>
            </div>
            <div className="include-item">
              <span className="include-check">&#10003;</span>
              <span>Acesso ao grupo exclusivo de participantes para networking pos-evento</span>
            </div>
          </div>
          <TicketPurchaseLink
            className="btn-primary"
            style={{ display: "block", textAlign: "center" }}
          >
            Garantir Minha Vaga Agora
          </TicketPurchaseLink>
          <div className="investment-warning">
            Vagas limitadas ao auditorio. Nao ha garantia de novas edicoes em 2025.
          </div>
        </div>
      </div>
    </section>
  );
}
