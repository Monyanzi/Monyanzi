import { memo, useState, useRef, useId, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

interface GlassTooltipProps {
  content: ReactNode;
  children: ReactNode;
  delay?: number;
  placement?: "top" | "bottom";
  className?: string;
}

export const GlassTooltip = memo(({
  content,
  children,
  delay = 100,
  placement = "top",
  className = "",
}: GlassTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<number | null>(null);
  const tooltipId = useId();

  const handleEnter = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setIsOpen(true), delay);
  };

  const handleLeave = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative flex flex-col ${className}`.trim()}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocusCapture={handleEnter}
      onBlurCapture={handleLeave}
      aria-describedby={isOpen ? tooltipId : undefined}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, y: placement === "top" ? 4 : -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: placement === "top" ? 2 : -2, scale: 0.98 }}
            transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 w-max max-w-[260px] rounded-xl border border-border/85 bg-surface/95 px-3 py-2 font-mono text-[11px] leading-relaxed text-foreground shadow-craft backdrop-blur-xl ${
              placement === "top" ? "bottom-full mb-2.5" : "top-full mt-2.5"
            }`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

GlassTooltip.displayName = "GlassTooltip";
export default GlassTooltip;
