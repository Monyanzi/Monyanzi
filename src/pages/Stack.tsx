import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import { toolsData } from "@/data/tools";
import { articleSummaries } from "@/data/articleSummaries";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const STACK_URL = `${SITE_URL}/stack`;
const STACK_TITLE = `Production AI Stack & Tools (2026) | ${SITE_NAME}`;

const stackItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "2026 Production AI Stack",
  itemListElement: toolsData.map((tool, index) => ({
    "@type": "SoftwareApplication",
    position: index + 1,
    name: tool.name,
    url: tool.href,
    applicationCategory: tool.category,
    description: tool.description,
  })),
};

const articleMap = Object.fromEntries(
  articleSummaries.map((a) => [a.id, a])
);

const categories = ["All", "Core", "Code", "Research", "Automation", "Build", "Reasoning"] as const;

const Stack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTools = useMemo(() => {
    if (selectedCategory === "All") return toolsData;
    if (selectedCategory === "Core") return toolsData.filter((t) => t.primary);
    return toolsData.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: toolsData.length,
      Core: toolsData.filter((t) => t.primary).length,
    };
    for (const t of toolsData) {
      counts[t.category] = (counts[t.category] || 0) + 1;
    }
    return counts;
  }, []);

  const coreCount = useMemo(() => toolsData.filter((t) => t.primary).length, []);

  return (
    <>
      <Helmet>
        <title>{STACK_TITLE}</title>
        <meta
          name="description"
          content="The production AI stack I use to build apps, automate operations, and conduct deep research. Field notes and linked guides for each tool."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={STACK_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={STACK_URL} />
        <meta property="og:title" content={STACK_TITLE} />
        <meta property="og:description" content="The production AI stack I use to build apps, automate operations, and conduct deep research." />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(stackItemListSchema)}</script>
      </Helmet>

      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="page-container relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent mb-4">
                <Layers className="h-3 w-3" />
                Production Stack
              </span>
              <h1 className="text-display-lg text-balance text-foreground">
                The 2026 AI Tool Stack
              </h1>
              <p className="mt-4 text-body-lg text-foreground-muted max-w-2xl">
                The software I use to build apps, automate tasks, and run research. Filter by category or start with the core three.
              </p>

              {/* Metrics strip */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-foreground-muted">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {coreCount} Core Models (Claude · ChatGPT · Gemini)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-jacarta" />
                  {toolsData.length - coreCount} Specialized Tools
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-section">
          <div className="page-container">
            {/* Filter pills */}
            <div className="mb-10 flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const count = categoryCounts[cat] ?? 0;
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-semibold tracking-wide outline-none transition-colors duration-200 ${active ? "bg-foreground text-background" : "border border-border bg-surface text-foreground-muted hover:text-foreground"
                      }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span>{cat}</span>
                      <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono leading-none ${active ? "bg-background/20 text-background" : "bg-surface-2 text-foreground-subtle"}`}>
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tool Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredTools.map((tool) => (
                  <motion.div
                    key={tool.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-interactive duration-300 hover:border-border-strong hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                  >
                    <div>
                      {/* Top Bar: Logo + Badges */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
                          <img src={tool.logo} alt={`${tool.name} logo`} className="h-7 w-7 object-contain" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-foreground-subtle">
                            {tool.category}
                          </span>
                          {tool.primary && (
                            <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent font-medium">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              Core
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-lg font-bold text-foreground">{tool.name}</h2>
                        <a
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground-subtle hover:text-foreground transition-colors p-1"
                          aria-label={`Visit ${tool.name} website`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>

                      <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                        {tool.description}
                      </p>

                      {/* Founder Notes */}
                      <div className="mt-4 rounded-xl border border-border/60 bg-surface-2/60 p-3 text-[11px] leading-relaxed text-foreground-muted">
                        <span className="font-semibold text-foreground">Field Note: </span>
                        {tool.notes}
                      </div>
                    </div>

                    {/* Linked Articles footer */}
                    {tool.relatedArticleIds.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-border/60">
                        <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-foreground-subtle mb-2">
                          Featured in:
                        </p>
                        <div className="space-y-1.5">
                          {tool.relatedArticleIds.map((artId) => {
                            const art = articleMap[artId];
                            if (!art) return null;
                            return (
                              <a
                                key={artId}
                                href={`/insights/${artId}`}
                                className="group flex items-center justify-between text-xs font-medium text-foreground-muted hover:text-accent transition-colors"
                              >
                                <span className="line-clamp-1 flex-1 pr-2">{art.title}</span>
                                <ArrowRight className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default Stack;