export function getTicketPurchaseUrl(): string {
  return (import.meta.env.VITE_TICKET_PURCHASE_URL ?? "").trim();
}
