import { Helmet } from "react-helmet-async";
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
        <div className="max-w-md text-center">
          <p className="font-mono text-xs font-semibold text-accent mb-2">
            Error 404
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-3">
            Page not found
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-foreground-muted">
            The page you requested does not exist or has been relocated in the archive.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Return to index
            </a>
            <a
              href="/insights"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface-2"
            >
              Browse field guides
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
