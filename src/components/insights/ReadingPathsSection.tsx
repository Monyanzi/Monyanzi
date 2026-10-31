import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { readingPaths } from "@/data/paths";

interface ReadingPathsSectionProps {
  title?: string;
  subtitle?: string;
}

const ReadingPathsSection = memo(({
  title = "Reading sequences",
  subtitle = "Sequences to solve operational bottlenecks.",
}: ReadingPathsSectionProps) => {
  return (
    <section className="py-14 lg:py-20 border-b border-border bg-surface/40">
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

        <ol className="divide-y divide-border border-y border-border">
          {readingPaths.map((path, index) => {
            const firstArticleUrl = `/insights/${path.articleIds[0]}`;
            const number = String(index + 1).padStart(2, "0");
            return (
              <li key={path.id}>
                <a
                  href={firstArticleUrl}
                  className="group grid grid-cols-[3rem_1fr_auto] items-start gap-6 py-6 transition-colors duration-150"
                >
                  <span className="font-mono text-sm text-foreground-muted pt-0.5">
                    {number}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-xl font-medium text-foreground transition-colors duration-150 group-hover:text-accent">
                      {path.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {path.description}
                    </p>
                    {path.toolLogos && path.toolLogos.length > 0 && (
                      <div className="flex items-center gap-1.5 pt-1">
                        {path.toolLogos.map((tool) => (
                          <span
                            key={tool.name}
                            title={tool.name}
                            className="inline-flex h-4 w-4 items-center justify-center opacity-70"
                          >
                            <img src={tool.src} alt={tool.name} className="h-full w-full object-contain" />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted transition-colors duration-150 group-hover:text-foreground pt-1">
                    <span>
                      {path.articleIds.length} parts &middot; {path.durationMinutes} min
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
