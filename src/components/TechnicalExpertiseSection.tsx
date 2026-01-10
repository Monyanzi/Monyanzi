import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import reinsuranceTowerImg from "../assets/reinsurance-tower.png";
import valueStickImg from "../assets/value-stick.png";
import theoryOfConstraintsImg from "../assets/theory-of-constraints.png";

/**
 * Technical Expertise Section - Light theme version
 * Showcases domain-specific knowledge through visual diagrams
 * Now using premium generated images for cleaner presentation
 */
const TechnicalExpertiseSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const gradientY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={sectionRef}
            className="py-12 lg:py-16 relative overflow-hidden"
            style={{ background: "hsl(210 45% 96%)" }}
        >
            {/* Parallax gradient overlay */}
            <motion.div
                style={{ y: gradientY }}
                className="absolute inset-0 pointer-events-none will-change-transform"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
            </motion.div>

            {/* Floating shapes */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.06 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full will-change-transform pointer-events-none"
                style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
            />

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.05 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full will-change-transform pointer-events-none"
                style={{ background: "radial-gradient(circle, hsl(var(--forest)) 0%, transparent 70%)" }}
            />

            {/* Dot texture */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(hsl(var(--navy)) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative">
                {/* Section header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-medium tracking-[0.3em] uppercase mb-4 mx-auto w-fit"
                        style={{ color: "hsl(var(--gold))" }}
                    >
                        Domain Expertise
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-4 tracking-tight"
                    >
                        Technical Depth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Beyond strategy: hands-on expertise in regulatory capital and risk transfer structures.
                    </motion.p>
                </div>

                {/* Bento Grid - 3 cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Reinsurance Architecture Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="rounded-2xl overflow-hidden cursor-default bg-white border border-border"
                        style={{
                            boxShadow: "0 8px 32px -12px rgba(0,0,0,0.1)"
                        }}
                    >
                        {/* Context Header */}
                        <div className="p-6 pb-4" style={{ background: "linear-gradient(135deg, hsl(140 18% 40%) 0%, hsl(140 18% 35%) 100%)" }}>
                            <h3 className="font-display text-lg text-white font-semibold mb-2">
                                Reinsurance Architecture
                            </h3>
                            <p className="text-sm text-white/80">
                                Effective reinsurance isn't just buying cover; it's architectural design.
                            </p>
                        </div>

                        {/* The Visual */}
                        <div className="py-4 px-6 bg-[hsl(210_45%_96%)]">
                            <img
                                src={reinsuranceTowerImg}
                                alt="Reinsurance program structure showing layered coverage from retention to catastrophe"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Impact Caption */}
                        <figcaption className="text-xs text-muted-foreground text-center py-3 px-6 italic border-t border-border">
                            Fig 1. Schematic visualising the interplay between Net Retention and Risk Transfer layers.
                        </figcaption>
                        {/* Executive Summary */}
                        <div className="px-6 py-4 bg-[hsl(var(--gold)/0.08)] border-t border-[hsl(var(--gold)/0.2)]">
                            <p className="text-xs font-medium text-foreground text-center">
                                <span className="text-[hsl(var(--gold))] font-semibold">The Bottom Line:</span> Proper layering reduces volatility while freeing capital for growth.
                            </p>
                        </div>
                    </motion.div>

                    {/* SAM Capital Waterfall Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="rounded-2xl overflow-hidden cursor-default bg-white border border-border"
                        style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.1)" }}
                    >
                        {/* Context Header */}
                        <div className="p-6 pb-4" style={{ background: "linear-gradient(135deg, hsl(210 45% 55%) 0%, hsl(210 45% 48%) 100%)" }}>
                            <h3 className="font-display text-lg text-white font-semibold mb-2">
                                Pricing Strategy
                            </h3>
                            <p className="text-sm text-white/80">
                                Understanding value creation and capture is fundamental to sustainable pricing.
                            </p>
                        </div>

                        {/* The Visual */}
                        <div className="py-4 px-6 bg-[hsl(210_45%_96%)]">
                            <img
                                src={valueStickImg}
                                alt="Value Stick framework showing how value is divided between customers and firm"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Impact Caption */}
                        <figcaption className="text-xs text-muted-foreground text-center py-3 px-6 italic border-t border-border">
                            Fig 2. The Value Stick: visualising how total value created is distributed across stakeholders.
                        </figcaption>
                        {/* Executive Summary */}
                        <div className="px-6 py-4 bg-[hsl(var(--gold)/0.08)] border-t border-[hsl(var(--gold)/0.2)]">
                            <p className="text-xs font-medium text-foreground text-center">
                                <span className="text-[hsl(var(--gold))] font-semibold">The Bottom Line:</span> Great pricing expands customer value while capturing firm margin.
                            </p>
                        </div>
                    </motion.div>

                    {/* Theory of Constraints Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="rounded-2xl overflow-hidden cursor-default bg-white border border-border"
                        style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.1)" }}
                    >
                        {/* Context Header */}
                        <div className="p-6 pb-4" style={{ background: "linear-gradient(135deg, hsl(20 55% 53%) 0%, hsl(20 55% 45%) 100%)" }}>
                            <h3 className="font-display text-lg text-white font-semibold mb-2">
                                Bottleneck Analysis
                            </h3>
                            <p className="text-sm text-white/80">
                                Every system has a constraint. Find it, fix it, repeat.
                            </p>
                        </div>

                        {/* The Visual */}
                        <div className="py-4 px-6 bg-[hsl(210_45%_96%)]">
                            <img
                                src={theoryOfConstraintsImg}
                                alt="Theory of Constraints showing the 5 focusing steps for continuous improvement"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Impact Caption */}
                        <figcaption className="text-xs text-muted-foreground text-center py-3 px-6 italic border-t border-border">
                            Fig 3. The 5 Focusing Steps: a systematic approach to throughput improvement.
                        </figcaption>
                        {/* Executive Summary */}
                        <div className="px-6 py-4 bg-[hsl(var(--gold)/0.08)] border-t border-[hsl(var(--gold)/0.2)]">
                            <p className="text-xs font-medium text-foreground text-center">
                                <span className="text-[hsl(var(--gold))] font-semibold">The Bottom Line:</span> Focus on the constraint—everything else is noise.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom context */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto"
                >
                    These frameworks guide my approach to solving complex business problems.
                </motion.p>
            </div>
        </section>
    );
};

export default TechnicalExpertiseSection;
