import { ArrowUpRight } from "lucide-react";

interface SiteFooterProps {
  className?: string;
}

const SiteFooter = ({ className = "" }: SiteFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t border-border/80 bg-surface/60 pb-24 lg:pb-0 backdrop-blur-xl ${className}`.trim()}>
      <div className="page-container py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] border-b border-border/60 pb-10">
          {/* Brand + Editorial Colophon */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="glass-pill inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground-subtle font-semibold">
                Edition 2026
              </span>
            </div>
            <p className="text-xs leading-relaxed text-foreground-muted">
              AI systems, coding agents, and workflows for lean teams.
            </p>
          </div>

          {/* Index Directory */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">
              Directory
            </p>
            <ul className="space-y-2 text-xs font-medium text-foreground-muted">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">01 / Index</a>
              </li>
              <li>
                <a href="/insights" className="hover:text-foreground transition-colors">02 / Guides</a>
              </li>
              <li>
                <a href="/stack" className="hover:text-foreground transition-colors">03 / Stack</a>
              </li>
            </ul>
          </div>

          {/* Live Systems */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">
              Links
            </p>
            <ul className="space-y-2 text-xs font-medium text-foreground-muted">
              <li>
                <a
                  href="https://pawza.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  PAWZA
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
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 text-foreground-subtle" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Ledger */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-[11px] text-foreground-subtle">
          <span>&copy; {currentYear} Moses Nyanzi &middot; South Africa</span>
          <span>Instrument Sans &middot; JetBrains Mono</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
