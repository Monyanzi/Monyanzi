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
    <div className="absolute right-3 top-3 z-10 flex gap-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex h-7 w-7 items-center justify-center rounded border border-white/20 bg-black/60 text-white transition-colors duration-150 hover:bg-black/70"
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
          className="grid overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-150 hover:border-border-strong lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border lg:aspect-auto lg:min-h-[340px] lg:border-b-0 lg:border-r">
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
              <div className="mb-4 flex items-center justify-between border-b border-border/70 pb-3 font-mono text-[11px] tabular-nums">
                <div className="flex items-center gap-2.5">
                  <span className="badge-category">{category}</span>
                  <span className="text-accent font-semibold">Lead Dispatch</span>
                </div>
                {readingTime && (
                  <span className="text-foreground-subtle">{readingTime} min read</span>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-medium leading-[1.12] text-foreground transition-colors duration-150 group-hover:text-accent">
                {title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {description}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border/70 pt-4 font-mono text-xs font-medium text-foreground group-hover:text-accent">
              <span>Read complete guide</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </div>
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className="group h-full">
      <a
        href={`/insights/${id}`}
        className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-150 hover:border-border-strong hover:bg-surface-2/35"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
          {image && (
            <img
              src={image}
              alt={`${title} cover`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}
          <ShareButtons articleUrl={articleUrl} />
        </div>

        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <div className="mb-3 flex items-center justify-between font-mono text-[11px] tabular-nums">
              <span className="badge-category">{category}</span>
              {readingTime && (
                <span className="text-foreground-subtle">{readingTime} min read</span>
              )}
            </div>
            <h2 className="font-display text-xl font-medium leading-[1.18] text-foreground transition-colors duration-150 group-hover:text-accent line-clamp-2">
              {title}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted line-clamp-2">
              {description}
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 font-mono text-xs font-medium text-foreground group-hover:text-accent">
            <span>Read guide</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </div>
        </div>
      </a>
    </article>
  );
});

ArticleCard.displayName = "ArticleCard";
export default ArticleCard;
