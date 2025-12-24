const expertiseCategories = [
  {
    title: "Actuarial",
    skills: [
      "Reserving & IBNR Analysis",
      "Pricing & Product Development",
      "Experience Studies",
      "IFRS 17 Implementation",
      "Embedded Value Calculations",
      "Capital Modeling"
    ]
  },
  {
    title: "Financial",
    skills: [
      "Asset-Liability Management",
      "Investment Strategy",
      "Portfolio Optimization",
      "Risk-Adjusted Returns",
      "Capital Allocation",
      "Solvency Assessment"
    ]
  },
  {
    title: "Strategic",
    skills: [
      "M&A Due Diligence",
      "Market Entry Analysis",
      "Business Case Development",
      "Regulatory Strategy",
      "Growth Planning",
      "Stakeholder Management"
    ]
  },
  {
    title: "Technical",
    skills: [
      "SQL & Database Design",
      "Python (Pandas, NumPy)",
      "Power BI & Visualization",
      "Excel VBA & Macros",
      "Risk Management Systems",
      "Actuarial Software"
    ]
  }
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-4xl mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Capabilities
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Expertise Matrix
          </h2>
          <div className="w-16 h-px bg-foreground/20" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {expertiseCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-background p-8 lg:p-10"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industries served */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Industries Served
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              "Life Insurance",
              "Non-Life Insurance", 
              "Reinsurance",
              "Asset Management",
              "Pension Funds",
              "Financial Services"
            ].map((industry, i) => (
              <span 
                key={i}
                className="px-5 py-2.5 text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
