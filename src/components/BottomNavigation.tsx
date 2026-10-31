import { useCallback, useMemo } from "react";
import { BookOpen, Home, Layers, Search } from "lucide-react";

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: BookOpen, href: "/insights", label: "Guides" },
  { icon: Layers, href: "/stack", label: "Stack" },
] as const;

const BottomNavigation = ({ currentPath }: { currentPath: string }) => {
  const isInsightsPage = currentPath.startsWith("/insights");
  const isStackPage = currentPath.startsWith("/stack");

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
    if (href === "/stack") return isStackPage;
    if (href === "/") return !isInsightsPage && !isStackPage;
    return false;
  }, [isInsightsPage, isStackPage]);

  const navStyle = useMemo(() => ({ paddingBottom: "env(safe-area-inset-bottom)" }), []);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-foreground/10 bg-surface/95 backdrop-blur-md lg:hidden"
      style={navStyle}
      aria-label="Mobile navigation"
    >
      <div className="grid h-18 grid-cols-4 px-2">
        {navItems.map(({ icon: Icon, href, label }) => {
          const active = isActive(href);
          return (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-xl text-center transition-colors duration-200 active:scale-95"
              aria-label={label}
            >
              <Icon
                className="h-5 w-5 transition-colors duration-200"
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

        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-xl text-center text-foreground-subtle transition-colors duration-200 hover:text-foreground active:scale-95"
          aria-label="Search articles"
        >
          <Search className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-[11px] font-semibold">Search</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;
