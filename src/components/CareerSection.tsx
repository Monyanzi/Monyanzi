const careerMilestones = [
  {
    period: "Sep 2021 — Jul 2025",
    role: "Senior Manager, Treaty Reinsurance",
    company: "Leading Reinsurance Firm",
    achievements: [
      "Led M&A integration of acquired reinsurance portfolios worth $50M+",
      "Automated analytics workflows reducing reporting time by 60%",
      "Deployed enterprise risk management systems across 3 markets"
    ],
    isCurrent: true
  },
  {
    period: "2018 — 2021",
    role: "Manager, Actuarial Services",
    company: "Insurance Corporation",
    achievements: [
      "Managed capital optimization initiatives for life & non-life portfolios",
      "Developed pricing models for specialty lines products",
      "Led regulatory capital compliance projects"
    ]
  },
  {
    period: "2015 — 2018",
    role: "Senior Actuarial Analyst",
    company: "Global Insurance Group",
    achievements: [
      "Built reserving models for long-tail liability classes",
      "Supported IFRS 17 implementation readiness assessments",
      "Mentored junior actuarial team members"
    ]
  }
];

const CareerSection = () => {
  return (
    <section id="track-record" className="py-24 lg:py-32 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Section header */}
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Track Record
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Career Excellence
          </h2>
          <div className="w-16 h-px bg-foreground/20 mb-16" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-[140px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {careerMilestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-[140px_1fr] lg:gap-12">
                {/* Period */}
                <div className="hidden lg:block text-right">
                  <span className="text-sm text-muted-foreground font-medium">
                    {milestone.period}
                  </span>
                </div>

                {/* Dot marker */}
                <div 
                  className={`absolute left-0 lg:left-[140px] top-1 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${
                    milestone.isCurrent 
                      ? 'bg-foreground border-foreground' 
                      : 'bg-background border-muted-foreground'
                  }`}
                />

                {/* Content */}
                <div className="pl-0 lg:pl-8">
                  {/* Mobile period */}
                  <span className="lg:hidden text-xs text-muted-foreground font-medium block mb-2">
                    {milestone.period}
                  </span>

                  <div className="executive-card p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground">
                          {milestone.role}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {milestone.company}
                        </p>
                      </div>
                      {milestone.isCurrent && (
                        <span className="px-3 py-1 text-xs font-medium tracking-wide uppercase bg-foreground text-background">
                          Current
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {milestone.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key achievements summary */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Key Achievements
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { metric: "M&A Integration", desc: "Successfully integrated acquired portfolios" },
              { metric: "Analytics Automation", desc: "60% reduction in reporting cycles" },
              { metric: "Systems Deployment", desc: "Enterprise risk platforms across markets" }
            ].map((item, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.metric}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
