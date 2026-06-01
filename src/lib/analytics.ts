// Thin wrapper around gtag (loaded in index.html). No-ops if gtag is absent.
declare global {
  interface Window {
    gtag?: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export function track(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

/**
 * Delegated click tracking for conversion intents, so we don't have to wire
 * an onClick into every CTA. Fires GA4 events for audit CTAs and WhatsApp taps.
 */
export function initCtaTracking(): void {
  if (typeof document === "undefined") return;
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href") ?? "";
    const label = (anchor.textContent ?? "").trim().slice(0, 80);

    if (href.includes("wa.me")) {
      track("whatsapp_click", { location: window.location.pathname, label });
    } else if (href.includes("#contact")) {
      track("cta_book_audit", { location: window.location.pathname, label });
    }
  });
}
