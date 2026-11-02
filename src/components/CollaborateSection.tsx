import { ArrowRight, ArrowUpRight, Sparkles, Globe, Headphones, Layers, Code2, Cpu, ShieldCheck, GitBranch, CheckCircle2 } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const starterPaths = [
  {
    index: "01",
    badge: "3-Stage Pipeline",
    title: "Research & synthesis pipeline",
    detail: "Prompt optimisation, web research, and NotebookLM briefing workflow.",
    href: "/insights/2026-ai-power-workflow",
    cta: "Open workflow",
    steps: [
      { icon: Sparkles, label: "Prompt" },
      { icon: Globe, label: "Search" },
      { icon: Headphones, label: "Audio" },
    ],
  },
  {
    index: "02",
    badge: "6 Categories",
    title: "Small-business AI toolkit",
    detail: "Six software categories to ship apps and automate operations.",
    href: "/insights/the-small-business-ai-toolkit",
    cta: "Open toolkit",
    steps: [
      { icon: Layers, label: "Build" },
      { icon: Code2, label: "Code" },
      { icon: Cpu, label: "Automate" },
    ],
  },
  {
    index: "03",
    badge: "12-Point Audit",
    title: "Audit processes before automating",
    detail: "A 12-point checklist to catch broken processes before automating.",
    href: "/insights/the-automation-trap",
    cta: "Run checklist",
    steps: [
      { icon: ShieldCheck, label: "Scope" },
      { icon: GitBranch, label: "Process" },
      { icon: CheckCircle2, label: "Ship" },
    ],
  },
] as const;

const CollaborateSection = () => {
  return (
    <section id="start" className="relative z-10 overflow-hidden pt-16 lg:pt-24">
      <div className="page-container">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Where to begin
            </h2>
            <p className="mt-2 text-base sm:text-lg leading-relaxed text-foreground-muted">
              Three architectural blueprints to move from idea to production.
            </p>
          </div>
          <a
            href="/insights"
            className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:text-foreground transition-colors"
          >
            <span>Browse all 9 guides</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {starterPaths.map(({ index, badge, title, detail, href, cta, steps }) => (
            <a
              key={title}
              href={href}
              className="glass-card group flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover active:scale-[0.99]"
            >
              <div>
                {/* Header index & badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 font-mono text-xs font-semibold text-accent tabular-nums">
                    {index}
                  </span>
                  <span className="glass-pill rounded-full px-3 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                    {badge}
                  </span>
                </div>

                {/* Multi-Icon Visual System Blueprint */}
                <div className="mb-6 flex items-center justify-between rounded-2xl border border-border/70 bg-surface-2/60 p-3">
                  {steps.map(({ icon: StepIcon, label }, idx) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface text-accent shadow-xs border border-border/60">
                          <StepIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-mono text-[10px] font-medium text-foreground">
                          {label}
                        </span>
                      </div>
                      {idx < steps.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-foreground-subtle ml-1" />
                      )}
                    </div>
                  ))}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-foreground-muted">
                  {detail}
                </p>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-border/50 pt-4 font-mono text-xs font-medium text-foreground group-hover:text-accent transition-colors">
                <span>{cta}</span>
                <ArrowUpRight className="h-4 w-4 text-foreground-subtle transition-all duration-150 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <SiteFooter className="mt-16 lg:mt-24" />
    </section>
  );
};

export default CollaborateSection;
