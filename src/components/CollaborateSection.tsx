import { ArrowUpRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const starterPaths = [
  {
    index: "01",
    title: "Research & synthesis pipeline",
    detail: "Prompt optimization, web research, and NotebookLM briefing workflow.",
    href: "/insights/2026-ai-power-workflow",
    cta: "Read workflow",
  },
  {
    index: "02",
    title: "Small-business AI toolkit",
    detail: "Six software categories to ship apps and automate operations.",
    href: "/insights/the-small-business-ai-toolkit",
    cta: "Read guide",
  },
  {
    index: "03",
    title: "Audit processes before automating",
    detail: "A 12-point checklist to catch broken processes before automating.",
    href: "/insights/the-automation-trap",
    cta: "Read checklist",
  },
] as const;

const CollaborateSection = () => {
  return (
    <section id="start" className="relative z-10 overflow-hidden pt-14 lg:pt-20">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] leading-tight text-foreground sm:text-4xl">
              Where to begin
            </h2>
            <p className="mt-2 text-base leading-relaxed text-foreground-muted">
              Select a guide to get started.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {starterPaths.map(({ index, title, detail, href, cta }) => (
              <a
                key={title}
                href={href}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 p-5 sm:p-6 transition-colors duration-150 hover:bg-surface-2/40"
              >
                <span className="font-mono text-xs font-semibold text-accent tabular-nums pt-0.5">
                  {index}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-foreground-muted">
                    {detail}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-foreground group-hover:text-accent">
                    {cta}
                  </span>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground-subtle transition-colors duration-150 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter className="mt-16 lg:mt-24" />
    </section>
  );
};

export default CollaborateSection;
