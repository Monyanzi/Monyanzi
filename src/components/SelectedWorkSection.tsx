import { ArrowUpRight } from "lucide-react";
import pawzaPreview from "@/assets/pawza_preview.jpg";

const PILLARS = [
  {
    index: "01",
    title: "Verified Places",
    description: "Pet-friendly cafes, restaurants, parks, and trails.",
  },
  {
    index: "02",
    title: "24/7 Emergency Vets",
    description: "Animal hospitals and after-hours emergency hotlines.",
  },
  {
    index: "03",
    title: "Preventative Care",
    description: "Vaccination schedules, checkup checklists, and diet guides.",
  },
  {
    index: "04",
    title: "Vetted Essentials",
    description: "Nutrition, travel gear, and supplies tested by owners.",
  },
] as const;

const SelectedWorkSection = () => {
  return (
    <section id="work" className="relative border-b border-border py-14 lg:py-20">
      <div className="page-container relative z-10">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
            Shipped: PAWZA
          </h2>
          <p className="mt-2 max-w-xl text-base text-foreground-muted">
            Consumer directory built with AI coding agents and structured data.
          </p>
        </div>

        {/* Top Specification Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/80 bg-surface/70 px-5 py-3 font-mono text-[11px] text-foreground-muted shadow-sm backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-foreground">
              Case study 01
            </span>
            <span className="text-border-strong">/</span>
            <span>Live in South Africa</span>
            <span className="hidden sm:inline text-border-strong">/</span>
            <span className="hidden sm:inline">Stack: React &middot; TypeScript &middot; Vite &middot; Lovable</span>
          </div>

          <a
            href="https://pawza.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-accent hover:text-foreground transition-colors"
          >
            <span>pawza.lovable.app</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Main Content Split */}
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 py-8 items-start">
          {/* Left: Product Architecture & Specs */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                Web application
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                PAWZA directory and emergency triage
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground-muted">
                Pet discovery and 24/7 emergency veterinary triage.
              </p>

              {/* 4 Architectural Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PILLARS.map(({ title, description }) => (
                  <div key={title} className="rounded-lg border border-border/70 bg-surface/70 p-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    <dt className="font-semibold text-foreground text-xs">{title}</dt>
                    <dd className="text-xs text-foreground-muted mt-1 leading-relaxed">
                      {description}
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center">
              <a
                href="https://pawza.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-keycap transition-all duration-150 hover:bg-accent hover:shadow-[0_4px_16px_rgba(18,74,44,0.28)] active:scale-[0.98]"
              >
                Visit PAWZA
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Clean Editorial Application Window */}
          <a
            href="https://pawza.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-craft transition-all duration-300 hover:shadow-craft-hover hover:-translate-y-0.5"
          >
            {/* Window titlebar */}
            <div className="flex items-center justify-between border-b border-border/60 bg-surface-2/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-border-strong/50" />
                <span className="h-2 w-2 rounded-full bg-border-strong/50" />
                <span className="h-2 w-2 rounded-full bg-border-strong/50" />
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/90 px-3 py-0.5 font-mono text-[10px] text-foreground-muted shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>pawza.lovable.app</span>
              </div>
              <div className="w-8" />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
              <img
                src={pawzaPreview}
                alt="PAWZA live application interface preview"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex items-center justify-between border-t border-border/60 bg-surface px-4 py-3 font-mono text-[11px] text-foreground-muted">
              <span>PAWZA, South Africa</span>
              <span className="inline-flex items-center gap-1 font-medium text-foreground group-hover:text-accent transition-colors">
                Open site
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
