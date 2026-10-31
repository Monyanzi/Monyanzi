import { ArrowUpRight } from "lucide-react";

interface SiteFooterProps {
  className?: string;
}

const SiteFooter = ({ className = "" }: SiteFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t border-border bg-surface/50 pb-24 lg:pb-0 ${className}`.trim()}>
      <div className="page-container py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] border-b border-border pb-10">
          {/* Brand + Editorial Colophon */}
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2.5 mb-3">
              <span className="font-display text-lg font-medium tracking-tight text-foreground">
                AI Founder Garage
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle">
                Edition 2026
              </span>
            </div>
            <p className="text-xs leading-relaxed text-foreground-muted">
              A field manual of tested AI systems, coding agents, and operational workflows for lean teams and founders.
            </p>
          </div>

          {/* Index Directory */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">
              Directory
            </p>
            <ul className="space-y-2 text-xs font-medium text-foreground-muted">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">01 / Home Index</a>
              </li>
              <li>
                <a href="/insights" className="hover:text-foreground transition-colors">02 / Field Guides & Checklists</a>
              </li>
              <li>
                <a href="/stack" className="hover:text-foreground transition-colors">03 / 2026 Production Stack</a>
              </li>
            </ul>
          </div>

          {/* Live Systems */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">
              Live Build & Contact
            </p>
            <ul className="space-y-2 text-xs font-medium text-foreground-muted">
              <li>
                <a
                  href="https://pawza.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  PAWZA Directory (ZA)
                  <ArrowUpRight className="h-3 w-3 text-foreground-subtle" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/moses-nyanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  Moses Nyanzi on LinkedIn
                  <ArrowUpRight className="h-3 w-3 text-foreground-subtle" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Ledger */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-[11px] text-foreground-subtle">
          <span>&copy; {currentYear} Moses Nyanzi &middot; Published from South Africa</span>
          <span>Set in Newsreader, Plus Jakarta Sans &amp; JetBrains Mono</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;