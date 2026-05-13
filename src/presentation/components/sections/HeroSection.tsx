import { TicketPurchaseLink } from "@/presentation/components/TicketPurchaseLink";
import { IconCalendar } from "../ui/icon-calendar";
import { IconLocation } from "../ui/icon-location";
import { IconPeople } from "../ui/icon-people";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-diagonal" />
      <div className="hero-lines" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">Fortaleza Patrimonial Summit</div>
            <div className="hero-eyebrow">Evento Exclusivo &bull; 25 de Julho</div>
            <h1 className="hero-title">
              Arquitetura
              <br />
              <span>de Holdings</span>
            </h1>
            <p className="hero-subtitle">Exclusivo para quem constrói impérios.</p>
            <p className="hero-description">
              Estratégias jurídicas e empresariais de proteção e perpetuação patrimonial
              desenvolvidas para empresários que constroem legados sólidos e duradouros.
            </p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <div className="hero-meta-icon"><IconCalendar width={20} height={20} /></div>
                <div>
                  <span className="hero-meta-label">Data</span>
                  <span className="hero-meta-value">25 de julho de 2026, sábado</span>
                </div>
              </div>
              <div className="hero-meta-item">
              <div className="hero-meta-icon"><IconLocation width={20} height={20} /></div>
                <div>
                  <span className="hero-meta-label">Local</span>
                  <span className="hero-meta-value">Auditório do Multiplace</span>
                </div>
              </div>
              <div className="hero-meta-item">
                <div className="hero-meta-icon"><IconPeople width={20} height={20} /></div>
                <div>
                  <span className="hero-meta-label">Formato</span>
                  <span className="hero-meta-value">
                    Vagas limitadas &bull; Exclusivo para empresários
                  </span>
                </div>
              </div>
            </div>
            <div className="cta-group">
              <TicketPurchaseLink className="btn-primary">Quero Garantir Minha Vaga</TicketPurchaseLink>
              <a href="#agenda" className="btn-secondary">
                Ver a Programação
              </a>
            </div>
          </div>
          <div className="hero-image-side">
            <div className="hero-image-frame">
              <div className="hero-image-inner">
                <img
                  src="/images/hero.jpg"
                  alt="Jose Ricardo de Souza Reboucas Bulhoes"
                  className="hero-img"
                />
                {/* <div className="hero-image-overlay">
                  <span className="speaker-name">José Ricardo de Souza Rebouças Bulhões</span>
                  <span className="speaker-title">
                    Advogado e Sócio-Fundador da Rebouças & Bulhões Assessoria Empresarial
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
