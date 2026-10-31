import { articleSummaries } from "@/data/articleSummaries";
import heroGarage from "@/assets/hero-garage.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { toolsData, type ToolItem } from "@/data/tools";

const ToolCard = ({ tool, index }: { tool: ToolItem; index: number }) => {
  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      title={tool.notes}
      aria-label={`Open ${tool.name}`}
      className="group relative flex flex-col justify-between bg-surface p-4 text-left transition-colors duration-150 hover:bg-surface-2/70 focus-visible:outline-accent"
    >
      <div className="flex w-full items-start justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded border border-border bg-white p-1.5">
            <img src={tool.logo} alt={`${tool.name} logo`} className="h-full w-full object-contain" loading="eager" />
          </div>
          <span className="font-mono text-[10px] text-foreground-subtle tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {tool.primary ? (
          <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
            Core
          </span>
        ) : (
          <ArrowUpRight className="h-3.5 w-3.5 text-foreground-subtle opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
        )}
      </div>
      <div>
        <span className="block text-sm font-semibold leading-tight text-foreground group-hover:text-accent transition-colors">
          {tool.name}
        </span>
        <span className="mt-1 block text-xs leading-relaxed text-foreground-muted line-clamp-2">
          {tool.description}
        </span>
      </div>
    </a>
  );
};

const HeroSection = () => {
  const articleCount = articleSummaries.length;
  const coreToolCount = toolsData.filter((t) => t.primary).length;
  const specialistCount = toolsData.length - coreToolCount;

  return (
    <section className="relative border-b border-border">
      <div className="relative overflow-hidden">
        <img
          src={heroGarage}
          alt="A wooden workshop garage on a green hillside above a lake, with a builder working at a bench inside"
          width={1376}
          height={768}
          fetchPriority="high"
          className="absolute -inset-[2%] h-[104%] w-[104%] max-w-none object-cover object-[75%_bottom]"
        />
        <div className="pointer-events-none absolute inset-0 bg-background/0 dark:bg-background/78 transition-colors duration-300" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[600px] w-full max-w-[1360px] flex-col justify-start px-5 pb-36 pt-28 sm:px-8 sm:pt-32 lg:min-h-[780px] lg:px-12 lg:pt-36">
          <div className="max-w-[760px]">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-muted">
                Field Manual &middot; Small Business AI &amp; Automation
              </p>
            </div>

            <h1 className="mt-4 text-balance font-display text-[2.75rem] font-medium leading-[1.01] tracking-[-0.03em] text-foreground sm:text-[3.85rem] lg:text-[4.65rem]">
              Practical AI systems for small business.
            </h1>

            <p className="mt-5 max-w-[34rem] text-base sm:text-lg leading-relaxed text-foreground-muted">
              Tested workflows, working prompts, and production tools to build software and automate operations without a large engineering team.
            </p>

            {/* Architectural Index Ledger (replaces slop pills) */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-foreground/15 bg-surface/85 px-4 py-2 font-mono text-[11px] text-foreground-muted backdrop-blur-sm tabular-nums">
              <span>
                <strong className="font-semibold text-foreground">{String(coreToolCount).padStart(2, "0")}</strong> Core Models
              </span>
              <span className="text-foreground/25">/</span>
              <span>
                <strong className="font-semibold text-foreground">{String(specialistCount).padStart(2, "0")}</strong> Specialist Tools
              </span>
              <span className="text-foreground/25">/</span>
              <span>
                <strong className="font-semibold text-foreground">{String(articleCount).padStart(2, "0")}</strong> Field Guides
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="/insights"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-xs font-semibold uppercase tracking-wider text-background transition-colors duration-150 hover:bg-accent"
              >
                Read Field Guides
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="/stack"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-foreground/20 bg-surface/90 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors duration-150 hover:bg-surface-2"
              >
                Inspect 2026 Stack
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Architectural 12-Tool Ledger Grid */}
      <div className="relative z-10 mx-auto -mt-28 w-full max-w-[1360px] px-5 pb-12 sm:px-8 lg:-mt-32 lg:px-12 lg:pb-16">
        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-card">
          <div className="flex items-center justify-between border-b border-border bg-surface-2/50 px-4 py-2.5 font-mono text-[11px]">
            <span className="uppercase tracking-[0.1em] text-foreground-muted">
              Index 01 &mdash; Production Tool Stack (12 Tested Systems)
            </span>
            <a
              href="/stack"
              className="group inline-flex items-center gap-1.5 font-semibold text-accent hover:text-foreground transition-colors"
            >
              <span>Full stack notes</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-border">
            {toolsData.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
