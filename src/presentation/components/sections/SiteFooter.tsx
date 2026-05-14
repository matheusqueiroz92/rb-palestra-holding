export function SiteFooter() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">Rebouças & Bulhões</div>
        <p className="footer-tagline">
          Assessoria Empresarial &bull; Estratégia, Gestão, Governança e Negócios
        </p>
        <div className="footer-links">
          <a href="mailto:reboucasebulhoesassessoria@gmail.com" className="footer-link">
            reboucasebulhoesassessoria@gmail.com
          </a>
          <a href="https://reboucasbulhoes.com" className="footer-link" target="_blank" rel="noreferrer">
            reboucasbulhoes.com
          </a>
        </div>
        <p className="footer-copy">
          &copy; {year} Rebouças & Bulhões Assessoria Empresarial. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
