import { articleSummaries } from "@/data/articleSummaries";
import techStackHero from "@/assets/insights/tech-stack/tech-stack-hero.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { toolsData, type ToolItem } from "@/data/tools";

const ToolCard = ({ tool }: { tool: ToolItem }) => {
  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      title={tool.notes}
      aria-label={`Open ${tool.name}`}
      className="glass-card group relative flex flex-col justify-between rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover active:scale-[0.985] focus-visible:outline-accent"
    >
      <div>
        <div className="flex w-full items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/6 bg-white p-2.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <img src={tool.logo} alt={`${tool.name} logo`} className="h-full w-full object-contain" loading="eager" />
          </div>
          <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
            Core
          </span>
        </div>
        <span className="block font-display text-xl font-medium leading-tight text-foreground group-hover:text-accent transition-colors">
          {tool.name}
        </span>
        <span className="mt-2 block text-xs sm:text-sm leading-relaxed text-foreground-muted">
          {tool.description}
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-3.5 font-mono text-[11px] text-foreground-subtle">
        <span>Daily stack</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
};

const HeroSection = () => {
  const articleCount = articleSummaries.length;
  const coreTools = toolsData.filter((t) => t.primary);
  const coreToolCount = coreTools.length;
  const specialistCount = toolsData.length - coreToolCount;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      {/* Studio Radial Ambient Illumination */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,hsl(var(--accent)/0.09),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7">
            <h1 className="text-balance font-display text-[2.75rem] font-medium leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[3.85rem] lg:text-[4.65rem]">
              Practical AI for small business.
            </h1>

            <p className="mt-5 max-w-[34rem] text-base sm:text-lg leading-relaxed text-foreground-muted">
              Workflows, prompts, and tools to build software and automate operations.
            </p>

            {/* Architectural Index Ledger */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-border/80 bg-surface/80 px-4 py-1.5 font-mono text-[11px] text-foreground-muted backdrop-blur-sm tabular-nums shadow-sm">
              <span>
                <strong className="font-semibold text-foreground">{String(coreToolCount).padStart(2, "0")}</strong> Core
              </span>
              <span className="text-foreground/25">/</span>
              <span>
                <strong className="font-semibold text-foreground">{String(specialistCount).padStart(2, "0")}</strong> Specialist
              </span>
              <span className="text-foreground/25">/</span>
              <span>
                <strong className="font-semibold text-foreground">{String(articleCount).padStart(2, "0")}</strong> Guides
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="/insights"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-keycap transition-all duration-200 hover:bg-accent hover:shadow-[0_4px_20px_rgba(0,113,227,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Read guides
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="/stack"
                className="glass-card inline-flex min-h-[46px] items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-2 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                View stack
              </a>
            </div>
          </div>

          {/* Right Column: Apple Studio Precision Engineering Workbench */}
          <div className="lg:col-span-5">
            <div className="glass-panel group relative overflow-hidden rounded-3xl p-3 sm:p-4 shadow-craft transition-all duration-500 hover:shadow-craft-hover">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5 bg-surface-2">
                <img
                  src={techStackHero}
                  alt="Precision engineering and drafting workbench with calibrated tools, dials, and instruments"
                  width={1376}
                  height={768}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              <div className="mt-3 flex items-center justify-between px-2 font-mono text-[11px] text-foreground-muted">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-medium text-foreground">Workbench</span>
                </div>
                <span className="text-foreground-subtle">Precision instruments</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Tools Stack Tray */}
        <div className="mt-14 sm:mt-18">
          <div className="glass-panel overflow-hidden rounded-3xl p-5 sm:p-8">
            <div className="flex items-center justify-between border-b border-border/60 pb-5 mb-6">
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-2xl font-medium tracking-tight text-foreground">
                  Tool stack
                </span>
                <span className="font-mono text-xs text-foreground-subtle font-medium">
                  3 core tools
                </span>
              </div>
              <a
                href="/stack"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-foreground transition-colors"
              >
                <span>View stack</span>
                <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {coreTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;