import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import { toolsData } from "@/data/tools";
import { articleSummaries } from "@/data/articleSummaries";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";
import { ExternalLink } from "lucide-react";

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
        <section className="relative border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="page-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display-lg text-balance text-foreground">
                AI tool stack
              </h1>
              <p className="mt-4 text-body-lg text-foreground-muted max-w-2xl">
                Tools used to build software, automate operations, and run research.
              </p>

              <p className="mt-6 font-mono text-[12px] text-foreground-muted">
                {coreCount} core &middot; {toolsData.length - coreCount} specialist
              </p>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-section">
          <div className="page-container">
            {/* Filter tabs */}
            <div className="mb-8 flex flex-nowrap items-center gap-6 overflow-x-auto border-b border-border scrollbar-none">
              {categories.map((cat) => {
                const count = categoryCounts[cat] ?? 0;
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 text-sm pb-2 border-b-2 transition-colors duration-150 ${
                      active
                        ? "border-foreground text-foreground font-medium"
                        : "border-transparent text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {cat}
                    <span className="font-mono text-[11px] text-foreground-subtle ml-1">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Table (lg and up) */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-t border-border text-left">
                <thead>
                  <tr className="border-b border-border font-mono text-[11px] uppercase tracking-[0.08em] text-foreground-subtle">
                    <th className="py-3 pr-6 font-medium">Tool</th>
                    <th className="py-3 pr-6 font-medium">Category</th>
                    <th className="py-3 pr-6 font-medium">Purpose</th>
                    <th className="py-3 pr-6 font-medium">Guides</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTools.map((tool) => (
                    <tr key={tool.id} className="border-b border-border">
                      <td className="py-4 pr-6 align-top">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="h-5 w-5 object-contain"
                          />
                          <a
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                          >
                            <span>{tool.name}</span>
                            <ExternalLink className="h-3 w-3 text-foreground-subtle" />
                          </a>
                          {tool.primary && (
                            <span className="font-mono text-[11px] text-foreground-muted">
                              Core
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-4 pr-6 align-top font-mono text-[11px] text-foreground-muted">
                        {tool.category}
                      </td>

                      <td className="py-4 pr-6 align-top max-w-md">
                        <p className="text-sm text-foreground">
                          {tool.description}
                        </p>
                        {tool.notes && (
                          <p className="mt-1 text-sm text-foreground-muted">
                            <span className="text-foreground-subtle font-mono text-[11px] mr-1">Note:</span>
                            {tool.notes}
                          </p>
                        )}
                      </td>

                      <td className="py-4 pr-6 align-top text-sm">
                        {tool.relatedArticleIds.length > 0 ? (
                          <div className="text-sm text-foreground-muted">
                            {tool.relatedArticleIds.map((artId, idx) => {
                              const art = articleMap[artId];
                              if (!art) return null;
                              return (
                                <span key={artId}>
                                  {idx > 0 && ", "}
                                  <a
                                    href={`/insights/${artId}`}
                                    className="hover:text-foreground underline decoration-border-strong underline-offset-2 transition-colors"
                                  >
                                    {art.title}
                                  </a>
                                </span>
                              );
                            })}
                          </div>
                        ) : (
                          <span className="font-mono text-[11px] text-foreground-subtle">&middot;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / Tablet List (below lg) */}
            <div className="lg:hidden divide-y divide-border border-y border-border">
              {filteredTools.map((tool) => (
                <div key={tool.id} className="py-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="h-5 w-5 object-contain"
                      />
                      <a
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                      >
                        <span>{tool.name}</span>
                        <ExternalLink className="h-3 w-3 text-foreground-subtle" />
                      </a>
                      {tool.primary && (
                        <span className="font-mono text-[11px] text-foreground-muted">
                          Core
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] text-foreground-muted">
                      {tool.category}
                    </span>
                  </div>

                  <p className="text-sm text-foreground">
                    {tool.description}
                  </p>

                  {tool.notes && (
                    <p className="text-sm text-foreground-muted">
                      <span className="text-foreground-subtle font-mono text-[11px] mr-1">Note:</span>
                      {tool.notes}
                    </p>
                  )}

                  {tool.relatedArticleIds.length > 0 && (
                    <div className="pt-1 text-xs text-foreground-muted">
                      <span className="font-mono text-[11px] text-foreground-subtle mr-1">Guides:</span>
                      {tool.relatedArticleIds.map((artId, idx) => {
                        const art = articleMap[artId];
                        if (!art) return null;
                        return (
                          <span key={artId}>
                            {idx > 0 && ", "}
                            <a
                              href={`/insights/${artId}`}
                              className="hover:text-foreground underline decoration-border-strong underline-offset-2 transition-colors"
                            >
                              {art.title}
                            </a>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default Stack;
