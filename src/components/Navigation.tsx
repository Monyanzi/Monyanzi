import { useCallback, useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useThrottledScroll } from "@/utils/useThrottledScroll";
import SearchModal from "@/components/SearchModal";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Index", href: "/" },
  { label: "Field Guides", href: "/insights" },
  { label: "2026 Stack", href: "/stack" },
] as const;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const currentPathname = typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const activeTag = document.activeElement?.tagName?.toLowerCase();
        const isEditable = (document.activeElement as HTMLElement)?.isContentEditable;
        if (activeTag !== "input" && activeTag !== "textarea" && activeTag !== "select" && !isEditable) {
          e.preventDefault();
          setIsSearchOpen(true);
        }
      }
    };

    const handleCustomOpen = () => setIsSearchOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleCustomOpen);
    };
  }, []);

  const updateScrolled = useCallback(() => {
    setIsScrolled(window.scrollY > 36);
  }, []);

  useThrottledScroll({ delay: 80, onScroll: updateScrolled });

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHome = window.location.pathname === "/" || window.location.pathname === "";
    if (href === "/") {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (href.startsWith("/#")) {
      if (!isHome) return;
      e.preventDefault();
      const el = document.getElementById(href.slice(2));
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const isRouteActive = (href: string) => {
    if (href === "/") return currentPathname === "/" || currentPathname === "";
    return currentPathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-colors duration-200 border-b ${
          isScrolled
            ? "border-border bg-background py-3"
            : "border-border/50 bg-background py-3.5"
        }`}
      >
        <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={handleLogoClick}
              className="group flex items-baseline gap-2.5 py-1"
              aria-label="AI Founder Garage · Home"
            >
              <span className="font-display text-lg font-medium tracking-tight text-foreground">
                <span>AI</span> Founder Garage
              </span>
            </a>

            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Primary navigation"
            >
              {navItems.map((item, idx) => {
                const active = isRouteActive(item.href);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`inline-flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 ${
                      active
                        ? "bg-surface-2 text-foreground"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-2/60"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-foreground-subtle tabular-nums">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="inline-flex min-h-[36px] items-center gap-2.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground-muted transition-colors duration-150 hover:border-border-strong hover:text-foreground"
                aria-label="Search articles (/)"
              >
                <Search className="h-3.5 w-3.5 text-foreground-subtle" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden sm:inline-flex items-center justify-center rounded border border-border bg-surface-2 px-1.5 py-0.5 text-[10px] font-mono text-foreground-subtle">
                  /
                </kbd>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Navigation;
