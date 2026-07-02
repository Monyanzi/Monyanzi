import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { SITE_NAME } from "@/config/site";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{`Page Not Found | ${SITE_NAME}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-20">
        <div className="text-center">
          {/* Large 404 */}
          <p className="font-mono text-[10rem] font-bold leading-none text-foreground/5 select-none mb-0">
            404
          </p>
          <div className="-mt-8">
            <h1 className="text-display-sm text-foreground mb-3">Page not found</h1>
            <p className="mb-8 text-foreground-muted">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] font-semibold text-background transition-all duration-300 hover:bg-foreground/85 hover:scale-[0.97]"
              >
                Go Home
              </a>
              <a
                href="/insights"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-[13px] font-semibold text-foreground-muted transition-all duration-300 hover:border-border-strong hover:text-foreground hover:shadow-card"
              >
                Browse Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
