import { BookOpenCheck, GitBranch, Radar, RefreshCw } from "lucide-react";

const highlights = [
  {
    label: "Practical",
    detail: "Step-by-step guides you can use today.",
    icon: BookOpenCheck,
  },
  {
    label: "Workflows",
    detail: "End-to-end systems that save time and money.",
    icon: GitBranch,
  },
  {
    label: "Founder-first",
    detail: "Built for small teams and lean budgets.",
    icon: Radar,
  },
  {
    label: "Stay current",
    detail: "Updated regularly as tools and models evolve.",
    icon: RefreshCw,
  },
] as const;

const ExperienceStrip = () => {
  return (
    <section aria-label="Homepage highlights" className="relative z-10 border-b border-border/80 bg-white/55 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4">
          {highlights.map(({ label, detail, icon: Icon }) => (
            <div
              key={label}
              className="grid min-h-[104px] grid-cols-[auto_1fr] gap-4 border-border/80 py-5 md:grid-cols-[auto_1fr] md:border-l md:px-8 md:first:border-l-0 lg:px-10"
            >
              <div className="flex h-9 w-9 items-center justify-center text-accent">
                <Icon className="h-[18px] w-[18px]" />
              </div>
              <div>
                <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.13em] text-foreground">
                  {label}
                </h2>
                <p className="mt-1.5 text-[0.82rem] leading-5 text-foreground-muted">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStrip;
