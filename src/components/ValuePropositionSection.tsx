import { useEffect, useState } from "react";

interface ValueProp {
  icon: string;
  title: string;
  description: string;
  metric: string;
}

const valuePropositions: ValueProp[] = [
  {
    icon: "◈",
    title: "From vague opportunities to disciplined capital deployment",
    description: "Evaluate deals, optimise capital structures, and identify mispriced opportunities. You get rigorous M&A due diligence and equity valuations that stand up to scrutiny.",
    metric: "M&A Due Diligence • Equity Valuation • Capital Allocation"
  },
  {
    icon: "↗",
    title: "From uncertainty to quantified, board-ready risk positions",
    description: "Stress-test portfolios under realistic scenarios and quantify risk-adjusted returns. I build the models that answer: What's the downside? What's the probability? What should we hedge?",
    metric: "Scenario Modelling • Stress Testing • Portfolio Optimisation"
  },
  {
    icon: "∑",
    title: "From complex data to actionable insights",
    description: "Financial models that drive decisions: Cash Flow Valuations, equity analysis, and strategic pricing frameworks. I translate complex data into insights your team can act on.",
    metric: "Equity Analysis • Derivative Valuation • Strategic Pricing"
  }
];

const ValuePropositionSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const timers = valuePropositions.map((_, index) =>
      setTimeout(() => {
        setVisibleCards(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 150 * index)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[hsl(160,15%,96%)] relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-[hsl(160,10%,50%)] uppercase mb-4 inline-block">
            Where Clients Bring Me In
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Problems I Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complex challenges that require analytical precision and strategic clarity.
          </p>
        </div>

        {/* Value props grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {valuePropositions.map((prop, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-white border border-border hover:border-[hsl(38,82%,50%)]/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl text-[hsl(38,82%,50%)] group-hover:scale-110 transition-transform duration-300">
                  {prop.icon}
                </span>
                <span className="text-xs font-mono text-muted-foreground/50">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground leading-snug mb-4 group-hover:text-[hsl(160,45%,12%)] transition-colors">
                {prop.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {prop.description}
              </p>

              <p className="text-xs font-medium tracking-wide text-[hsl(38,82%,50%)]">
                {prop.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
