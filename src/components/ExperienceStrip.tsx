const highlights = [
  {
    index: "01",
    label: "Tested in production",
    detail: "Run in live client systems, not synthetic benchmarks.",
  },
  {
    index: "02",
    label: "Built for small teams",
    detail: "Tailored for lean operations with 1 to 10 people.",
  },
  {
    index: "03",
    label: "Working code & prompts",
    detail: "Ready to copy, adapt, and deploy immediately.",
  },
  {
    index: "04",
    label: "Updated monthly",
    detail: "Re-tested whenever model capabilities shift.",
  },
] as const;

const ExperienceStrip = () => {
  return (
    <section aria-label="Editorial standards" className="relative z-10 border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {highlights.map(({ index, label, detail }) => (
            <div
              key={label}
              className="py-5 md:px-6 md:first:pl-0 md:last:pr-0 lg:py-6 lg:px-8"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-[11px] font-medium text-accent tabular-nums">
                  {index}
                </span>
                <h2 className="text-xs font-semibold text-foreground">
                  {label}
                </h2>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStrip;