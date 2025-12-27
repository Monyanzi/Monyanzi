import { motion } from "motion/react";

interface WaterfallBar {
    id: string;
    label: string;
    value: number;
    type: "positive" | "negative" | "total";
    color: string;
}

// Using design system colors - Assets=Green, Liabilities=Red
const bars: WaterfallBar[] = [
    {
        id: "assets",
        label: "Total Assets",
        value: 100,
        type: "positive",
        color: "hsl(140 50% 45%)", // Green for assets
    },
    {
        id: "tech-provisions",
        label: "Technical Provisions",
        value: -45,
        type: "negative",
        color: "hsl(0 65% 50%)", // Red for liabilities
    },
    {
        id: "liabilities",
        label: "Current Liabilities",
        value: -15,
        type: "negative",
        color: "hsl(0 55% 60%)", // Lighter red for liabilities
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
 * FIXED: All elements immediately visible for mobile
 */
const SamWaterfall = () => {
    const maxValue = 100;
    const scrValue = bars[3].value * (scrPercent / 100);

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
                                {/* Bar - VISIBLE IMMEDIATELY */}
                                <motion.div
                                    animate={{
                                        height: `${heightPercent}%`,
                                        opacity: 1
                                    }}
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
                                        height: `${heightPercent}%`,
                                    }}
                                >
                                    {/* Value label inside bar - VISIBLE with contrast */}
                                    <span
                                        className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold"
                                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                                    >
                                        {bar.type === "negative" ? "" : bar.value}
                                    </span>
                                </motion.div>

                                {/* Connector line for negative bars */}
                                {isNegative && index > 0 && (
                                    <div
                                        className="absolute w-px bg-white/20"
                                        style={{
                                            height: `${bottomOffset}%`,
                                            bottom: `${bottomOffset - heightPercent}%`,
                                            left: "50%",
                                        }}
                                    />
                                )}

                                {/* Label below - VISIBLE with dark text */}
                                <span
                                    className="absolute -bottom-10 text-[10px] text-muted-foreground text-center leading-tight w-full px-1"
                                >
                                    {bar.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* SCR Line overlay - VISIBLE */}
                <div
                    className="absolute right-0 flex items-center"
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
                </div>
            </div>

            {/* Legend - VISIBLE with dark text */}
            <div
                className="mt-14 flex justify-center gap-6 text-xs text-muted-foreground"
            >
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ background: "hsl(140 50% 45%)" }} />
                    <span>Assets</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ background: "hsl(0 65% 50%)" }} />
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
            </div>
        </div>
    );
};

export default SamWaterfall;
