# ============================================================================
# Dockerfile - rb-palestra-holding (Landing Page Vite + React)
# Multi-stage build: Node -> Nginx Alpine.
# Imagem final: ~30 MB (so nginx + dist estatico, sem Node em runtime).
# Build context esperado: raiz do repositorio.
# ============================================================================

# ----- Stage 1: build do Vite -----
FROM node:24-alpine AS builder
WORKDIR /app

# Se o projeto usa pnpm, troque as 3 linhas abaixo por:
#   RUN npm install -g pnpm@9.12.0
#   COPY package.json pnpm-lock.yaml ./
#   RUN pnpm install --frozen-lockfile
# Se usa yarn:
#   COPY package.json yarn.lock ./
#   RUN yarn install --frozen-lockfile
COPY package.json package-lock.json* ./
RUN npm ci

# Copia o resto do codigo e builda. Vite gera output em dist/ por padrao.
COPY . .
RUN npm run build

# ----- Stage 2: nginx servindo dist/ -----
FROM nginx:alpine AS runner

# Remove a config default do nginx e poe a nossa
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o output do Vite. Padrao do Vite e dist/, mas se o projeto sobrescreveu
# em vite.config.ts (build.outDir), ajuste aqui.
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Healthcheck simples (nginx responde 200 em /)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# nginx:alpine ja tem um CMD apropriado, mas deixamos explicito por clareza.
CMD ["nginx", "-g", "daemon off;"]
