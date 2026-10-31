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
    <div className="flex flex-nowrap items-center gap-6 overflow-x-auto scrollbar-none max-w-full -mb-px">
      <button
        type="button"
        onClick={() => onCategoryChange(null)}
        className={`shrink-0 text-sm pb-2 border-b-2 transition-colors duration-150 ${
          activeCategory === null
            ? "border-foreground text-foreground font-medium"
            : "border-transparent text-foreground-muted hover:text-foreground"
        }`}
      >
        <span>All</span>
        {totalCount !== undefined && (
          <span className="font-mono text-[11px] text-foreground-subtle ml-1">{totalCount}</span>
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
            className={`shrink-0 text-sm pb-2 border-b-2 transition-colors duration-150 ${
              active
                ? "border-foreground text-foreground font-medium"
                : "border-transparent text-foreground-muted hover:text-foreground"
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span className="font-mono text-[11px] text-foreground-subtle ml-1">{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
});

CategoryFilter.displayName = "CategoryFilter";
export default CategoryFilter;
