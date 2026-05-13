import { useEffect } from "react";

const REVEAL_THRESHOLD = 0.12;

export function useRevealOnScroll(): void {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            window.setTimeout(() => {
              el.classList.add("visible");
            }, 80);
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: REVEAL_THRESHOLD },
    );

    reveals.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);
}
