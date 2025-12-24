import { useEffect, useState } from "react";

interface Achievement {
    headline: string;
    description: string;
    detail: string;
    context: string;
}

const achievements: Achievement[] = [
    {
        headline: "80% Faster",
        description: "Migrated portfolio analytics from Excel to SQL & Power BI",
        detail: "45% fewer errors • 30% capacity released",
        context: "Major insurance group"
    },
    {
        headline: "6 Months → 24 Hours",
        description: "Led pricing platform rollout for real-time deployment",
        detail: "Enabled rapid market response",
        context: "Leading insurer"
    },
    {
        headline: "$100M+ Managed",
        description: "Evaluated and optimised treaty effectiveness for multi-line reinsurance portfolio",
        detail: "Drove strategic adjustments improving Return on Capital",
        context: "Old Mutual Insure (2021-2025)"
    },
    {
        headline: "M&A Ready",
        description: "INSEAD-trained M&A analysis: Cash Flow Valuation, capital structure review, and risk assessment",
        detail: "Enhanced deal structuring through actuarial lens",
        context: "INSEAD GEMBA coursework + industry application"
    },
    {
        headline: "AI Strategy Trained",
        description: "INSEAD GenAI for Business: Framework for evaluating and deploying AI in enterprise contexts",
        detail: "Identifying where AI adds value vs. hype",
        context: "INSEAD Executive Education"
    }
];

const ProofSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="proof" className="py-24 lg:py-32 bg-background border-b border-border overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 mx-auto w-fit">
                        Why Clients Trust My Judgement
                    </p>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
                        Results I've Delivered
                    </h2>
                    <div className="w-12 h-px bg-foreground/20 mx-auto" />
                </div>

                {/* Achievement Cards - Top Row (3 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {achievements.slice(0, 3).map((achievement, index) => (
                        <div
                            key={achievement.headline}
                            className={`group p-8 rounded-2xl border bg-card border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="text-3xl font-display font-bold text-[hsl(38,82%,50%)] mb-4">
                                {achievement.headline}
                            </div>
                            <p className="text-sm text-foreground font-medium mb-3 leading-relaxed">
                                {achievement.description}
                            </p>
                            <p className="text-xs text-muted-foreground mb-4">
                                {achievement.detail}
                            </p>
                            <p className="text-xs text-muted-foreground/60 italic">
                                {achievement.context}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Achievement Cards - Bottom Row (2 cards, centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                    {achievements.slice(3).map((achievement, index) => (
                        <div
                            key={achievement.headline}
                            className={`group p-8 rounded-2xl border bg-card border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                        >
                            <div className="text-3xl font-display font-bold text-[hsl(38,82%,50%)] mb-4">
                                {achievement.headline}
                            </div>
                            <p className="text-sm text-foreground font-medium mb-3 leading-relaxed">
                                {achievement.description}
                            </p>
                            <p className="text-xs text-muted-foreground mb-4">
                                {achievement.detail}
                            </p>
                            <p className="text-xs text-muted-foreground/60 italic">
                                {achievement.context}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Context footer */}
                <p className="text-center text-xs text-muted-foreground/60 mt-8 italic">
                    Results from leadership roles and independent consulting. Client details confidential.
                </p>
            </div>
        </section>
    );
};

export default ProofSection;
