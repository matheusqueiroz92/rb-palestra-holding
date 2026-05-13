import type { CSSProperties, ReactNode } from "react";
import { getTicketPurchaseUrl } from "@/infrastructure/config/env";

type TicketPurchaseLinkProps = {
  className: string;
  children: ReactNode;
  style?: CSSProperties;
};

export function TicketPurchaseLink({ className, children, style }: TicketPurchaseLinkProps) {
  const href = getTicketPurchaseUrl();
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href || "#"}
      className={className}
      style={style}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
