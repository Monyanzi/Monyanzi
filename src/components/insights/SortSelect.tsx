import { memo, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

export type SortOption = "default" | "alphabetical";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: "default", label: "Sort: Latest" },
  { id: "alphabetical", label: "Sort: A–Z" },
];

const SortSelect = memo(({ value, onChange }: SortSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(() =>
    Math.max(0, SORT_OPTIONS.findIndex((o) => o.id === value))
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    SORT_OPTIONS.find((o) => o.id === value)?.label ?? "Sort: Latest";

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % SORT_OPTIONS.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + SORT_OPTIONS.length) % SORT_OPTIONS.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const chosen = SORT_OPTIONS[focusedIndex];
        if (chosen) {
          onChange(chosen.id);
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, focusedIndex, onChange]);

  const handleToggle = () => {
    setFocusedIndex(Math.max(0, SORT_OPTIONS.findIndex((o) => o.id === value)));
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        aria-label="Sort insights"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={handleToggle}
        className="glass-pill inline-flex min-h-[36px] items-center justify-between gap-2.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-medium text-foreground outline-none transition-all duration-150 hover:border-border-strong focus-visible:outline-accent active:scale-[0.98] cursor-pointer"
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-foreground-subtle transition-transform duration-150 ${
            isOpen ? "rotate-180 text-foreground" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            aria-label="Sort options"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 z-50 min-w-[168px] overflow-hidden rounded-2xl border border-border/85 bg-surface/95 p-1.5 shadow-craft backdrop-blur-xl outline-none space-y-0.5"
          >
            {SORT_OPTIONS.map((opt, idx) => {
              const isSelected = opt.id === value;
              const isFocused = idx === focusedIndex;
              return (
                <li
                  key={opt.id}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setFocusedIndex(idx)}
                  onClick={() => {
                    onChange(opt.id);
                    setIsOpen(false);
                  }}
                  className={`flex cursor-pointer select-none items-center justify-between gap-3 rounded-xl px-3 py-2 font-mono text-[11px] transition-colors duration-100 ${
                    isFocused
                      ? "bg-surface-2 text-foreground"
                      : "text-foreground-muted hover:bg-surface-2/60"
                  } ${isSelected ? "font-semibold text-foreground" : ""}`}
                >
                  <span>{opt.label}</span>
                  <Check
                    className={`h-3.5 w-3.5 text-accent transition-opacity duration-150 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
});

SortSelect.displayName = "SortSelect";
export default SortSelect;
