import { memo } from "react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  counts?: Record<string, number>;
  totalCount?: number;
}

const CategoryFilter = memo(({ categories, activeCategory, onCategoryChange, counts, totalCount }: CategoryFilterProps) => {
  return (
    <div className="inline-flex flex-nowrap items-center gap-1 overflow-x-auto scrollbar-none max-w-full">
      <button
        type="button"
        onClick={() => onCategoryChange(null)}
        className={`shrink-0 rounded px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors duration-150 ${
          activeCategory === null
            ? "bg-foreground text-background font-semibold"
            : "border border-border bg-surface text-foreground-muted hover:border-border-strong hover:text-foreground"
        }`}
      >
        <span>All</span>
        {totalCount !== undefined && (
          <span className="ml-1.5 opacity-70 tabular-nums">({totalCount})</span>
        )}
      </button>

      {categories.map((category) => {
        const count = counts?.[category];
        const active = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`shrink-0 rounded px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors duration-150 ${
              active
                ? "bg-foreground text-background font-semibold"
                : "border border-border bg-surface text-foreground-muted hover:border-border-strong hover:text-foreground"
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span className="ml-1.5 opacity-70 tabular-nums">({count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
});

CategoryFilter.displayName = "CategoryFilter";
export default CategoryFilter;