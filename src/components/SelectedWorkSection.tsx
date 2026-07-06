import { ExternalLink } from "lucide-react";
import pawzaPreview from "@/assets/pawza_preview.png";

const builds = [
  {
    title: "PAWZA",
    type: "In progress",
    href: "https://pawza.lovable.app",
    status: "Live" as const,
    summary: "A pet-friendly discovery build exploring how niche directories can become useful, lightweight decision tools.",
  },
] as const;

const projectStats = [
  { label: "Mode", value: "Directory" },
  { label: "Focus", value: "Pet-friendly" },
  { label: "Stack", value: "Lovable" },
] as const;

const SelectedWorkSection = () => {
  return (
    <section id="work" className="relative py-14 lg:py-18">
      <div className="page-container relative z-10">
        <div className="mb-8 grid gap-4 border-t border-border/80 pt-8 lg:grid-cols-[0.88fr_1fr] lg:items-end">
          <div>
            <p className="label-mono mb-3">Selected Work</p>
            <h2 className="text-[2.25rem] font-bold leading-tight text-foreground sm:text-[3rem]">
              Pet Project in the Lab
            </h2>
          </div>
          <p className="max-w-xl text-[0.98rem] leading-7 text-foreground-muted lg:justify-self-end">
            A live build gets more useful than a portfolio thumbnail. PAWZA stays on the homepage as the working example of the systems and product thinking behind the articles.
          </p>
        </div>

        {builds.map(({ title, type, href, status, summary }) => (
          <a
            key={title}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group grid overflow-hidden rounded-[2rem] border border-white/70 bg-[#171717] shadow-[0_34px_90px_-56px_rgba(17,17,17,0.95)] transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[520px]">
              <img
                src={pawzaPreview}
                alt={`${title} Preview`}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.68),rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.02))]" />
              <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2 sm:left-7 sm:top-7">
                <span className="badge-category !border-white/20 !bg-white/10 !text-white/90">
                  {type}
                </span>
                <span className="badge-category !border-white/20 !bg-white/10 !text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-light shadow-[0_0_8px_hsl(var(--accent-light))] animate-pulse-scale" />
                  {status}
                </span>
              </div>
            </div>

            <div className="flex min-h-[420px] flex-col justify-between bg-[#161616] p-6 text-white sm:p-8 lg:p-10">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white/52">
                  Working build
                </p>
                <h3 className="mt-4 text-[3rem] font-bold leading-none text-white sm:text-[4.5rem]">
                  {title}
                </h3>
                <p className="mt-6 max-w-md text-[1rem] leading-7 text-white/68">
                  {summary}
                </p>
              </div>

              <div>
                <div className="my-8 grid grid-cols-3 border-y border-white/12">
                  {projectStats.map((stat) => (
                    <div key={stat.label} className="py-4 pr-3 [&+&]:border-l [&+&]:border-white/12 [&+&]:pl-3">
                      <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-white/42">
                        {stat.label}
                      </span>
                      <span className="mt-2 block text-[0.9rem] font-bold leading-tight text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-[13px] font-bold text-white/90 transition-all duration-300 group-hover:gap-3">
                  Visit site
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorkSection;
