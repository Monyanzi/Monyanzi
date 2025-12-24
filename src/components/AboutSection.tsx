const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Section header */}
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            About
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            About My Practice
          </h2>
          <div className="w-16 h-px bg-foreground/20 mb-12" />

          {/* Content paragraphs */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I provide <span className="text-foreground font-medium">strategic actuarial consulting</span> to 
              institutional clients navigating complex risk and capital decisions. My practice sits at the 
              intersection of <span className="text-foreground font-medium">risk management, capital strategy, 
              and investment optimization</span>—where technical rigor meets strategic insight.
            </p>

            <p>
              With over eight years of experience across insurance, reinsurance, and financial services, 
              I've developed deep expertise in <span className="text-foreground font-medium">portfolio 
              optimization</span> and capital efficiency. My approach combines actuarial precision with a 
              data-driven methodology, leveraging advanced analytics through SQL, Python, and Power BI to 
              deliver actionable intelligence.
            </p>

            <p>
              My track record includes managing and advising on portfolios exceeding $100M, driving capital 
              optimization initiatives, and deploying enterprise risk management systems across multiple 
              markets. I bring particular strength in <span className="text-foreground font-medium">M&A 
              integration, analytics automation, and regulatory strategy</span>—capabilities honed through 
              senior leadership roles at leading financial institutions.
            </p>

            <p>
              I am available for independent consulting engagements, strategic advisory mandates, and 
              capital strategy projects. My client base spans <span className="text-foreground font-medium">global 
              institutional clients</span> across insurance, reinsurance, pension funds, and asset management 
              sectors.
            </p>

            <p>
              Currently pursuing an Executive MBA at INSEAD (Class of 2026), I continue to expand my 
              strategic toolkit while maintaining active consulting engagements. Whether you're evaluating 
              an acquisition, optimizing your capital structure, or seeking independent actuarial review, 
              I bring the expertise and perspective to help you make informed decisions.
            </p>
          </div>

          {/* Services available */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Available For
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Independent Consulting",
                "Strategic Advisory",
                "Capital Strategy",
                "Portfolio Review"
              ].map((service) => (
                <span 
                  key={service}
                  className="px-4 py-2 text-sm font-medium border border-border text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
