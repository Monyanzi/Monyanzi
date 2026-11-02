import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "motion/react";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import SegmentedControl, { type SegmentedItem } from "@/components/ui/SegmentedControl";
import { toolsData, type ToolItem } from "@/data/tools";
import { articleSummaries } from "@/data/articleSummaries";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";
import { ArrowUpDown, ArrowUp, ArrowDown, ExternalLink, Info, X } from "lucide-react";

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

type SortField = "default" | "name" | "category";
type SortDirection = "asc" | "desc";

const ToolSpecPopover = ({ tool }: { tool: ToolItem }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`Inspect ${tool.name} specifications`}
        aria-expanded={open}
        className={`inline-flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-150 focus-visible:outline-accent ${
          open
            ? "border-accent bg-accent/10 text-accent"
            : "border-border/70 bg-surface text-foreground-subtle hover:border-border-strong hover:text-foreground"
        }`}
      >
        <Info className="h-3.5 w-3.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={`${tool.name} specification`}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 z-50 w-72 rounded-2xl border border-border/85 bg-surface/95 p-4 shadow-craft backdrop-blur-xl text-left space-y-2.5"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-semibold text-foreground">
                  {tool.name}
                </span>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
                  {tool.primary ? "Core" : tool.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close specification"
                className="text-foreground-subtle hover:text-foreground transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-xs leading-relaxed text-foreground-muted">
              {tool.notes}
            </p>
            <div className="pt-1 flex items-center justify-between border-t border-border/50">
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-accent hover:text-foreground transition-colors"
              >
                <span>Open {tool.name}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Stack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortField, setSortField] = useState<SortField>("default");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = useCallback(
    (field: "name" | "category") => {
      if (sortField !== field) {
        setSortField(field);
        setSortDirection("asc");
      } else if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortField("default");
        setSortDirection("asc");
      }
    },
    [sortField, sortDirection]
  );

  const filteredTools = useMemo(() => {
    const base =
      selectedCategory === "All"
        ? [...toolsData]
        : selectedCategory === "Core"
        ? toolsData.filter((t) => t.primary)
        : toolsData.filter((t) => t.category === selectedCategory);

    if (sortField === "default") return base;

    return [...base].sort((a, b) => {
      const valA = sortField === "name" ? a.name : a.category;
      const valB = sortField === "name" ? b.name : b.category;
      const cmp = valA.localeCompare(valB);
      return sortDirection === "asc" ? cmp : -cmp;
    });
  }, [selectedCategory, sortField, sortDirection]);

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

  const segmentedItems = useMemo<SegmentedItem[]>(
    () =>
      categories.map((cat) => ({
        id: cat,
        label: cat,
        count: categoryCounts[cat] ?? 0,
      })),
    [categoryCounts]
  );

  const coreCount = useMemo(() => toolsData.filter((t) => t.primary).length, []);

  const SortIcon = ({ field }: { field: "name" | "category" }) => {
    if (sortField !== field) return <ArrowUpDown className="h-3 w-3 opacity-50" />;
    return sortDirection === "asc" ? (
      <ArrowUp className="h-3 w-3 text-accent" />
    ) : (
      <ArrowDown className="h-3 w-3 text-accent" />
    );
  };

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
            {/* Unified Tactile Segmented Filter */}
            <div className="mb-8 flex items-center justify-between border-b border-border/60 pb-5">
              <SegmentedControl
                items={segmentedItems}
                activeId={selectedCategory}
                onChange={setSelectedCategory}
                layoutGroupId="stack-category-segmented"
                ariaLabel="Filter tools by category"
              />
            </div>

            {/* Desktop Ledger Table (lg and up) — overflow-visible so spec popovers are never clipped */}
            <div className="hidden lg:block rounded-3xl border border-border/80 bg-surface shadow-craft">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/80 bg-surface-2/50 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground-subtle">
                    <th className="py-3.5 pl-6 pr-6 font-semibold rounded-tl-3xl">
                      <button
                        type="button"
                        onClick={() => handleSort("name")}
                        className="inline-flex items-center gap-1.5 uppercase tracking-[0.08em] hover:text-foreground transition-colors focus-visible:outline-accent cursor-pointer"
                      >
                        <span>Tool</span>
                        <SortIcon field="name" />
                      </button>
                    </th>
                    <th className="py-3.5 pr-6 font-semibold">
                      <button
                        type="button"
                        onClick={() => handleSort("category")}
                        className="inline-flex items-center gap-1.5 uppercase tracking-[0.08em] hover:text-foreground transition-colors focus-visible:outline-accent cursor-pointer"
                      >
                        <span>Category</span>
                        <SortIcon field="category" />
                      </button>
                    </th>
                    <th className="py-3.5 pr-6 font-semibold">Purpose</th>
                    <th className="py-3.5 pr-6 font-semibold rounded-tr-3xl">Guides</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredTools.map((tool) => (
                    <tr key={tool.id} className="group hover:bg-surface-2/35 transition-colors">
                      <td className="py-4 pl-6 pr-6 align-top">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/5 bg-white p-1.5 shadow-xs">
                            <img
                              src={tool.logo}
                              alt={`${tool.name} logo`}
                              className="h-full w-full object-contain"
                            />
                          </div>
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
                            <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
                              Core
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-4 pr-6 align-top font-mono text-[11px] text-foreground-muted">
                        <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-0.5 border border-border/60">
                          {tool.category}
                        </span>
                      </td>

                      <td className="py-4 pr-6 align-top max-w-md">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm text-foreground">
                              {tool.description}
                            </p>
                            {tool.notes && (
                              <p className="mt-1 text-xs text-foreground-muted">
                                <span className="text-foreground-subtle font-mono text-[10px] mr-1">Field note:</span>
                                {tool.notes}
                              </p>
                            )}
                          </div>

                          {tool.notes && <ToolSpecPopover tool={tool} />}
                        </div>
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
            <div className="lg:hidden flex flex-col gap-3">
              {filteredTools.map((tool) => (
                <div key={tool.id} className="glass-card rounded-2xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/5 bg-white p-1.5 shadow-xs">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>
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
                        <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
                          Core
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-foreground-muted">
                      {tool.category}
                    </span>
                  </div>

                  <p className="text-sm text-foreground">
                    {tool.description}
                  </p>

                  {tool.notes && (
                    <p className="text-sm text-foreground-muted">
                      <span className="text-foreground-subtle font-mono text-[11px] mr-1">Field note:</span>
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
