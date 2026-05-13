# palestra-holding

Landing **Fortaleza Patrimonial Summit** (React + Vite + TypeScript).

## Desenvolvimento

```bash
npm install
npm run dev
```

Build de produção: `npm run build`. Testes: `npm test`. Lint: `npm run lint`.

## Docker (local)

```bash
docker compose up --build
```

Abra `http://localhost:8080`. Crie `.env` a partir de [.env.example](.env.example) com `VITE_TICKET_PURCHASE_URL` (página de compra do ingresso).

## Deploy (resumo)

- **VPS**: código em `/var/www/palestra-holding`; compose em `/opt/apps/palestra-holding` usando [deploy/docker-compose.vps.yml](deploy/docker-compose.vps.yml) como modelo (rede Traefik e `certresolver` iguais aos seus outros projetos).
- **GitHub Actions**: secrets `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`; workflow em [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (push na branch `main`).

HTML original de referência: `legacy/reference.html`.
