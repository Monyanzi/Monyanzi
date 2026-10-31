import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { readingPaths } from "@/data/paths";

interface ReadingPathsSectionProps {
  title?: string;
  subtitle?: string;
}

const ReadingPathsSection = memo(({
  title = "Curated Reading Sequences",
  subtitle = "Structured three-part sequences to solve one operational bottleneck from start to finish.",
}: ReadingPathsSectionProps) => {
  return (
    <section className="py-14 lg:py-20 border-b border-border bg-surface/40">
      <div className="page-container">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-end">
          <div>
            <p className="label-eyebrow mb-2">Index 03 / Learning Sequences</p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-foreground-muted">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {readingPaths.map((path, index) => {
            const firstArticleUrl = `/insights/${path.articleIds[0]}`;
            return (
              <a
                key={path.id}
                href={firstArticleUrl}
                className="group relative flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-strong hover:bg-surface-2/40"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between border-b border-border/70 pb-3 font-mono text-[11px] tabular-nums">
                    <span className="font-semibold text-accent">
                      SEQ 0{index + 1} &middot; {path.tagline}
                    </span>
                    <span className="text-foreground-subtle">
                      {path.durationMinutes} min
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium leading-snug text-foreground transition-colors duration-150 group-hover:text-accent">
                    {path.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-foreground-muted">
                    {path.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-foreground-subtle">
                        Tools:
                      </span>
                      <div className="flex -space-x-1 overflow-hidden">
                        {path.toolLogos.map((tool) => (
                          <div
                            key={tool.name}
                            title={tool.name}
                            className="flex h-6 w-6 items-center justify-center rounded border border-border bg-white p-1"
                          >
                            <img src={tool.src} alt={tool.name} className="h-full w-full object-contain" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-foreground group-hover:text-accent">
                      <span>{path.articleIds.length} parts</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
});

ReadingPathsSection.displayName = "ReadingPathsSection";
export default ReadingPathsSection;