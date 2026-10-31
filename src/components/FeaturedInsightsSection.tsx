import { articleSummaries, READING_TIMES } from "@/data/articleSummaries";
import { ArrowRight } from "lucide-react";

const featuredArticles = articleSummaries.slice(0, 3);

const topicChips = [
  { label: "All", href: "/insights" },
  { label: "Strategy", href: "/insights?cat=strategy" },
  { label: "Build", href: "/insights?cat=build" },
  { label: "Automate", href: "/insights?cat=automate" },
  { label: "Code", href: "/insights?cat=code" },
  { label: "Research", href: "/insights?cat=research" },
];

const ReadingTime = ({ id }: { id: string }) => {
  const minutes = READING_TIMES[id];
  if (!minutes) return null;

  return (
    <span className="font-mono text-[11px] tabular-nums text-foreground-subtle">
      {minutes} min read
    </span>
  );
};

const FeaturedInsightsSection = () => {
  const [first, second, third] = featuredArticles;

  return (
    <section id="articles" className="relative z-10 border-b border-border bg-background py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 border-b border-border/60 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-foreground">
              Playbooks and checklists
            </h2>
          </div>

          <div className="glass-pill flex flex-wrap items-center gap-1.5 rounded-full p-1.5 border border-border/80">
            {topicChips.map((chip, index) => (
              <a
                key={chip.label}
                href={chip.href}
                className={
                  index === 0
                    ? "rounded-full bg-accent text-accent-foreground font-medium px-4 py-1.5 text-xs shadow-sm shadow-accent/25 transition-all"
                    : "rounded-full text-foreground-muted hover:text-foreground hover:bg-surface-2/80 px-3.5 py-1.5 text-xs font-medium transition-colors"
                }
              >
                <span>{chip.label}</span>
                {chip.label === "All" && (
                  <span className="font-mono text-[10px] text-accent-foreground/80 ml-1">
                    ({articleSummaries.length})
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Apple-grade Balanced Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          {/* Bento Card 1: Major Spotlight (7 columns) */}
          {first && (
            <a
              href={`/insights/${first.id}`}
              className="glass-card group flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover lg:col-span-7"
            >
              <div>
                {first.image && (
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border/80 bg-surface-2 shadow-xs mb-5">
                    <img
                      src={first.image}
                      alt={first.title}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="inline-flex items-center rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] font-medium text-foreground-muted border border-border/60">
                    {first.category}
                  </span>
                  <ReadingTime id={first.id} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                  {first.title}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-foreground-muted">
                  {first.description}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 font-mono text-xs font-medium text-accent">
                <span>Read guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
              </div>
            </a>
          )}

          {/* Bento Column 2: Secondary Features (5 columns) */}
          <div className="flex flex-col gap-6 sm:gap-7 lg:col-span-5 justify-between">
            {second && (
              <a
                href={`/insights/${second.id}`}
                className="glass-card group flex flex-col sm:grid sm:grid-cols-[145px_1fr] gap-4 sm:gap-5 items-center rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover flex-1"
              >
                {second.image && (
                  <div className="aspect-[4/3] w-full sm:w-[145px] shrink-0 overflow-hidden rounded-2xl border border-border/80 bg-surface-2 shadow-xs">
                    <img
                      src={second.image}
                      alt={second.title}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between h-full min-w-0 w-full">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted mb-2">
                      <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted border border-border/60">
                        {second.category}
                      </span>
                      <ReadingTime id={second.id} />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-medium leading-snug text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {second.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted line-clamp-2">
                      {second.description}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 font-mono text-xs font-medium text-accent">
                    <span>Read checklist</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            )}

            {third && (
              <a
                href={`/insights/${third.id}`}
                className="glass-card group flex flex-col sm:grid sm:grid-cols-[145px_1fr] gap-4 sm:gap-5 items-center rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover flex-1"
              >
                {third.image && (
                  <div className="aspect-[4/3] w-full sm:w-[145px] shrink-0 overflow-hidden rounded-2xl border border-border/80 bg-surface-2 shadow-xs">
                    <img
                      src={third.image}
                      alt={third.title}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between h-full min-w-0 w-full">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted mb-2">
                      <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted border border-border/60">
                        {third.category}
                      </span>
                      <ReadingTime id={third.id} />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-medium leading-snug text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {third.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted line-clamp-2">
                      {third.description}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 font-mono text-xs font-medium text-accent">
                    <span>Read workflow</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;