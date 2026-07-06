
interface SiteFooterProps {
  className?: string;
}

const SiteFooter = ({ className = "" }: SiteFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t border-[#E4E4EF] ${className}`.trim()}>
      <div className="page-container py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Brand + Bio */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                <span className="text-[9px] font-bold text-background tracking-tight leading-none">AI</span>
              </div>
              <span className="font-display text-sm font-bold text-foreground">AI</span>
            </div>
            <p className="text-[0.8125rem] leading-relaxed text-foreground-muted">
              AI tools and builds. No fluff.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-right text-[0.8125rem] text-foreground-muted">
            &copy; {currentYear} &middot; All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
