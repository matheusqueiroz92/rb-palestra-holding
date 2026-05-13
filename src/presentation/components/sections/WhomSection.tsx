import { IconCompany } from "../ui/icon-company";
import { IconGrowth } from "../ui/icon-growth";
import { IconHeritage } from "../ui/icon-heritage";
import { IconInvestor } from "../ui/icon-investor";
import { IconPartner } from "../ui/icon-partner";
import { IconProfessional } from "../ui/icon-professional";

export function WhomSection() {
  return (
    <section className="whom-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Publico-Alvo</span>
          <h2 className="section-title">
            Este evento é <em>para você</em> se...
          </h2>
        </div>
        <div className="whom-grid">
          <div className="whom-card reveal">
            <div className="whom-icon"><IconCompany width={30} height={30} /></div>
            <h3 className="whom-title">Empresário com Grupo Consolidado</h3>
            <p className="whom-desc">
              Você controla uma ou mais empresas operacionais e precisa organizar a estrutura
              societária de forma eficiente e segura.
            </p>
          </div>
          <div className="whom-card reveal">
            <div className="whom-icon"><IconInvestor width={30} height={30} /></div>
            <h3 className="whom-title">Investidor Imobiliário</h3>
            <p className="whom-desc">
              Seu patrimônio está concentrado em imóveis e você busca reduzir o custo tributário
              na venda, locação e transferência para herdeiros.
            </p>
          </div>
          <div className="whom-card reveal">
            <div className="whom-icon"><IconPartner width={30} height={30} /></div>
            <h3 className="whom-title">Sócio em Discussão Societária</h3>
            <p className="whom-desc">
              Você enfrenta ou antecipa conflitos entre sócios e precisa de instrumentos jurídicos
              que protejam sua posição e seu patrimônio pessoal.
            </p>
          </div>
          <div className="whom-card reveal">
            <div className="whom-icon"><IconProfessional width={30} height={30} /></div>
            <h3 className="whom-title">Profissional Liberal de Alto Faturamento</h3>
            <p className="whom-desc">
              Médico, dentista, advogado ou consultor que pretende reduzir carga tributária e
              organizar a sucessão do patrimônio acumulado.
            </p>
          </div>
          <div className="whom-card reveal">
            <div className="whom-icon"><IconGrowth width={30} height={30} /></div>
            <h3 className="whom-title">Empreendedor em Fase de Crescimento</h3>
            <p className="whom-desc">
              Você está em expansão acelerada e quer estruturar corretamente antes que o volume de
              ativos torne a reorganização mais complexa e custosa.
            </p>
          </div>
          <div className="whom-card reveal">
            <div className="whom-icon"><IconHeritage width={30} height={30} /></div>
            <h3 className="whom-title">Herdeiro em Processo de Sucessao</h3>
            <p className="whom-desc">
              Você está estruturando a transição do controle empresarial para a próxima geração e
              precisa fazê-lo com segurança jurídica e eficiência fiscal.
            </p>
          </div>
        </div>
        <div className="notfor-box reveal">
          <span className="notfor-label">Importante</span>
          <p className="notfor-text">
            Este evento não é indicado para quem busca soluções paliativas ou estratégias de risco
            jurídico elevado. O conteúdo é voltado para empresários comprometidos com a legalização
            e a perenidade patrimonial.
          </p>
        </div>
      </div>
    </section>
  );
}
