const expertiseCategories = [
  {
    title: "Actuarial & Risk Architecture",
    skills: [
      "Reinsurance Treaty Structuring ($100M+)",
      "Regulatory Capital Calculation (SCR)",
      "Alternative Risk Transfer (ART)",
      "ORSA & Risk Frameworks",
      "IFRS 17 Transition",
      "Crisis Reserving",
      "Contract Analysis"
    ]
  },
  {
    title: "Data Science & Automation",
    skills: [
      "SQL, Python, Power BI, SAS",
      "Workflow Transformation (80% faster)",
      "Process Automation (45% error reduction)",
      "Pricing Platform Implementation",
      "Dashboard Architecture",
      "GenAI Business Solutions",
      "Databricks, Radar Live, Emblem"
    ]
  },
  {
    title: "Corporate Strategy",
    skills: [
      "Blue Ocean Strategy",
      "Business Model Innovation",
      "Strategic Pricing & Game Theory",
      "Macroeconomic Analysis",
      "International Political Analysis",
      "Market Entry & Positioning"
    ]
  },
  {
    title: "Investment & Finance",
    skills: [
      "M&A Due Diligence",
      "Private Equity & Valuation",
      "Derivative Securities Valuation",
      "Portfolio Optimization",
      "Financial Statement Analysis",
      "Capital Structure Advisory"
    ]
  },
  {
    title: "Leadership & Execution",
    skills: [
      "High-Stakes Negotiation",
      "Fundraising & Business Development",
      "Marketing Strategy",
      "Change Leadership",
      "Stakeholder Management",
      "Team Transformation"
    ]
  }
];

const industries = [
  "Life Insurance",
  "Non-Life Insurance", 
  "Reinsurance",
  "Private Equity",
  "Asset Management",
  "Pension Funds"
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
            Expertise
          </h2>
          <div className="w-12 h-px bg-foreground/20" />
        </div>

        {/* Skills grid - 5 columns on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {expertiseCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-background p-6 lg:p-8"
            >
              <h3 className="text-xs font-medium tracking-wide uppercase text-foreground mb-5">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="text-xs text-muted-foreground leading-relaxed"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industries served */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Industries
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {industries.map((industry, i) => (
              <span 
                key={i}
                className="text-sm text-muted-foreground"
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
