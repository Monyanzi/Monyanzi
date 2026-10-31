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
        className="flex h-7 w-7 items-center justify-center rounded-md border border-white/20 bg-black/60 text-white transition-colors duration-150 hover:bg-black/70"
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
                className="h-full w-full object-cover"
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
                  <span className="font-mono text-[11px] text-foreground-muted">{category}</span>
                  <span className="text-accent font-medium">Featured</span>
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
              <span>Read guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </a>
      </article>
    );
  }

  return (
    <a
      href={`/insights/${id}`}
      className="group grid gap-2 py-6 lg:grid-cols-[9rem_1fr_6rem] lg:gap-8 items-baseline transition-colors duration-150"
    >
      <div className="font-mono text-[11px] text-foreground-muted">
        {category}
      </div>

      <div>
        <h2 className="font-display text-2xl font-medium leading-tight text-foreground transition-colors duration-150 group-hover:text-accent">
          {title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
          {description}
        </p>
      </div>

      <div className="font-mono text-xs text-foreground-muted lg:text-right">
        {readingTime ? `${readingTime} min` : ""}
      </div>
    </a>
  );
});

ArticleCard.displayName = "ArticleCard";
export default ArticleCard;
