import { ArrowRight, Clock } from "lucide-react";
import { articleSummaries } from "@/data/articleSummaries";

// Approximate reading time: 200 words per minute
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

// Fallback gradient if article has no image
const FALLBACK_GRADIENT = "linear-gradient(135deg, hsl(270 50% 35% / 0.12), hsl(150 60% 30% / 0.08))";

const featuredArticles = articleSummaries.slice(0, 3);

const topicChips = [
  { label: "AI Strategy", href: "/insights?category=AI+STRATEGY" },
  { label: "Automation", href: "/insights?category=AUTOMATION+%26+PROCESS" },
  { label: "Tools", href: "/insights?category=AI+%26+TECHNOLOGY" },
  { label: "Builds", href: "/insights" },
  { label: "Workflows", href: "/insights/2026-ai-power-workflow" },
];

const FeaturedInsightsSection = () => {
  const [featured, ...rest] = featuredArticles;

  return (
    <section id="articles" className="py-section relative z-10">
      <div className="page-container">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Topic filter chips — static, scannable */}
            <div className="mb-4 flex flex-wrap gap-2">
              {topicChips.map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  className="inline-flex items-center rounded-full border border-[#E4E4EF] bg-white/80 px-3 py-1 text-[12px] font-semibold text-foreground-muted transition-all duration-200 hover:border-[#6D28D9]/30 hover:bg-[#6D28D9]/5 hover:text-[#6D28D9]"
                >
                  {chip.label}
                </a>
              ))}
            </div>
            <h2 className="text-display-md text-foreground">Articles</h2>
          </div>
          <a
            href="/insights"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-foreground-muted transition-colors duration-200 hover:text-foreground"
          >
            View all articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Featured article — full-width editorial card with image background */}
        {featured && (
          <a
            href={`/insights/${featured.id}`}
            className="group mb-8 block"
          >
            <div className="relative overflow-hidden rounded-[2rem] min-h-[400px] lg:min-h-[480px] flex items-end">
              {/* Background image with fallback */}
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0" style={{ background: FALLBACK_GRADIENT }} />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content overlaid */}
              <div className="relative z-10 p-8 lg:p-12 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-category !border-white/20 !bg-white/10 !text-white/90 backdrop-blur-md">
                    {featured.category}
                  </span>
                  <span className="badge-category !border-white/20 !bg-white/10 !text-white/90 backdrop-blur-md">
                    Featured
                  </span>
                  {READING_TIMES[featured.id] && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                      <Clock className="h-3 w-3" />
                      {READING_TIMES[featured.id]} min read
                    </span>
                  )}
                </div>

                <h3 className="mb-3 text-display-sm text-white text-balance transition-colors duration-200">
                  {featured.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 transition-all duration-300 group-hover:gap-3">
                  Read →
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Secondary articles — 2-column grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((article) => (
            <a
              key={article.id}
              href={`/insights/${article.id}`}
              className="group card-premium flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                ) : (
                  <div className="h-full w-full" style={{ background: FALLBACK_GRADIENT }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/8 to-transparent" />
                <span className="absolute left-4 top-4 badge-category">
                  {article.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <div className="flex items-center gap-3 mb-3">
                  {READING_TIMES[article.id] && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground-subtle">
                      <Clock className="h-3 w-3" />
                      {READING_TIMES[article.id]} min read
                    </span>
                  )}
                </div>
                <h3 className="mb-4 text-[1rem] font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-jacarta line-clamp-2 flex-1">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center gap-1.5 text-[13px] font-semibold text-jacarta">
                  Read →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
