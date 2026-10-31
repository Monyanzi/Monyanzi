import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight } from "lucide-react";
import { articleSummaries } from "@/data/articleSummaries";
import { useFocusTrap } from "@/utils/useFocusTrap";

const articles = articleSummaries;

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(isOpen, onClose, containerRef);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return articles;
    const q = query.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  }, [query]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-black/45 flex items-start justify-center pt-[14vh]"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Search field guides"
        >
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-[92vw] max-w-lg bg-surface rounded-lg shadow-card-elevated border border-border overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <Search className="w-4 h-4 text-foreground-subtle shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides..."
                className="flex-1 bg-transparent text-foreground placeholder:text-foreground-subtle outline-none text-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="text-foreground-subtle hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline font-mono text-[10px] text-foreground-subtle border border-border bg-surface-2 rounded px-1.5 py-0.5">
                Esc
              </kbd>
            </div>

            <div className="max-h-[50vh] overflow-y-auto divide-y divide-border/60">
              {results.length === 0 ? (
                <p className="text-xs font-mono text-foreground-subtle text-center py-10">
                  No guides match &ldquo;{query}&rdquo;
                </p>
              ) : (
                results.map((article, idx) => (
                  <a
                    key={article.id}
                    href={`/insights/${article.id}`}
                    onClick={onClose}
                    className="flex items-center gap-3.5 px-4 py-3 hover:bg-surface-2/60 transition-colors group"
                  >
                    <span className="font-mono text-[11px] text-foreground-subtle tabular-nums shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate group-hover:text-accent transition-colors">
                        {article.title}
                      </p>
                      <p className="font-mono text-[10px] text-foreground-subtle mt-0.5">
                        {article.category}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-foreground-subtle opacity-0 group-hover:opacity-100 group-hover:text-accent transition-opacity shrink-0" />
                  </a>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
