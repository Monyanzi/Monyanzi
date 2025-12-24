import { useEffect, useState } from "react";

interface ExpertiseCategory {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    icon: "◈",
    title: "Strategy & Growth",
    description: "Business model innovation and market positioning",
    skills: [
      "Blue Ocean Strategy",
      "Business Model Innovation",
      "M&A Due Diligence",
      "Strategic Pricing",
      "Game Theory Applications"
    ]
  },
  {
    icon: "⚡",
    title: "Operations & Automation",
    description: "Streamlining processes and eliminating waste",
    skills: [
      "Workflow Transformation (80% faster)",
      "Process Automation (45% error reduction)",
      "Dashboard Architecture",
      "Pricing Platform Implementation"
    ]
  },
  {
    icon: "◐",
    title: "Risk & Capital",
    description: "Quantifying uncertainty and optimising structure",
    skills: [
      "Reinsurance Treaty Structuring (managed $100M+ portfolio)",
      "Regulatory Capital (Solvency & Capital)",
      "Private Equity Valuation",
      "Structured Risk Solutions"
    ]
  },
  {
    icon: "∑",
    title: "Analytics & Modelling",
    description: "Turning data into defensible decisions",
    skills: [
      "SQL, Python, Power BI, SAS",
      "Cash Flow Valuation & Modelling",
      "Equity Analysis & Valuation",
      "Scenario Modelling",
      "Macroeconomic & FX Analysis"
    ]
  }
];

const industries = [
  "Private Equity & VC",
  "Banks & Lenders",
  "Asset Managers",
  "Insurance & Reinsurance",
  "Family Offices",
  "Corporates & Conglomerates"
];

const softSkills = "Plus: Executive communication • Stakeholder alignment • Change leadership • Global market insight";

const ExpertiseSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const timers = expertiseCategories.map((_, index) =>
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
    <section id="expertise" className="py-24 lg:py-32 bg-[hsl(160,45%,12%)] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(160,45%,10%)/20] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase mb-4 mx-auto w-fit">
            What I Bring Into the Room
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
            Expertise That Delivers
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Spanning strategy, automation, risk, and analytics: each grounded in real-world execution.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertiseCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group p-8 rounded-2xl border bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl text-[hsl(38,82%,50%)] group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-white font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-1.5">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-xs text-white/40 leading-relaxed">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6 inline-block">
            Industries
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="text-sm text-white/60 hover:text-[hsl(38,82%,50%)] transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
          {/* Soft skills */}
          <p className="text-sm text-white/40 mt-8 italic">
            {softSkills}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
