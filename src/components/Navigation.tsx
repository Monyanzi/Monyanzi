import { useCallback, useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useThrottledScroll } from "@/utils/useThrottledScroll";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/insights" },
] as const;

const SPRING = { stiffness: 200, damping: 28, restDelta: 0.001 } as const;

const MagneticLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const springX = useSpring(0, SPRING);
  const springY = useSpring(0, SPRING);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    springX.set(dx);
    springY.set(dy);
  }, [springX, springY]);

  const handleMouseLeave = useCallback(() => {
    springX.set(0);
    springY.set(0);
  }, [springX, springY]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={(e) => onClick(e, href)}
      style={{ x: springX, y: springY }}
      className="group relative flex items-center rounded-full px-4 py-1.5 text-[13px] font-bold text-foreground-muted transition-all duration-200 hover:bg-white/90 hover:text-foreground hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)]"
    >
      <span className="relative z-10">
        {label}
      </span>
    </motion.a>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const updateScrolled = useCallback(() => {
    setIsScrolled(window.scrollY > 56);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-jacarta to-accent shadow-[0_0_12px_hsl(var(--jacarta)/0.6)]"
        style={{ scaleX }}
      />

      <div
        className={`transition-all duration-500 ${
          isScrolled ? "pt-3 pb-2 border-b border-black/[0.06]" : "pt-5 pb-4"
        }`}
      >
        <div className="page-container">
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={handleLogoClick}
              className="group flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-2 shadow-[0_18px_44px_-36px_rgba(17,17,17,0.9)] backdrop-blur-3xl transition-all duration-300 hover:-translate-y-0.5 hover:border-jacarta/30 hover:bg-white/90 min-h-[44px]"
              aria-label="AI — Home"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-300 group-hover:scale-95">
                <span className="text-[9px] font-bold text-background tracking-tight leading-none">AI</span>
              </div>
              <span className="sr-only">
                Home
              </span>
            </a>

            <motion.div
              className={`nav-pill hidden rounded-full px-2.5 py-2 transition-all duration-500 lg:block ${
                isScrolled ? "scale-[0.98]" : "scale-100"
              }`}
            >
              <nav
                className="flex items-center gap-1"
                aria-label="Primary navigation"
              >
                {navItems.map((item) => (
                  <MagneticLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    onClick={handleNavClick}
                  />
                ))}
              </nav>
            </motion.div>

            <div className="w-[84px] hidden lg:block" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
