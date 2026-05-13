import { TicketPurchaseLink } from "@/presentation/components/TicketPurchaseLink";

export function FloatingCta() {
  return (
    <div className="floating-cta" id="floatingCta">
      <TicketPurchaseLink className="floating-btn">
        <span className="floating-dot" />
        Garantir Vaga &bull; 25 de Julho
      </TicketPurchaseLink>
    </div>
  );
}
