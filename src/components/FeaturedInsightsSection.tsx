import { articleSummaries, READING_TIMES } from "@/data/articleSummaries";

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
  const [featured] = featuredArticles;
  const remainingArticles = featuredArticles.slice(1);

  return (
    <section id="articles" className="relative z-10 border-b border-border bg-background py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 border-b border-border lg:flex-row lg:items-end lg:justify-between">
          <div className="pb-4">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-foreground">
              Playbooks and checklists
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-border/80 bg-surface-2/60 p-1">
            {topicChips.map((chip, index) => (
              <a
                key={chip.label}
                href={chip.href}
                className={
                  index === 0
                    ? "rounded-full bg-surface text-foreground font-semibold px-3.5 py-1 text-xs shadow-sm"
                    : "rounded-full text-foreground-muted hover:text-foreground px-3.5 py-1 text-xs font-medium transition-colors"
                }
              >
                <span>{chip.label}</span>
                {chip.label === "All" && (
                  <span className="font-mono text-[10px] text-foreground-subtle ml-1">
                    ({articleSummaries.length})
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] items-start">
          {featured && (
            <a
              href={`/insights/${featured.id}`}
              className="group block rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-craft"
            >
              {featured.image && (
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-black/5 bg-surface-2 shadow-inner">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                    {featured.category}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-foreground-subtle">
                    <ReadingTime id={featured.id} />
                  </div>
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted line-clamp-2">
                  {featured.description}
                </p>
              </div>
            </a>
          )}

          <div className="flex flex-col gap-4">
            {remainingArticles.map((article) => (
              <a
                key={article.id}
                href={`/insights/${article.id}`}
                className="group block rounded-xl border border-border/80 bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-craft"
              >
                <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted mb-2.5">
                  <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                    {article.category}
                  </span>
                  <ReadingTime id={article.id} />
                </div>
                <h3 className="font-display text-xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted line-clamp-2">
                  {article.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
