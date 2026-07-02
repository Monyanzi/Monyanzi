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

    // Clear query on open & auto-focus input
    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    // Close on Escape
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
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
                    onClick={handleBackdropClick}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Search insights"
                >
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, y: -20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-[90vw] max-w-lg bg-background rounded-2xl shadow-2xl border border-border overflow-hidden"
                    >
                        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search articles..."
                                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    aria-label="Clear search"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                            <kbd className="hidden sm:inline text-[11px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
                                Esc
                            </kbd>
                        </div>

                        <div className="max-h-[45vh] overflow-y-auto p-2">
                            {results.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-8">
                                    No articles match "{query}"
                                </p>
                            ) : (
                                results.map((article) => (
                                    <a
                                        key={article.id}
                                        href={`/insights/${article.id}`}
                                        onClick={onClose}
                                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted shrink-0">
                                            <img
                                                src={article.image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-foreground truncate group-hover:text-[hsl(var(--gold))] transition-colors">
                                                {article.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {article.category}
                                            </p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
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
