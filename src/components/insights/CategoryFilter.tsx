import { memo } from "react";
import { motion } from "motion/react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = memo(({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="inline-flex flex-nowrap items-center gap-1.5 rounded-full border border-border bg-surface p-1 overflow-x-auto scrollbar-none max-w-full">
      <button
        type="button"
        onClick={() => onCategoryChange(null)}
        className="relative shrink-0 rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-wide outline-none transition-colors duration-200"
      >
        {activeCategory === null && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 rounded-full bg-foreground"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <span className={`relative z-10 ${activeCategory === null ? "text-background" : "text-foreground-muted hover:text-foreground"}`}>
          All
        </span>
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className="relative shrink-0 rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-wide outline-none transition-colors duration-200"
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 rounded-full bg-foreground"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className={`relative z-10 whitespace-nowrap ${activeCategory === category ? "text-background" : "text-foreground-muted hover:text-foreground"}`}>
            {category}
          </span>
        </button>
      ))}
    </div>
  );
});

CategoryFilter.displayName = "CategoryFilter";
export default CategoryFilter;
