import { useState } from "react";
import { ArrowRight, MapPin, Linkedin } from "lucide-react";
import CredentialCard from "./CredentialCard";
import ProfilePhoto from "./ProfilePhoto";
import DiagnosticFlow from "./DiagnosticFlow";
import heroProfile from "../assets/hero-profile.jpg";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left content */}
            <div className="space-y-8 flex flex-col justify-center">
              {/* Positioning statement */}
              <div className="space-y-5 animate-fade-in">
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
                  Strategy. Logic. Results.
                </p>

                <div className="flex items-baseline gap-4">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
                    Moses<br />
                    Nyanzi
                  </h1>
                  <span className="text-sm text-muted-foreground font-medium">
                    Actuary | MBA
                  </span>
                </div>

                <div className="w-12 h-px bg-foreground/20" />
              </div>

              {/* Mobile Profile Photo - shown only on small screens */}
              <div className="lg:hidden flex justify-center animate-fade-in" style={{ animationDelay: '150ms' }}>
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img
                    src={heroProfile}
                    alt="Moses Nyanzi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Professional title + value statement */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                  For senior leaders who need clarity on complex decisions, fast.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  I bring actuarial precision to strategic decisions. Rigorous analysis,
                  clear recommendations, and insights that hold up to board-level scrutiny.
                </p>
              </div>

              {/* Problem recognition - who this is for */}
              <div className="animate-fade-in rounded-xl bg-[hsl(160,15%,96%)] p-6 border border-border" style={{ animationDelay: '150ms' }}>
                <p className="text-xs font-mono tracking-wide uppercase text-muted-foreground mb-4">
                  I work with leaders facing
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,82%,50%)] mt-1.5 flex-shrink-0" />
                    Strategic decisions that need rigorous analysis before executives commit
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,82%,50%)] mt-1.5 flex-shrink-0" />
                    Operations drowning in manual processes that competitors have automated
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,82%,50%)] mt-1.5 flex-shrink-0" />
                    M&A or capital decisions where missing something means overpaying
                  </li>
                </ul>
              </div>

              {/* Location & Availability */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Johannesburg</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/moses-nyanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[hsl(38,82%,50%)] text-[hsl(160,45%,10%)] font-semibold tracking-wide uppercase text-xs px-8 py-4 rounded-full transition-all duration-300 hover:bg-[hsl(38,82%,55%)] hover:scale-[1.02] hover:shadow-xl group"
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <a
                  href="#proof"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors py-3"
                >
                  See results I've delivered →
                </a>
              </div>
            </div>

            {/* Right content - Profile Photo */}
            <div className="hidden lg:block h-full w-full">
              <ProfilePhoto />
            </div>
          </div>

          {/* Credentials Section */}
          <div className="mt-20 lg:mt-28">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8 text-center">
              Areas of Focus
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              <CredentialCard
                metric="Strategy"
                label="Business & Growth"
                sublabel="Blue Ocean, M&A, Innovation"
                delay={100}
              />
              <CredentialCard
                metric="Operations"
                label="Efficiency & Automation"
                sublabel="Process Optimisation"
                delay={200}
              />
              <CredentialCard
                metric="Risk"
                label="Capital & Due Diligence"
                sublabel="Treaty & M&A Analysis"
                delay={300}
              />
              <CredentialCard
                metric="Analytics"
                label="Data-Driven Decisions"
                sublabel="Modelling & Insights"
                delay={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Flow */}
      <DiagnosticFlow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
