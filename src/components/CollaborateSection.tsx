import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";

const starterPaths = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "I need a useful first AI workflow",
    detail: "This guide walks you through a 3-step workflow combining a prompt optimiser, deep research, and NotebookLM into a single insight engine.",
    href: "/insights/2026-ai-power-workflow",
    cta: "Read the workflow guide",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01" />
        <path d="M17 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    title: "I want to try building a tool",
    detail: "Six categories of practical software a lean business can use right now — from app builders to automation platforms.",
    href: "/insights/the-small-business-ai-toolkit",
    cta: "Read the toolkit guide",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "I'm thinking about automating a process",
    detail: "12 practical warning signs to detect automation misfires early and avoid expensive execution drift.",
    href: "/insights/the-automation-trap",
    cta: "Read the warning signs",
  },
] as const;

const CollaborateSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="start" className="relative overflow-hidden pt-12 lg:pt-16 z-10">
      <div className="page-container">
        {/* CTA Panel */}
        <div className="card-premium rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            {/* Left — copy */}
            <div>
              <p className="label-mono mb-2">Next Steps</p>
              <h2 className="text-display-sm text-balance text-foreground mb-3">
                What to do next.
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-foreground-muted">
                One clear next move beats another folder of AI links. Pick your starting point.
              </p>
            </div>

            {/* Right — paths with progressive disclosure */}
            <div className="grid gap-2">
              {starterPaths.map(({ icon, title, detail, href, cta }, index) => (
                <div key={title} className="group">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full text-left flex gap-4 rounded-[1.5rem] glass p-4 transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-foreground-muted transition-colors duration-300 group-hover:border-border-strong group-hover:text-foreground">
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[0.9375rem] font-bold leading-snug text-foreground">
                          {title}
                        </h3>
                        <ArrowUpRight className={`h-4 w-4 shrink-0 text-foreground-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${index % 2 === 0 ? "group-hover:text-accent" : "group-hover:text-jacarta"}`} />
                      </div>
                    </div>
                  </button>

                  {/* Progressive disclosure — expanded detail */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="ml-14 mt-1 rounded-xl bg-jacarta/4 border border-jacarta/8 p-4">
                          <p className="text-[0.8125rem] leading-relaxed text-foreground-muted mb-3">
                            {detail}
                          </p>
                          <a
                            href={href}
                            className={`inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide transition-all duration-300 hover:gap-3 ${index % 2 === 0 ? "text-accent" : "text-jacarta"}`}
                          >
                            {cta}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter className="mt-12" />
    </section>
  );
};

export default CollaborateSection;
