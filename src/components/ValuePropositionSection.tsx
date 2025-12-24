const valuePropositions = [
  {
    title: "High-Efficiency Capital Strategist",
    description: "I transform the 'expensive necessity' of risk management into a source of liquidity and speed. While most consultants only identify problems, I engineer the solutions—migrating fragile, manual legacy systems into automated SQL and Power BI ecosystems.",
    metric: "30% staff capacity released • 80% faster reporting cycles"
  },
  {
    title: "Institutional-Grade Deal Architecture",
    description: "For Private Equity and M&A teams, I bridge the critical gap between high-level financial theory and granular actuarial reality. I provide the technical due diligence that generalist consultants cannot, analyzing reinsurance treaties and capital structures to uncover hidden liabilities.",
    metric: "Purchase price adjustments • Integration strategies"
  },
  {
    title: "Regulatory & Capital Optimisation",
    description: "I help C-Suite leaders navigate the tightening web of global regulation (IFRS 17, Solvency II equivalents) not just for compliance, but for competitive advantage. By optimising reinsurance programmes and recalculating SCR, I structure portfolios that maximize Return on Equity.",
    metric: "Minimize dead capital • Maximize ROE"
  }
];

const ValuePropositionSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-4xl mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Value Proposition
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Why Engage Me
          </h2>
          <div className="w-12 h-px bg-foreground/20" />
        </div>

        {/* Value props grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {valuePropositions.map((prop, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-xs font-medium text-muted-foreground/50">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-medium text-foreground leading-snug">
                  {prop.title}
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 pl-8">
                {prop.description}
              </p>
              
              <p className="text-xs font-medium tracking-wide text-foreground/70 pl-8">
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
