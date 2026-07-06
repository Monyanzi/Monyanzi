import { ArrowUpRight, Bot, CheckSquare, Clock3 } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const starterPaths = [
  {
    icon: CheckSquare,
    title: "I need a useful first AI workflow",
    detail: "A 3-step workflow combining a prompt optimiser, deep research, and NotebookLM into a single insight engine.",
    href: "/insights/2026-ai-power-workflow",
    cta: "Read the workflow guide",
  },
  {
    icon: Bot,
    title: "I want to try building a tool",
    detail: "Six practical software categories a lean business can use right now, from app builders to automation platforms.",
    href: "/insights/the-small-business-ai-toolkit",
    cta: "Read the toolkit guide",
  },
  {
    icon: Clock3,
    title: "I'm thinking about automating a process",
    detail: "12 warning signs to detect automation misfires early and avoid expensive execution drift.",
    href: "/insights/the-automation-trap",
    cta: "Read the warning signs",
  },
] as const;

const CollaborateSection = () => {
  return (
    <section id="start" className="relative z-10 overflow-hidden pt-12 lg:pt-16">
      <div className="page-container">
        <div className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-[0_28px_80px_-58px_rgba(17,17,17,0.9)] backdrop-blur-3xl sm:p-8 lg:grid-cols-[0.78fr_1fr] lg:p-10">
          <div className="max-w-md">
            <p className="label-mono mb-3">Next Steps</p>
            <h2 className="text-[2rem] font-bold leading-tight text-foreground sm:text-[2.65rem]">
              What to do next.
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-foreground-muted">
              One clear next move beats another folder of AI links. Pick your starting point.
            </p>
          </div>

          <div className="grid gap-3">
            {starterPaths.map(({ icon: Icon, title, detail, href, cta }, index) => (
              <a
                key={title}
                href={href}
                className="group grid min-h-[112px] grid-cols-[auto_1fr_auto] gap-4 rounded-2xl border border-border/70 bg-[#fbfbf8]/86 p-4 shadow-[0_14px_34px_-30px_rgba(17,17,17,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/24 hover:bg-white hover:shadow-[0_22px_54px_-38px_hsl(var(--accent)/0.5)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-foreground-subtle">
                      Path {index + 1}
                    </span>
                  </div>
                  <h3 className="text-[0.98rem] font-bold leading-snug text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-6 text-foreground-muted">
                    {detail}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.07em] text-accent">
                    {cta}
                  </span>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter className="mt-12" />
    </section>
  );
};

export default CollaborateSection;
