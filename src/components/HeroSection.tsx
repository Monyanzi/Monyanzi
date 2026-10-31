import { articleSummaries } from "@/data/articleSummaries";
import heroGarage from "@/assets/hero-garage.jpg";
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
      className="group relative flex flex-col justify-between bg-surface p-4 text-left transition-colors duration-150 hover:bg-surface-2/70 focus-visible:outline-accent"
    >
      <div className="flex w-full items-start justify-between mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded border border-border bg-white p-1.5">
          <img src={tool.logo} alt={`${tool.name} logo`} className="h-full w-full object-contain" loading="eager" />
        </div>
        {tool.primary ? (
          <span className="font-mono text-[11px] text-foreground-muted">
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
        <picture>
          <img
            src={heroGarage}
            alt="A wooden workshop garage on a green hillside above a lake, with a builder working at a bench inside"
            width={1376}
            height={768}
            loading="eager"
            className="absolute -inset-[2%] h-[104%] w-[104%] max-w-none object-cover object-[75%_bottom]"
          />
        </picture>
        <div className="pointer-events-none absolute inset-0 bg-background/0 dark:bg-background/78 transition-colors duration-300" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[600px] w-full max-w-[1360px] flex-col justify-start px-5 pb-36 pt-28 sm:px-8 sm:pt-32 lg:min-h-[780px] lg:px-12 lg:pt-36">
          <div className="max-w-[760px]">
            <h1 className="mt-4 text-balance font-display text-[2.75rem] font-medium leading-[1.01] tracking-[-0.03em] text-foreground sm:text-[3.85rem] lg:text-[4.65rem]">
              Practical AI for small business.
            </h1>

            <p className="mt-5 max-w-[34rem] text-base sm:text-lg leading-relaxed text-foreground-muted">
              Workflows, prompts, and tools to build software and automate operations.
            </p>

            {/* Architectural Index Ledger (replaces slop pills) */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-foreground-muted tabular-nums">
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
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent"
              >
                Read guides
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="/stack"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface-2"
              >
                View stack
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Architectural 12-Tool Ledger Grid */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-[1360px] px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="overflow-hidden rounded-lg border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border bg-surface-2/50 px-4 py-2.5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg text-foreground">
                Tool stack
              </span>
              <span className="font-mono text-[11px] text-foreground-subtle">
                {toolsData.length} tools
              </span>
            </div>
            <a
              href="/stack"
              className="group inline-flex items-center gap-1.5 font-semibold text-accent hover:text-foreground transition-colors"
            >
              <span>View stack</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-border">
            {toolsData.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
