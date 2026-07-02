import { useState, useEffect, lazy, Suspense, useMemo } from "react";
import { AnimatePresence } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";
import BottomNavigation from "./components/BottomNavigation";
import PageTransition from "./components/PageTransition";
import { hasAnalyticsConsent } from "./utils/cookieConsent";

const Index = lazy(() => import("./pages/Index"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightArticle = lazy(() => import("./pages/InsightArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "";
const shouldLoadVercelAnalytics = import.meta.env.PROD;
const isInternalRoute = (pathname: string) => pathname === "/" || pathname.startsWith("/insights");
const articlePathRegex = /^\/insights\/(.+?)\/?$/;

const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(hasAnalyticsConsent());
  const shouldLoadGoogleAnalytics = analyticsEnabled && GA_MEASUREMENT_ID.trim().length > 0;

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handleLocationChange);

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    window.history.pushState = function (...args: Parameters<History["pushState"]>) {
      originalPushState.apply(window.history, args);
      handleLocationChange();
    };
    window.history.replaceState = function (...args: Parameters<History["replaceState"]>) {
      originalReplaceState.apply(window.history, args);
      handleLocationChange();
    };

    const handleGlobalClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor || !anchor.href) return;
      if ((anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download")) return;
      if (anchor.origin !== window.location.origin) return;

      const { pathname, hash } = anchor;
      if (!isInternalRoute(pathname)) return;
      if (hash) return;

      const hasSameLocation = pathname === window.location.pathname && hash === window.location.hash;
      if (hasSameLocation) return;

      e.preventDefault();
      window.history.pushState(null, "", anchor.href);
      window.scrollTo(0, 0);
    };

    window.addEventListener("click", handleGlobalClick);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("click", handleGlobalClick);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  const { page, pageKey } = useMemo(() => {
    if (path === "/" || path === "") return { page: <Index />, pageKey: "home" };
    if (path === "/insights" || path === "/insights/") return { page: <Insights />, pageKey: "insights" };

    const articleMatch = path.match(articlePathRegex);
    if (articleMatch) return { page: <InsightArticle slug={articleMatch[1]} />, pageKey: `article-${articleMatch[1]}` };

    return { page: <NotFound />, pageKey: "404" };
  }, [path]);

  return (
    <>
      {shouldLoadVercelAnalytics && <Analytics />}
      {shouldLoadGoogleAnalytics && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
      <Suspense fallback={<main className="min-h-screen pt-10" aria-busy="true" />}>
        <AnimatePresence mode="wait">
          <PageTransition pageKey={pageKey}>
            {page}
          </PageTransition>
        </AnimatePresence>
      </Suspense>
      <BottomNavigation currentPath={path} />
      <CookieConsent onConsentChange={() => setAnalyticsEnabled(hasAnalyticsConsent())} />
    </>
  );
};

export default App;
