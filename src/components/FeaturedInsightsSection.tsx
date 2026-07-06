import { ArrowRight, Clock, Star } from "lucide-react";
import { articleSummaries } from "@/data/articleSummaries";

const FALLBACK_GRADIENT = "linear-gradient(135deg, hsl(150 60% 30% / 0.14), hsl(260 42% 35% / 0.1), hsl(38 75% 55% / 0.12))";

const featuredArticles = articleSummaries.slice(0, 3);

const READING_TIMES: Record<string, number> = {
  "the-small-business-ai-toolkit": 12,
  "10-ai-agent-implementation-mistakes-checklist": 10,
  "2026-ai-power-workflow": 8,
  "wrong-question-ai-leader": 9,
  "black-mirror-lessons-ai-leaders": 11,
  "the-automation-trap": 7,
  "why-ai-projects-fail": 6,
  "5-signs-always-done-this-way": 5,
  "12-ai-tools-in-my-tech-stack": 14,
};

const topicChips = [
  { label: "All", href: "/insights" },
  { label: "AI Strategy", href: "/insights?category=AI+STRATEGY" },
  { label: "Automation", href: "/insights?category=AUTOMATION+%26+PROCESS" },
  { label: "Tools", href: "/insights?category=AI+%26+TECHNOLOGY" },
  { label: "Builds", href: "/insights" },
  { label: "Workflows", href: "/insights/2026-ai-power-workflow" },
];

const ArticleFallbackVisual = ({
  category,
  index,
}: {
  category: string;
  index: number;
}) => (
  <div className="relative h-full w-full overflow-hidden" style={{ background: FALLBACK_GRADIENT }}>
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),transparent_38%),repeating-linear-gradient(135deg,rgba(17,17,17,0.085)_0,rgba(17,17,17,0.085)_1px,transparent_1px,transparent_14px)]" />
    <div className="absolute left-5 top-5 rounded-full border border-white/75 bg-white/70 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-jacarta shadow-[0_10px_24px_-20px_rgba(17,17,17,0.8)]">
      {category}
    </div>
    <div className="absolute bottom-4 right-5 text-[4.5rem] font-bold leading-none text-[hsl(var(--jacarta)/0.18)]">
      {String(index + 1).padStart(2, "0")}
    </div>
  </div>
);

const ReadingTime = ({ id, tone = "dark" }: { id: string; tone?: "light" | "dark" }) => {
  const minutes = READING_TIMES[id];
  if (!minutes) return null;

  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold ${tone === "light" ? "text-white/78" : "text-foreground-subtle"}`}>
      <Clock className="h-3 w-3" />
      {minutes} min read
    </span>
  );
};

const FeaturedInsightsSection = () => {
  const [featured, textArticle, mediaArticle] = featuredArticles;

  return (
    <section id="articles" className="relative z-10 border-b border-border/70 bg-white/28 py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="mb-7 grid gap-5 lg:grid-cols-[0.7fr_1fr_auto] lg:items-end">
          <div>
            <p className="label-mono mb-3">Insights</p>
            <h2 className="font-display text-[2.6rem] font-bold leading-none text-foreground sm:text-[3.8rem]">
              Articles
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-center">
            {topicChips.map((chip, index) => (
              <a
                key={chip.label}
                href={chip.href}
                className={`inline-flex min-h-[32px] items-center rounded-full border px-4 text-[12px] font-semibold shadow-[0_10px_24px_-24px_rgba(17,17,17,0.85)] transition-all duration-200 ${
                  index === 0
                    ? "border-foreground bg-foreground text-white"
                    : "border-border bg-white/70 text-foreground-muted hover:border-accent/30 hover:bg-white hover:text-accent"
                }`}
              >
                {chip.label}
              </a>
            ))}
          </div>

          <a
            href="/insights"
            className="group inline-flex items-center gap-2 text-[13px] font-bold text-accent transition-all duration-300 hover:gap-3 hover:text-foreground lg:justify-self-end"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="concept-article-grid">
          {featured && (
            <a
              href={`/insights/${featured.id}`}
              className="group block overflow-hidden rounded-[1.5rem] border border-white/70 bg-foreground shadow-[0_24px_58px_-40px_rgba(17,17,17,0.9)]"
            >
              <div className="relative flex min-h-[330px] items-end overflow-hidden lg:min-h-[370px]">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[62%_center] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                ) : (
                  <ArticleFallbackVisual category={featured.category} index={0} />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.36)_46%,rgba(0,0,0,0.82))]" />
                <div className="relative z-10 p-6 sm:p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="badge-category !border-white/24 !bg-black/20 !text-white">
                      {featured.category}
                    </span>
                    <span className="badge-category !border-white/24 !bg-black/20 !text-white">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </span>
                    <ReadingTime id={featured.id} tone="light" />
                  </div>
                  <h3 className="font-display text-[2rem] font-bold leading-tight text-white sm:text-[2.45rem]">
                    {featured.title}
                  </h3>
                  <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-white/90 transition-all duration-300 group-hover:gap-3">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          )}

          {textArticle && (
            <a
              href={`/insights/${textArticle.id}`}
              className="group flex min-h-[330px] flex-col rounded-[1.5rem] border border-border bg-white/78 p-6 shadow-[0_18px_48px_-38px_rgba(17,17,17,0.82)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_70px_-44px_hsl(var(--jacarta)/0.5)] lg:min-h-[370px]"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="badge-category">
                  {textArticle.category}
                </span>
                <ReadingTime id={textArticle.id} />
              </div>
              <h3 className="font-display text-[1.75rem] font-bold leading-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                {textArticle.title}
              </h3>
              <div className="mt-auto inline-flex items-center gap-2 pt-8 text-[13px] font-bold text-accent transition-all duration-300 group-hover:gap-3">
                Read article
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          )}

          {mediaArticle && (
            <a
              href={`/insights/${mediaArticle.id}`}
              className="group flex min-h-[330px] flex-col overflow-hidden rounded-[1.5rem] border border-border bg-white/78 shadow-[0_18px_48px_-38px_rgba(17,17,17,0.82)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_70px_-44px_hsl(var(--jacarta)/0.5)] lg:min-h-[370px]"
            >
              <div className="relative h-[150px] overflow-hidden sm:h-[180px] lg:h-[170px]">
                {mediaArticle.image ? (
                  <img
                    src={mediaArticle.image}
                    alt={mediaArticle.title}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <ArticleFallbackVisual category={mediaArticle.category} index={2} />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="badge-category">
                    {mediaArticle.category}
                  </span>
                  <ReadingTime id={mediaArticle.id} />
                </div>
                <h3 className="font-display text-[1.45rem] font-bold leading-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                  {mediaArticle.title}
                </h3>
                <div className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-bold text-accent transition-all duration-300 group-hover:gap-3">
                  Read article
                  <ArrowRight className="h-4 w-4" />
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
