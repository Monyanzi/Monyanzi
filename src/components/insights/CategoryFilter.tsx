import { memo, useMemo } from "react";
import SegmentedControl, { type SegmentedItem } from "@/components/ui/SegmentedControl";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  counts?: Record<string, number>;
  totalCount?: number;
}

const CategoryFilter = memo(({
  categories,
  activeCategory,
  onCategoryChange,
  counts,
  totalCount,
}: CategoryFilterProps) => {
  const items = useMemo<SegmentedItem[]>(() => {
    const allItem: SegmentedItem = {
      id: "__all__",
      label: "All",
      count: totalCount,
    };
    const categoryItems = categories.map((category) => ({
      id: category,
      label: category,
      count: counts?.[category],
    }));
    return [allItem, ...categoryItems];
  }, [categories, counts, totalCount]);

  return (
    <SegmentedControl
      items={items}
      activeId={activeCategory ?? "__all__"}
      onChange={(id) => onChangeCategory(id, onCategoryChange)}
      layoutGroupId="insights-category-segmented"
      ariaLabel="Filter guides by category"
    />
  );
});

function onChangeCategory(id: string, cb: (cat: string | null) => void) {
  cb(id === "__all__" ? null : id);
}

CategoryFilter.displayName = "CategoryFilter";
export default CategoryFilter;
