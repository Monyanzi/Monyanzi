import { MapPin, Users, UserCheck, Briefcase, DollarSign, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricCard from "./MetricCard";
import ProfilePhoto from "./ProfilePhoto";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero geometric-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Name */}
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Strategic Roles
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.9]">
                Moses<br />
                <span className="text-gradient">Nyanzi</span>
              </h1>
            </div>

            {/* Headline */}
            <p className="text-xl lg:text-2xl text-slate-300 font-medium leading-relaxed animate-fade-in-delay-1">
              <span className="text-foreground">Actuarial Strategist</span>
              <span className="mx-3 text-accent">|</span>
              <span className="text-foreground">Capital & Risk Expert</span>
              <span className="mx-3 text-accent">|</span>
              <span className="text-gradient-gold font-semibold">INSEAD EMBA 2026</span>
            </p>

            {/* Location & Stats */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground animate-fade-in-delay-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Johannesburg, South Africa</span>
              </div>
              <span className="hidden sm:block text-border">•</span>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>500+ connections</span>
              </div>
              <span className="hidden sm:block text-border">•</span>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-accent" />
                <span>1,122 followers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
              <Button variant="hero" size="xl" className="group">
                View Full Profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Right content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <ProfilePhoto />
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          <MetricCard
            value="8+"
            label="Years Experience"
            icon={<Briefcase className="w-6 h-6" />}
            delay={100}
          />
          <MetricCard
            value="$100M+"
            label="Portfolio Managed"
            icon={<DollarSign className="w-6 h-6" />}
            delay={200}
          />
          <MetricCard
            value="INSEAD"
            label="Executive MBA 2026"
            icon={<GraduationCap className="w-6 h-6" />}
            delay={300}
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
