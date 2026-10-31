import { useState, useEffect, useCallback } from "react";
import { Sun, Moon } from "lucide-react";
import { getStoredTheme, getSystemTheme, toggleTheme } from "@/utils/theme";

export const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => {
      const stored = getStoredTheme();
      const effective = stored === "system" ? getSystemTheme() : stored;
      setIsDark(effective === "dark");
    };

    update();
    window.addEventListener("theme-changed", update);
    return () => window.removeEventListener("theme-changed", update);
  }, []);

  const handleToggle = useCallback(() => {
    toggleTheme();
  }, []);

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`inline-flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border border-border bg-surface text-foreground-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;

