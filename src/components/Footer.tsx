import Wordmark from "./ui/Wordmark";
import { CONTACT, NAV_LINKS } from "../data/content";
import { SERVICE_PAGES } from "../data/servicePages";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-cream/8 bg-ink-deep/60 py-14">
      <div className="container-bl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs font-display text-lg italic text-cream-dim">
              Smart systems. Honest work. Real results.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/in/xerxesduane"
                target="_blank"
                rel="noopener"
                aria-label="Xerxes Magdaluyo on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream-dim transition-colors hover:border-gold/50 hover:text-gold"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-dark">
              Studio
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream-dim transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-dark">
              Services in Dubai
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_PAGES.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/${p.slug}`}
                    className="text-cream-dim transition-colors hover:text-gold"
                  >
                    {p.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-dark">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="text-cream-dim transition-colors hover:text-gold"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-cream-dim transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-muted">{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/8 pt-6 text-xs text-muted-dark sm:flex-row">
          <span>© {new Date().getFullYear()} Threshold Works. Built with care in Dubai.</span>
          <span>Quietly trusted since 2019.</span>
        </div>
      </div>
    </footer>
  );
}
