import { ExternalLink } from "lucide-react";
import pawzaPreview from "@/assets/pawza_preview.png";

const builds = [
  {
    title: "PAWZA",
    type: "In progress",
    href: "https://pawza.lovable.app",
    status: "Live" as const,
  },
] as const;

const SelectedWorkSection = () => {
  return (
    <section id="work" className="relative py-section">
      <div className="page-container relative z-10">
        <div className="mb-8">
          <p className="label-mono mb-4">Selected Work</p>
          <h2 className="text-display-md text-balance text-foreground">
            Pet Project in the Lab
          </h2>
        </div>

        <div className="flex justify-center border-t border-border pt-8">
          {builds.map(({ title, type, href, status }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block w-full"
            >
              <div className="relative overflow-hidden rounded-[2rem] min-h-[400px] lg:min-h-[480px] flex items-end w-full max-w-4xl mx-auto border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_hsl(var(--jacarta)/0.3)]">
                {/* Background image */}
                <img
                  src={pawzaPreview}
                  alt={`${title} Preview`}
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Content overlaid */}
                <div className="relative z-10 p-8 lg:p-12 w-full">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="badge-category !border-white/20 !bg-white/10 !text-white/90 backdrop-blur-md">
                      {type}
                    </span>
                  <span className="badge-category !border-white/20 !bg-white/10 !text-white/90 backdrop-blur-md flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-light shadow-[0_0_8px_hsl(var(--accent-light))] animate-pulse-scale" />
                      {status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-6 text-display-sm text-white text-balance transition-colors duration-200">
                    {title}
                  </h3>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 transition-all duration-300 group-hover:gap-3">
                    Visit site
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
