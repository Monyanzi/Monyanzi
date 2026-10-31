import { ArrowUpRight } from "lucide-react";
import pawzaPreview from "@/assets/pawza_preview.jpg";

const PILLARS = [
  {
    index: "01",
    title: "Verified Places",
    description: "Pet-friendly cafes, restaurants, parks, and hiking trails across South Africa.",
  },
  {
    index: "02",
    title: "24/7 Emergency Vets",
    description: "Immediate triage directory of animal hospitals and after-hours hotlines.",
  },
  {
    index: "03",
    title: "Preventative Care",
    description: "Structured vaccination schedules, checkup checklists, and local diet guides.",
  },
  {
    index: "04",
    title: "Vetted Essentials",
    description: "Curated nutrition, travel gear, and everyday supplies tested by local owners.",
  },
] as const;

const SelectedWorkSection = () => {
  return (
    <section id="work" className="relative border-b border-border py-14 lg:py-20">
      <div className="page-container relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-border pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="label-eyebrow mb-2">Index 04 / Production Case Study</p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Shipped Software: PAWZA
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-foreground-muted">
            A live consumer directory demonstrating how lean teams combine AI coding agents and structured data to ship production software.
          </p>
        </div>

        {/* Architectural Case Study Ledger */}
        <div className="overflow-hidden rounded-lg border border-border bg-surface">
          {/* Top Specification Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface-2/40 px-6 py-3.5 font-mono text-[11px]">
            <div className="flex flex-wrap items-center gap-4 text-foreground-muted">
              <span className="font-semibold text-foreground">
                Case Study 01
              </span>
              <span className="text-border-strong">/</span>
              <span>Status: Live in South Africa</span>
              <span className="hidden sm:inline text-border-strong">/</span>
              <span className="hidden sm:inline">Stack: React &middot; TypeScript &middot; Vite &middot; Lovable</span>
            </div>

            <a
              href="https://pawza.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-accent hover:text-foreground transition-colors"
            >
              <span>pawza.lovable.app</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Main Content Split */}
          <div className="grid lg:grid-cols-[1fr_1.15fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Left: Product Architecture & Specs */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <p className="font-mono text-[10px] text-accent font-semibold">
                  Consumer Web Application
                </p>
                <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  PAWZA Pet Directory &amp; Emergency Finder
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Built to solve fragmented local discovery for South African pet owners—combining instant 24/7 veterinary triage with verified dog-friendly venues.
                </p>

                {/* 4 Architectural Pillars */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
                  {PILLARS.map(({ index, title, description }) => (
                    <div
                      key={title}
                      className="border-r border-b border-border p-4 bg-background/40"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[10px] font-semibold text-accent tabular-nums">
                          {index}
                        </span>
                        <span className="text-xs font-semibold text-foreground">{title}</span>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-foreground-muted">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://pawza.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent"
                >
                  Launch live application
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <span className="font-mono text-[11px] text-foreground-subtle">
                  Zero-slop production build
                </span>
              </div>
            </div>

            {/* Right: Clean Editorial Plate (No fake browser dots or emoji clutter) */}
            <a
              href="https://pawza.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-surface-2/30 p-6 sm:p-8 lg:p-10 overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded border border-border bg-muted shadow-card">
                <img
                  src={pawzaPreview}
                  alt="PAWZA live application interface preview"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-foreground-muted">
                <span>Fig 1.1 &mdash; PAWZA Regional Discovery &amp; Emergency Triage Interface</span>
                <span className="inline-flex items-center gap-1 text-foreground group-hover:text-accent transition-colors">
                  Inspect live
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
