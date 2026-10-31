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

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 -mb-px">
            {topicChips.map((chip, index) => (
              <a
                key={chip.label}
                href={chip.href}
                className={
                  index === 0
                    ? "text-sm text-foreground pb-2 border-b-2 border-foreground font-medium"
                    : "text-sm text-foreground-muted hover:text-foreground pb-2 border-b-2 border-transparent transition-colors"
                }
              >
                <span>{chip.label}</span>
                {chip.label === "All" && (
                  <span className="font-mono text-[11px] text-foreground-subtle ml-1">
                    ({articleSummaries.length})
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
          {featured && (
            <a
              href={`/insights/${featured.id}`}
              className="group block"
            >
              {featured.image && (
                <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="mt-4">
                <span className="font-mono text-[11px] text-foreground-muted">
                  {featured.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-2 text-base text-foreground-muted line-clamp-2">
                  {featured.description}
                </p>
                <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-foreground-subtle">
                  <ReadingTime id={featured.id} />
                </div>
              </div>
            </a>
          )}

          <div className="divide-y divide-border border-y border-border">
            {remainingArticles.map((article) => (
              <a
                key={article.id}
                href={`/insights/${article.id}`}
                className="group block py-5"
              >
                <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted mb-2">
                  <span>{article.category}</span>
                  <ReadingTime id={article.id} />
                </div>
                <h3 className="font-display text-xl font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
