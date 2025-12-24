import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CredentialCard from "./CredentialCard";
import ProfilePhoto from "./ProfilePhoto";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <div className="container mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left content */}
          <div className="space-y-10">
            {/* Positioning statement */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Strategic Advisory
              </p>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Moses<br />
                Nyanzi
              </h1>

              <div className="w-16 h-px bg-foreground/20" />
            </div>

            {/* Professional title */}
            <div className="space-y-4 animate-fade-in-delay-1">
              <p className="text-xl lg:text-2xl text-foreground font-light leading-relaxed">
                Actuarial Strategist & Capital Risk Advisor
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                Providing independent consulting in capital strategy, risk management, 
                and portfolio optimization for institutional clients across Africa.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in-delay-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for Engagements</span>
              </div>
            </div>

            {/* Services offered */}
            <div className="flex flex-wrap gap-3 animate-fade-in-delay-2">
              {["Strategic Consulting", "Capital & Risk Advisory", "Portfolio Optimization"].map((service) => (
                <span 
                  key={service}
                  className="px-4 py-2 text-xs font-medium tracking-wide uppercase border border-border text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-delay-3">
              <Button variant="executive" size="xl" className="group">
                Engage for Consulting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="executiveOutline" size="xl">
                View Credentials
              </Button>
            </div>
          </div>

          {/* Right content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <ProfilePhoto />
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mt-24 lg:mt-32">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8 animate-fade-in-delay-3">
            Professional Credentials
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CredentialCard
              metric="8+"
              label="Years Experience"
              sublabel="Actuarial & Risk Strategy"
              delay={400}
            />
            <CredentialCard
              metric="$100M+"
              label="Portfolios Managed"
              sublabel="Across African Markets"
              delay={500}
            />
            <CredentialCard
              metric="INSEAD"
              label="Executive MBA"
              sublabel="Class of 2026"
              delay={600}
            />
            <CredentialCard
              metric="FIA"
              label="Fellow Actuary"
              sublabel="Institute and Faculty of Actuaries"
              delay={700}
            />
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
