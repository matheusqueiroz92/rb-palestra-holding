import { TicketPurchaseLink } from "@/presentation/components/TicketPurchaseLink";
import { useNavScroll } from "@/presentation/hooks/useNavScroll";
import { getTicketPurchaseUrl } from "@/infrastructure/config/env";

export function NavBar() {
  const scrolled = useNavScroll(60);
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <a href={getTicketPurchaseUrl() || "#"} className="nav-logo">
          Rebouças & Bulhões
        </a>
        <TicketPurchaseLink className="nav-cta">Garantir Vaga</TicketPurchaseLink>
      </div>
    </nav>
  );
}
