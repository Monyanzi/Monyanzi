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
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
            Shipped: PAWZA
          </h2>
          <p className="mt-2 max-w-xl text-base text-foreground-muted">
            A live consumer directory demonstrating how lean teams combine AI coding agents and structured data to ship production software.
          </p>
        </div>

        {/* Top Specification Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-3 font-mono text-[11px] text-foreground-muted">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-foreground">
              Case study 01
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
              <p className="font-mono text-[11px] text-foreground-muted">
                Consumer web application
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                PAWZA pet directory &amp; emergency finder
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Built to solve fragmented local discovery for South African pet owners: combining instant 24/7 veterinary triage with verified dog-friendly venues.
              </p>

              {/* 4 Architectural Pillars */}
              <dl className="mt-6 divide-y divide-border border-y border-border">
                {PILLARS.map(({ title, description }) => (
                  <div key={title} className="py-3">
                    <dt className="font-medium text-foreground text-sm">{title}</dt>
                    <dd className="text-sm text-foreground-muted mt-0.5">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 flex items-center">
              <a
                href="https://pawza.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent"
              >
                Visit PAWZA
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Clean Editorial Plate */}
          <a
            href="https://pawza.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-muted">
              <img
                src={pawzaPreview}
                alt="PAWZA live application interface preview"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-foreground-muted">
              <span>PAWZA, live in South Africa</span>
              <span className="inline-flex items-center gap-1 text-foreground group-hover:text-accent transition-colors">
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
