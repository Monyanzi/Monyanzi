import { ArrowUpRight, MapPin, Siren, ShieldCheck, PackageCheck } from "lucide-react";
import pawzaPreview from "@/assets/pawza_preview.jpg";

const PILLARS = [
  {
    index: "01",
    icon: MapPin,
    title: "Verified Places",
    description: "Pet-friendly cafes, restaurants, parks, and trails.",
  },
  {
    index: "02",
    icon: Siren,
    title: "24/7 Emergency Vets",
    description: "Animal hospitals and after-hours emergency hotlines.",
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Preventative Care",
    description: "Vaccination schedules, checkup checklists, and diet guides.",
  },
  {
    index: "04",
    icon: PackageCheck,
    title: "Vetted Essentials",
    description: "Nutrition, travel gear, and supplies tested by owners.",
  },
] as const;

const SelectedWorkSection = () => {
  return (
    <section id="work" className="relative border-b border-border/70 py-16 lg:py-24">
      <div className="page-container relative z-10">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Shipped: PAWZA
          </h2>
          <p className="mt-3 max-w-xl text-base sm:text-lg text-foreground-muted">
            Consumer directory built with AI coding agents and structured data.
          </p>
        </div>

        {/* Top Specification Bar */}
        <div className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-2xl px-6 py-3.5 font-mono text-[11px] text-foreground-muted">
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
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-14 py-10 items-start">
          {/* Left: Product Architecture & Specs */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="glass-pill inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium text-foreground-muted">
                Web application
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                PAWZA directory and emergency triage
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground-muted">
                Pet discovery and 24/7 emergency veterinary triage.
              </p>

              {/* 4 Architectural Pillars with Multi-Icon System */}
              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PILLARS.map(({ index, icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="glass-card group rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-craft-hover"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent transition-transform duration-200 group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[10px] text-foreground-subtle tabular-nums">
                        {index}
                      </span>
                    </div>
                    <dt className="font-semibold text-foreground text-xs sm:text-sm">{title}</dt>
                    <dd className="text-xs text-foreground-muted mt-1.5 leading-relaxed">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 flex items-center">
              <a
                href="https://pawza.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-keycap transition-all duration-200 hover:bg-accent hover:shadow-[0_4px_20px_rgba(0,113,227,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Visit PAWZA
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Jony Ive Machined Application Window Frame */}
          <a
            href="https://pawza.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel group block overflow-hidden rounded-3xl p-3 sm:p-4 shadow-craft transition-all duration-500 hover:shadow-craft-hover hover:-translate-y-1"
          >
            {/* Window titlebar */}
            <div className="flex items-center justify-between rounded-t-2xl border-b border-border/60 bg-surface-2/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong/60" />
              </div>
              <div className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-[10px] text-foreground-muted">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>pawza.lovable.app</span>
              </div>
              <div className="w-8" />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-2xl bg-muted">
              <img
                src={pawzaPreview}
                alt="PAWZA live application interface preview"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex items-center justify-between px-3 py-3 font-mono text-[11px] text-foreground-muted">
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
