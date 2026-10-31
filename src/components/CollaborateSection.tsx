import { ArrowUpRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const starterPaths = [
  {
    index: "01",
    title: "Build a research & synthesis pipeline",
    detail: "Connect prompt optimization, deep web research, and NotebookLM into a 30-minute briefing workflow.",
    href: "/insights/2026-ai-power-workflow",
    cta: "Read workflow dispatch",
  },
  {
    index: "02",
    title: "Assemble a lean small-business AI toolkit",
    detail: "The 6 job-first software categories lean teams use to ship web apps and automate operations.",
    href: "/insights/the-small-business-ai-toolkit",
    cta: "Read toolkit guide",
  },
  {
    index: "03",
    title: "Audit a process before automating it",
    detail: "Run the 12-point diagnostic checklist to catch broken processes before writing a line of automation.",
    href: "/insights/the-automation-trap",
    cta: "Read diagnostic checklist",
  },
] as const;

const CollaborateSection = () => {
  return (
    <section id="start" className="relative z-10 overflow-hidden pt-14 lg:pt-20">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-md">
            <p className="label-eyebrow mb-2">Index 05 / Starting Points</p>
            <h2 className="font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Where do you want to begin?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              Choose an operational bottleneck below to open the corresponding field guide and checklist.
            </p>
          </div>

          <div className="divide-y divide-border rounded-lg border border-border bg-surface">
            {starterPaths.map(({ index, title, detail, href, cta }) => (
              <a
                key={title}
                href={href}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 p-5 sm:p-6 transition-colors duration-150 hover:bg-surface-2/50"
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
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground-subtle transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-accent" />
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