import { memo } from "react";
import { ChevronDown } from "lucide-react";

export type SortOption = "default" | "alphabetical";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortSelect = memo(({ value, onChange }: SortSelectProps) => {
  return (
    <div className="relative">
      <select
        aria-label="Sort insights"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none rounded border border-border bg-surface py-1.5 pl-3 pr-8 font-mono text-[11px] uppercase tracking-wider text-foreground outline-none transition-colors duration-150 hover:border-border-strong focus:border-border-strong cursor-pointer"
      >
        <option value="default">Sort: Latest</option>
        <option value="alphabetical">Sort: A–Z</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-foreground-subtle" />
    </div>
  );
});

SortSelect.displayName = "SortSelect";
export default SortSelect;