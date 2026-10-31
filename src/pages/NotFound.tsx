import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { SITE_NAME } from "@/config/site";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{`Page Not Found | ${SITE_NAME}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-20">
        <div className="max-w-md text-center border border-border bg-surface p-8 sm:p-10 rounded-lg">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-2">
            Error 404
          </p>
          <h1 className="font-display text-3xl font-medium text-foreground mb-3">
            Dispatch not found
          </h1>
          <p className="mb-8 text-xs sm:text-sm leading-relaxed text-foreground-muted">
            The page you requested does not exist or has been relocated in the archive.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded bg-foreground px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Return to Index
            </a>
            <a
              href="/insights"
              className="inline-flex items-center gap-2 rounded border border-border bg-background px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-border-strong"
            >
              Browse Field Guides
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
