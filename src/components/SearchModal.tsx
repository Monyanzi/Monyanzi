import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight, ArrowUpRight, Layers, BookOpen, Route } from "lucide-react";
import { articleSummaries } from "@/data/articleSummaries";
import { toolsData } from "@/data/tools";
import { readingPaths } from "@/data/paths";
import { useFocusTrap } from "@/utils/useFocusTrap";

interface CommandItem {
  id: string;
  group: "Guides" | "Production Stack" | "Reading Sequences";
  title: string;
  subtitle: string;
  badge: string;
  href: string;
  external?: boolean;
}

const ALL_COMMAND_ITEMS: CommandItem[] = [
  ...articleSummaries.map((a) => ({
    id: `guide-${a.id}`,
    group: "Guides" as const,
    title: a.title,
    subtitle: a.description,
    badge: a.category,
    href: `/insights/${a.id}`,
  })),
  ...toolsData.map((t) => ({
    id: `tool-${t.id}`,
    group: "Production Stack" as const,
    title: t.name,
    subtitle: t.description,
    badge: t.primary ? "Core" : t.category,
    href: `/stack`,
  })),
  ...readingPaths.map((p) => ({
    id: `path-${p.id}`,
    group: "Reading Sequences" as const,
    title: p.title,
    subtitle: p.description,
    badge: `${p.articleIds.length} parts · ${p.durationMinutes}m`,
    href: `/insights/${p.articleIds[0]}`,
  })),
];

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useFocusTrap(isOpen, onClose, containerRef);

  const filteredItems = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return [
        ...ALL_COMMAND_ITEMS.filter((i) => i.group === "Guides").slice(0, 5),
        ...ALL_COMMAND_ITEMS.filter((i) => i.group === "Production Stack").slice(0, 4),
        ...ALL_COMMAND_ITEMS.filter((i) => i.group === "Reading Sequences"),
      ];
    }
    return ALL_COMMAND_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(trimmed) ||
        item.subtitle.toLowerCase().includes(trimmed) ||
        item.badge.toLowerCase().includes(trimmed) ||
        item.group.toLowerCase().includes(trimmed)
    );
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isOpen]);

  const navigateToItem = useCallback(
    (item: CommandItem) => {
      onClose();
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        window.history.pushState(null, "", item.href);
        window.scrollTo(0, 0);
      }
    },
    [onClose]
  );

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      const selected = filteredItems[activeIndex];
      if (selected) {
        e.preventDefault();
        navigateToItem(selected);
      }
    }
  };

  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector(`[data-command-index="${activeIndex}"]`);
    if (activeEl instanceof HTMLElement) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const groupedSections = useMemo(() => {
    const groups: { name: CommandItem["group"]; items: { item: CommandItem; flatIndex: number }[] }[] = [];
    const groupOrder: CommandItem["group"][] = ["Guides", "Production Stack", "Reading Sequences"];

    for (const groupName of groupOrder) {
      const matching: { item: CommandItem; flatIndex: number }[] = [];
      filteredItems.forEach((item, idx) => {
        if (item.group === groupName) {
          matching.push({ item, flatIndex: idx });
        }
      });
      if (matching.length > 0) {
        groups.push({ name: groupName, items: matching });
      }
    }
    return groups;
  }, [filteredItems]);

  const GroupIcon = ({ group }: { group: CommandItem["group"] }) => {
    if (group === "Production Stack") return <Layers className="h-3.5 w-3.5 text-foreground-subtle shrink-0" />;
    if (group === "Reading Sequences") return <Route className="h-3.5 w-3.5 text-foreground-subtle shrink-0" />;
    return <BookOpen className="h-3.5 w-3.5 text-foreground-subtle shrink-0" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-[2px] flex items-start justify-center pt-[12vh]"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette search"
        >
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-[92vw] max-w-xl rounded-2xl border border-border/85 bg-surface/95 shadow-card-elevated backdrop-blur-2xl overflow-hidden"
          >
            {/* Command Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border/70">
              <Search className="w-4 h-4 text-accent shrink-0" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-results-listbox"
                aria-activedescendant={filteredItems[activeIndex]?.id}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search guides, AI tools, or sequences..."
                className="flex-1 bg-transparent text-foreground placeholder:text-foreground-subtle outline-none text-sm"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="text-foreground-subtle hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline font-mono text-[10px] text-foreground-subtle border border-border bg-surface-2 rounded-md px-1.5 py-0.5">
                Esc
              </kbd>
            </div>

            {/* Grouped Results ListBox */}
            <div
              id="command-results-listbox"
              ref={listRef}
              role="listbox"
              aria-label="Search results"
              className="max-h-[54vh] overflow-y-auto p-2 space-y-3"
            >
              {groupedSections.length === 0 ? (
                <p className="text-xs font-mono text-foreground-subtle text-center py-12">
                  No matches for &ldquo;{query}&rdquo;
                </p>
              ) : (
                groupedSections.map((section) => (
                  <div key={section.name}>
                    <div className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground-subtle">
                      {section.name}
                    </div>
                    <div className="space-y-0.5">
                      {section.items.map(({ item, flatIndex }) => {
                        const isActive = flatIndex === activeIndex;
                        return (
                          <a
                            key={item.id}
                            id={item.id}
                            role="option"
                            aria-selected={isActive}
                            data-command-index={flatIndex}
                            href={item.href}
                            onMouseEnter={() => setActiveIndex(flatIndex)}
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToItem(item);
                            }}
                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-100 ${
                              isActive
                                ? "bg-surface-2 text-foreground"
                                : "text-foreground-muted hover:bg-surface-2/60"
                            }`}
                          >
                            <GroupIcon group={item.group} />
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-sm font-medium truncate transition-colors ${
                                  isActive ? "text-accent" : "text-foreground"
                                }`}
                              >
                                {item.title}
                              </p>
                              <p className="text-xs text-foreground-subtle truncate mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                            <span className="shrink-0 inline-flex items-center rounded-full border border-border/70 bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground-muted">
                              {item.badge}
                            </span>
                            {item.external ? (
                              <ArrowUpRight
                                className={`w-3.5 h-3.5 shrink-0 transition-opacity ${
                                  isActive ? "opacity-100 text-accent" : "opacity-0"
                                }`}
                              />
                            ) : (
                              <ArrowRight
                                className={`w-3.5 h-3.5 shrink-0 transition-opacity ${
                                  isActive ? "opacity-100 text-accent" : "opacity-0"
                                }`}
                              />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Precision Hardware Footer Hints */}
            <div className="flex items-center justify-between border-t border-border/70 bg-surface-2/40 px-4 py-2 font-mono text-[10px] text-foreground-subtle">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="rounded border border-border bg-surface px-1 py-0.5 text-[9px]">↑↓</kbd> Navigate
                </span>
                <span>
                  <kbd className="rounded border border-border bg-surface px-1 py-0.5 text-[9px]">↵</kbd> Open
                </span>
              </div>
              <span>{filteredItems.length} results</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
