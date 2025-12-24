import { useEffect, useState } from "react";

const services = [
  "Independent Consulting",
  "Strategic Advisory",
  "Capital Strategy",
  "Portfolio Review"
];

const deliveryPoints = [
  {
    title: "Proven Track Record",
    description: "Accelerated rate deployment from 6 months to 24 hours. Cut analytical turnaround by 80% through process automation."
  },
  {
    title: "Rigour",
    description: "Actuary + MBA. Financial models that hold up to board scrutiny."
  },
  {
    title: "Execution",
    description: "Not just strategy: I build what I recommend."
  }
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 mx-auto w-fit">
            Who You Work With
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Your Advisor
          </h2>
          <div className="w-16 h-px bg-[hsl(38,82%,50%)] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column: What You Get + How I Deliver */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* What You Get card */}
            <div className="p-8 rounded-2xl bg-[hsl(160,15%,96%)] border border-border">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="text-[hsl(38,82%,50%)]">◈</span>
                What You Get
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Capital strategy, M&A due diligence, portfolio stress-testing, and pricing models.
                Clear analysis. Fast turnaround. Decisions you can defend.
              </p>
            </div>

            {/* How I Deliver card */}
            <div className="p-8 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="text-[hsl(38,82%,50%)]">↗</span>
                How I Deliver
              </h3>
              <ul className="space-y-4">
                {deliveryPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,82%,50%)] mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">{point.title}:</strong>
                      <span className="text-muted-foreground ml-1">{point.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: Credibility + Services */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Credibility card */}
            <div className="p-8 rounded-2xl bg-[hsl(160,45%,12%)] text-white">
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-3">
                <span className="text-[hsl(38,82%,50%)]">∑</span>
                Why I'm Credible
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Actuary with an MBA. I work at the intersection of
                investment analysis, risk quantification, capital allocation, and technology, ensuring
                your decisions are disciplined, data-driven, and defensible to your stakeholders.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm text-white/90">Actuary</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm text-white/90">Executive MBA</span>
                <span className="px-4 py-2 rounded-full bg-[hsl(38,82%,50%)]/20 text-sm text-[hsl(38,82%,50%)]">$100M+ Managed</span>
              </div>
            </div>

            {/* Services */}
            <div className="p-8 rounded-2xl border border-border bg-white">
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Where Clients Bring Me In
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <a
                    key={service}
                    href={`mailto:moses.k.nyanzi@gmail.com?subject=Enquiry: ${service}`}
                    className="p-4 rounded-xl border border-border text-sm text-foreground hover:border-[hsl(38,82%,50%)]/50 hover:bg-[hsl(38,82%,50%)]/5 transition-all duration-300 text-center"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
