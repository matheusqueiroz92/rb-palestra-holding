/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TICKET_PURCHASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
