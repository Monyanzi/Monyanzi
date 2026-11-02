import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { readingPaths } from "@/data/paths";

interface ReadingPathsSectionProps {
  title?: string;
  subtitle?: string;
}

const ReadingPathsSection = memo(({
  title = "Reading sequences",
  subtitle = "Curated multi-part sequences to solve operational bottlenecks.",
}: ReadingPathsSectionProps) => {
  return (
    <section className="py-14 lg:py-20 border-b border-border/70">
      <div className="page-container">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-xl text-base text-foreground-muted">
              {subtitle}
            </p>
          )}
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {readingPaths.map((path, index) => {
            const firstArticleUrl = `/insights/${path.articleIds[0]}`;
            const number = String(index + 1).padStart(2, "0");
            return (
              <li key={path.id} className="flex">
                <a
                  href={firstArticleUrl}
                  className="glass-card group flex w-full flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-craft-hover"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 font-mono text-xs font-semibold text-accent tabular-nums">
                        {number}
                      </span>
                      <span className="glass-pill rounded-full px-3 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                        {path.articleIds.length} parts &middot; {path.durationMinutes} min
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-medium text-foreground transition-colors duration-150 group-hover:text-accent">
                      {path.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-foreground-muted leading-relaxed">
                      {path.description}
                    </p>

                    {path.toolLogos && path.toolLogos.length > 0 && (
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        {path.toolLogos.map((tool) => (
                          <span
                            key={tool.name}
                            className="glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-medium text-foreground-muted"
                          >
                            <img src={tool.src} alt={tool.name} className="h-3.5 w-3.5 object-contain" />
                            <span>{tool.name}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-border/50 pt-4 font-mono text-xs font-medium text-accent">
                    <span>Start sequence</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </div>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
});

ReadingPathsSection.displayName = "ReadingPathsSection";
export default ReadingPathsSection;
