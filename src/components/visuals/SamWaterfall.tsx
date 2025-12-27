import { motion } from "motion/react";

interface WaterfallBar {
    id: string;
    label: string;
    value: number;
    type: "positive" | "negative" | "total";
    color: string;
}

// Using design system colors
const bars: WaterfallBar[] = [
    {
        id: "assets",
        label: "Total Assets",
        value: 100,
        type: "positive",
        color: "hsl(var(--forest))",
    },
    {
        id: "tech-provisions",
        label: "Technical Provisions",
        value: -45,
        type: "negative",
        color: "hsl(var(--terracotta))",
    },
    {
        id: "liabilities",
        label: "Current Liabilities",
        value: -15,
        type: "negative",
        color: "hsl(var(--terracotta-light))",
    },
    {
        id: "eof",
        label: "Eligible Own Funds",
        value: 40,
        type: "total",
        color: "hsl(var(--gold))",
    },
];

// SCR as percentage of EOF
const scrPercent = 69; // 40 * 0.69 ≈ 27.5, giving ~145% coverage

/**
 * SAM Capital Waterfall visualization
 * Shows derivation of Eligible Own Funds vs SCR
 */
const SamWaterfall = () => {
    const maxValue = 100;
    const scrValue = bars[3].value * (scrPercent / 100);
    const coverageRatio = Math.round((bars[3].value / scrValue) * 100);

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Waterfall chart */}
            <div className="relative">
                {/* Bars container */}
                <div className="flex items-end justify-between gap-2 h-48">
                    {bars.map((bar, index) => {
                        const heightPercent = Math.abs(bar.value) / maxValue * 100;
                        const isNegative = bar.type === "negative";

                        // Calculate cumulative position for waterfall effect
                        let bottomOffset = 0;
                        if (isNegative) {
                            let cumulative = bars[0].value;
                            for (let i = 1; i < index; i++) {
                                cumulative += bars[i].value;
                            }
                            bottomOffset = (cumulative / maxValue) * 100;
                        }

                        return (
                            <div key={bar.id} className="flex-1 flex flex-col items-center relative h-full">
                                {/* Bar with staggered animation */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    whileInView={{ height: `${heightPercent}%`, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + index * 0.15,
                                        ease: [0.34, 1.56, 0.64, 1],
                                    }}
                                    className={`
                    w-full rounded-t-lg relative
                    ${bar.type === "total" ? "rounded-b-lg" : ""}
                  `}
                                    style={{
                                        background: bar.color,
                                        position: "absolute",
                                        bottom: isNegative ? `${bottomOffset - heightPercent}%` : 0,
                                        boxShadow: bar.type === "total"
                                            ? `0 4px 20px hsl(var(--gold) / 0.3)`
                                            : undefined,
                                    }}
                                >
                                    {/* Value label inside bar */}
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.15 }}
                                        className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold"
                                    >
                                        {bar.type === "negative" ? "" : bar.value}
                                    </motion.span>
                                </motion.div>

                                {/* Connector line for negative bars */}
                                {isNegative && index > 0 && (
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.15 }}
                                        className="absolute w-px bg-white/20 origin-top"
                                        style={{
                                            height: `${bottomOffset}%`,
                                            bottom: `${bottomOffset - heightPercent}%`,
                                            left: "50%",
                                        }}
                                    />
                                )}

                                {/* Label below */}
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="absolute -bottom-10 text-[10px] text-white/50 text-center leading-tight w-full px-1"
                                >
                                    {bar.label}
                                </motion.span>
                            </div>
                        );
                    })}
                </div>

                {/* SCR Line overlay */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.4 }}
                    className="absolute right-0 origin-right flex items-center"
                    style={{
                        bottom: `${(scrValue / maxValue) * 48}%`,
                        width: "calc(25% + 2rem)",
                    }}
                >
                    <div
                        className="flex-1 h-[2px] border-t-2 border-dashed"
                        style={{ borderColor: "hsl(var(--insight))" }}
                    />
                    <span
                        className="text-[10px] font-mono ml-2 whitespace-nowrap"
                        style={{ color: "hsl(var(--insight))" }}
                    >
                        SCR
                    </span>
                </motion.div>
            </div>

            {/* Legend */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="mt-14 flex justify-center gap-6 text-xs text-white/50"
            >
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ background: "hsl(var(--forest))" }} />
                    <span>Assets</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ background: "hsl(var(--terracotta))" }} />
                    <span>Deductions</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ background: "hsl(var(--gold))" }} />
                    <span>EOF</span>
                </div>
                <div className="flex items-center gap-2">
                    <div
                        className="w-3 h-[2px] border-t-2 border-dashed"
                        style={{ borderColor: "hsl(var(--insight))" }}
                    />
                    <span>SCR</span>
                </div>
            </motion.div>
        </div>
    );
};

export default SamWaterfall;
