import { useCallback, useMemo } from "react";
import { BookOpen, Home } from "lucide-react";

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: BookOpen, href: "/insights", label: "Articles" },
] as const;

const BottomNavigation = ({ currentPath }: { currentPath: string }) => {
  const isInsightsPage = currentPath.startsWith("/insights");

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHome = window.location.pathname === "/" || window.location.pathname === "";
    if (href === "/") {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const isActive = useCallback((href: string) => {
    if (href === "/insights") return isInsightsPage;
    if (href === "/") return !isInsightsPage;
    return false;
  }, [isInsightsPage]);

  const navStyle = useMemo(() => ({ paddingBottom: "env(safe-area-inset-bottom)" }), []);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/50 bg-white/70 backdrop-blur-3xl lg:hidden"
      style={navStyle}
      aria-label="Mobile navigation"
    >
      <div className="grid h-18 grid-cols-2 px-4">
        {navItems.map(({ icon: Icon, href, label }) => {
          const active = isActive(href);
          return (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="flex min-h-[56px] flex-col items-center justify-center gap-1.5 rounded-xl text-center transition-all duration-200 active:scale-95"
              aria-label={label}
            >
              <Icon
                className="h-5.5 w-5.5 transition-colors duration-200"
                style={{ stroke: active ? "hsl(var(--foreground))" : "hsl(var(--foreground-subtle))" }}
                strokeWidth={active ? 2.2 : 1.75}
              />
              <span
                className="text-[11px] font-semibold transition-colors duration-200"
                style={{ color: active ? "hsl(var(--foreground))" : "hsl(var(--foreground-subtle))" }}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
