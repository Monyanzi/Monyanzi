import { memo, useCallback, useState } from "react";
import { ArrowRight, Link2, Check } from "lucide-react";
import { SITE_URL } from "@/config/site";
import { READING_TIMES } from "@/data/articleSummaries";

interface ArticleCardProps {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

const ShareButtons = ({ articleUrl }: { articleUrl: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(articleUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => { /* ignore */ });
  }, [articleUrl]);

  return (
    <div className="absolute right-3.5 top-3.5 z-10 flex gap-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/25 bg-black/55 backdrop-blur-md text-white transition-colors duration-150 hover:bg-black/75"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-white" /> : <Link2 className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
};

const ArticleCard = memo(({ id, category, title, description, image, featured = false }: ArticleCardProps) => {
  const articleUrl = `${SITE_URL}/insights/${id}`;
  const readingTime = READING_TIMES[id];

  if (featured) {
    return (
      <article className="group">
        <a
          href={`/insights/${id}`}
          className="glass-card grid overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 lg:aspect-auto lg:min-h-[340px] lg:border-b-0 lg:border-r">
            {image ? (
              <img
                src={image}
                alt={`${title} cover`}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div className="h-full w-full bg-surface-2" />
            )}
            <ShareButtons articleUrl={articleUrl} />
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3.5 font-mono text-[11px] tabular-nums">
                <div className="flex items-center gap-2">
                  <span className="glass-pill rounded-full px-3 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                    {category}
                  </span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] text-accent font-semibold">
                    Featured
                  </span>
                </div>
                {readingTime && (
                  <span className="text-foreground-subtle">{readingTime} min read</span>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-medium leading-[1.12] text-foreground transition-colors duration-150 group-hover:text-accent">
                {title}
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground-muted">
                {description}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-xs font-medium text-accent">
              <span>Read guide</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </article>
    );
  }

  return (
    <a
      href={`/insights/${id}`}
      className="glass-card group grid gap-4 p-5 sm:p-6 rounded-2xl items-center sm:grid-cols-[140px_1fr_auto] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-craft-hover"
    >
      <div className="aspect-[16/10] sm:aspect-[4/3] w-full sm:w-[140px] overflow-hidden rounded-xl border border-border/70 bg-surface-2 shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="h-full w-full bg-surface-2" />
        )}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
            {category}
          </span>
          {readingTime && (
            <span className="font-mono text-[11px] text-foreground-subtle sm:hidden">
              {readingTime} min
            </span>
          )}
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-medium leading-snug text-foreground transition-colors duration-150 group-hover:text-accent">
          {title}
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-foreground-muted line-clamp-2">
          {description}
        </p>
      </div>

      <div className="hidden sm:flex flex-col items-end justify-between h-full py-1 pl-4">
        <span className="font-mono text-[11px] text-foreground-subtle tabular-nums">
          {readingTime ? `${readingTime} min` : ""}
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-surface text-foreground-subtle transition-all duration-150 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
});

ArticleCard.displayName = "ArticleCard";
export default ArticleCard;
