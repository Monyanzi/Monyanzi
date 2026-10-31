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
    <section id="start" className="relative z-10 overflow-hidden pt-16 lg:pt-24">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Where to begin
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-foreground-muted">
              Select a guide to get started.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {starterPaths.map(({ index, title, detail, href, cta }) => (
              <a
                key={title}
                href={href}
                className="glass-card group grid grid-cols-[auto_1fr_auto] items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover active:scale-[0.99]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-xs font-semibold text-accent tabular-nums">
                  {index}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground-muted">
                    {detail}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-foreground group-hover:text-accent transition-colors">
                    {cta}
                  </span>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground-subtle transition-all duration-150 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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