import { ArrowRight } from "lucide-react";
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

const ReadingTime = ({ id, tone = "dark" }: { id: string; tone?: "light" | "dark" }) => {
  const minutes = READING_TIMES[id];
  if (!minutes) return null;

  return (
    <span className={`font-mono text-[11px] tabular-nums ${tone === "light" ? "text-white/75" : "text-foreground-subtle"}`}>
      {minutes} min read
    </span>
  );
};

const FeaturedInsightsSection = () => {
  const [featured, textArticle, mediaArticle] = featuredArticles;

  return (
    <section id="articles" className="relative z-10 border-b border-border bg-background py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-eyebrow mb-2">Index 02 / Field Guides</p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Practical Playbooks &amp; Checklists
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {topicChips.map((chip, index) => (
              <a
                key={chip.label}
                href={chip.href}
                className={`inline-flex items-center rounded px-3 py-1 font-mono text-[11px] transition-colors duration-150 ${
                  index === 0
                    ? "bg-foreground text-background"
                    : "border border-border bg-surface text-foreground-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {chip.label}
              </a>
            ))}
            <a
              href="/insights"
              className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-accent hover:text-foreground transition-colors"
            >
              <span>All ({articleSummaries.length})</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="concept-article-grid">
          {featured && (
            <a
              href={`/insights/${featured.id}`}
              className="group block overflow-hidden rounded-lg border border-border bg-foreground"
            >
              <div className="relative flex min-h-[340px] items-end overflow-hidden lg:min-h-[390px]">
                {featured.image && (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[62%_center] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.86))]" />
                <div className="relative z-10 p-6 sm:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[10px] font-semibold text-white/90 border border-white/25 bg-black/30 px-2 py-0.5 rounded-sm">
                      {featured.category}
                    </span>
                    <span className="font-mono text-[10px] text-white/70">
                      Lead Guide
                    </span>
                    <ReadingTime id={featured.id} tone="light" />
                  </div>
                  <h3 className="font-display text-2xl font-medium leading-[1.12] text-white sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/75 line-clamp-2 max-w-md">
                    {featured.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-medium text-white group-hover:underline">
                    Read dispatch
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </a>
          )}

          {textArticle && (
            <a
              href={`/insights/${textArticle.id}`}
              className="group flex min-h-[340px] flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-7 transition-colors duration-150 hover:border-border-strong hover:bg-surface-2/40 lg:min-h-[390px]"
            >
              <div>
                <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
                  <span className="badge-category">
                    {textArticle.category}
                  </span>
                  <ReadingTime id={textArticle.id} />
                </div>
                <h3 className="font-display text-2xl font-medium leading-[1.15] text-foreground transition-colors duration-150 group-hover:text-accent">
                  {textArticle.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
                  {textArticle.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-xs font-medium text-foreground group-hover:text-accent">
                <span>Read guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </div>
            </a>
          )}

          {mediaArticle && (
            <a
              href={`/insights/${mediaArticle.id}`}
              className="group flex min-h-[340px] flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-150 hover:border-border-strong hover:bg-surface-2/40 lg:min-h-[390px]"
            >
              <div className="relative h-[165px] overflow-hidden border-b border-border">
                {mediaArticle.image && (
                  <img
                    src={mediaArticle.image}
                    alt={mediaArticle.title}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="badge-category">
                      {mediaArticle.category}
                    </span>
                    <ReadingTime id={mediaArticle.id} />
                  </div>
                  <h3 className="font-display text-xl font-medium leading-[1.18] text-foreground transition-colors duration-150 group-hover:text-accent">
                    {mediaArticle.title}
                  </h3>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 font-mono text-xs font-medium text-foreground group-hover:text-accent">
                  <span>Read guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
