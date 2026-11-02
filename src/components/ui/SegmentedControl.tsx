import { memo } from "react";
import { LayoutGroup, motion } from "motion/react";

export interface SegmentedItem {
  id: string;
  label: string;
  count?: number;
  href?: string;
}

interface SegmentedControlProps {
  items: SegmentedItem[];
  activeId: string;
  onChange?: (id: string) => void;
  layoutGroupId: string;
  ariaLabel?: string;
  className?: string;
}

export const SegmentedControl = memo(({
  items,
  activeId,
  onChange,
  layoutGroupId,
  ariaLabel = "Filter categories",
  className = "",
}: SegmentedControlProps) => {
  return (
    <LayoutGroup id={layoutGroupId}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className={`glass-pill inline-flex flex-nowrap items-center gap-1 overflow-x-auto rounded-full p-1 border border-border/80 scrollbar-none max-w-full ${className}`.trim()}
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          const innerContent = (
            <>
              {isActive && (
                <motion.span
                  layoutId={`${layoutGroupId}-pill`}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  className="pointer-events-none absolute inset-0 rounded-full bg-foreground shadow-xs"
                />
              )}
              <span className="relative z-10">{item.label}</span>
              {item.count !== undefined && (
                <span
                  className={`relative z-10 font-mono text-[10px] tabular-nums transition-colors duration-150 ${
                    isActive ? "text-background/75" : "text-foreground-subtle"
                  }`}
                >
                  {item.count}
                </span>
              )}
            </>
          );

          const sharedClasses = `relative shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-accent cursor-pointer ${
            isActive
              ? "text-background"
              : "text-foreground-muted hover:text-foreground"
          }`;

          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                role="tab"
                aria-selected={isActive}
                className={sharedClasses}
              >
                {innerContent}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange?.(item.id)}
              className={sharedClasses}
            >
              {innerContent}
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
});

SegmentedControl.displayName = "SegmentedControl";
export default SegmentedControl;
