import { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/insights/ArticleCard";
import CategoryFilter from "@/components/insights/CategoryFilter";
import SortSelect, { type SortOption } from "@/components/insights/SortSelect";
import AudioBriefingCard from "@/components/audio/AudioBriefingCard";
import SiteFooter from "@/components/SiteFooter";
import { articleSummaries, entrepreneurResources } from "@/data/articleSummaries";
import { insightsArticlesBriefing } from "@/data/audioBriefings";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";
import ReadingPathsSection from "@/components/insights/ReadingPathsSection";

const INSIGHTS_URL = `${SITE_URL}/insights`;
const INSIGHTS_TITLE = `AI Tools, Automation & Founder Field Notes | ${SITE_NAME}`;

const articles = articleSummaries;
const categories = [...new Set(articles.map((a) => a.category))];

const insightsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI tools and automation insights",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${INSIGHTS_URL}/${article.id}`,
    name: article.title,
  })),
};

const insightsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Insights", item: INSIGHTS_URL },
  ],
};

const toIsoDuration = (duration: string) => {
  const [minutes, seconds] = duration.split(":").map((value) => Number(value));
  if (Number.isNaN(minutes) || Number.isNaN(seconds)) return undefined;
  return `PT${minutes}M${seconds}S`;
};

const readyAudioSchemas = [insightsArticlesBriefing]
  .filter((briefing) => briefing.isReady)
  .map((briefing) => ({
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: briefing.title,
    description: briefing.subtitle,
    contentUrl: `${SITE_URL}${briefing.audioSrc}`,
    duration: toIsoDuration(briefing.duration),
    dateModified: briefing.updatedOn,
    inLanguage: "en-ZA",
  }));

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    const param = new URLSearchParams(window.location.search).get("cat");
    if (!param) return null;
    return categories.find((c) => c.toLowerCase() === param.toLowerCase()) ?? null;
  });
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const a of articles) {
      counts[a.category] = (counts[a.category] || 0) + 1;
    }
    return counts;
  }, []);

  const handleCategoryChange = useCallback((category: string | null) => {
    setActiveCategory(category);
    const url = new URL(window.location.href);
    if (category) {
      url.searchParams.set("cat", category.toLowerCase());
    } else {
      url.searchParams.delete("cat");
    }
    window.history.replaceState(null, "", url.pathname + url.search);
  }, []);

  const handleSortChange = useCallback((option: SortOption) => {
    setSortOption(option);
  }, []);

  const filteredAndSortedArticles = useMemo(() => {
    const result = activeCategory
      ? articles.filter((a) => a.category === activeCategory)
      : [...articles];
    if (sortOption === "alphabetical") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }, [activeCategory, sortOption]);

  const featuredArticle = filteredAndSortedArticles[0];
  const remainingArticles = filteredAndSortedArticles.slice(1);

  return (
    <>
      <Helmet>
        <title>{INSIGHTS_TITLE}</title>
        <meta
          name="description"
          content="Practical AI articles, automation checklists, tool guides, and workflow notes for small entrepreneurs and builders."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={SITE_NAME} />
        <meta name="keywords" content="AI tools for entrepreneurs, automation strategy articles, AI implementation checklists, Codex, Claude Code, Lovable, n8n" />
        <link rel="canonical" href={INSIGHTS_URL} />
        <link rel="alternate" hrefLang="en-za" href={INSIGHTS_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={INSIGHTS_URL} />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:title" content={INSIGHTS_TITLE} />
        <meta property="og:description" content="Practical AI articles, automation checklists, tool guides, and workflow notes for small entrepreneurs and builders." />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:alt" content="AI tools and automation insights page" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={INSIGHTS_URL} />
        <meta name="twitter:title" content={INSIGHTS_TITLE} />
        <meta name="twitter:description" content="Practical AI articles, automation checklists, tool guides, and workflow notes for small entrepreneurs and builders." />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta name="twitter:image:alt" content="AI tools and automation insights page" />

        <script type="application/ld+json">{JSON.stringify(insightsItemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(insightsBreadcrumbSchema)}</script>
        {readyAudioSchemas.map((schema, index) => (
          <script key={`audio-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <main className="min-h-screen">
        <div className="relative z-10">
          <Navigation />

          {/* Hero */}
          <section className="relative overflow-hidden border-b border-border/70 pt-28 pb-16 lg:pt-36 lg:pb-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,hsl(var(--accent)/0.1),transparent_70%)]" />
            <div className="page-container relative z-10">
              <div className="max-w-2xl">
                <h1 className="text-display-lg text-balance text-foreground">
                  Guides
                </h1>

                <p className="mt-4 max-w-lg text-body-lg text-foreground-muted">
                  Build software and automate operations with AI.
                </p>
              </div>

              {/* Audio briefing — full-width, below header */}
              <div className="mt-8">
                <AudioBriefingCard briefing={insightsArticlesBriefing} className="w-full" />
              </div>
            </div>
          </section>

          {/* Articles section */}
          <section className="py-section">
            <div className="page-container">
              {/* Controls */}
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-5">
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                  counts={categoryCounts}
                  totalCount={articles.length}
                />
                <div className="shrink-0">
                  <SortSelect value={sortOption} onChange={handleSortChange} />
                </div>
              </div>

              {/* Article list */}
              {filteredAndSortedArticles.length === 0 ? (
                <div className="glass-card flex flex-col items-center justify-center rounded-3xl py-24">
                  <p className="text-foreground-muted">No guides found.</p>
                </div>
              ) : (
                <div className="space-y-6 lg:space-y-8">
                  {/* Featured */}
                  {featuredArticle && (
                    <div>
                      <ArticleCard {...featuredArticle} featured />
                    </div>
                  )}

                  {/* Tactile Glass Index Cards */}
                  {remainingArticles.length > 0 && (
                    <div className="grid gap-4">
                      {remainingArticles.map((article) => (
                        <ArticleCard key={article.id} {...article} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Curated Reading Paths */}
          <ReadingPathsSection />

          {/* Resources section */}
          <section className="py-section">
            <div className="page-container">
              {/* Section separator */}
              <div className="mb-6 flex items-center gap-3">
                <span className="glass-pill inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium text-accent">
                  Ecosystem
                </span>
              </div>
              <div className="mb-10">
                <h2 className="text-display-sm text-foreground mb-3">Tools for builders</h2>
                <p className="max-w-xl text-body-lg text-foreground-muted">
                  Tools and ideas to try before starting a new project.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {entrepreneurResources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group flex flex-col p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="glass-pill rounded-full px-3 py-0.5 font-mono text-[10px] font-semibold text-accent">
                        {resource.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-foreground-subtle transition-transform duration-150 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="mb-2.5 font-display text-xl font-medium text-foreground transition-colors duration-150 group-hover:text-accent">
                      {resource.title}
                    </h3>
                    <p className="mb-6 flex-grow text-xs sm:text-sm leading-relaxed text-foreground-muted">
                      {resource.description}
                    </p>
                    <div className="mt-auto border-t border-border/50 pt-3.5 inline-flex items-center gap-2 font-mono text-xs font-medium text-foreground transition-colors duration-150 group-hover:text-accent">
                      {resource.ctaText}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </>
  );
};

export default Insights;
