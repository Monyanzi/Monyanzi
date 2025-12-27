import { motion } from "motion/react";
import { useState } from "react";

interface ReinsuranceLayer {
    id: string;
    label: string;
    sublabel?: string;
    color: string;
    height: string;
    tooltip: string;
}

// Using design system colors: Navy, Gold, Forest, Terracotta
const layers: ReinsuranceLayer[] = [
    {
        id: "retention",
        label: "Net Retention",
        sublabel: "Risk kept on own book",
        color: "hsl(var(--navy))",
        height: "h-24",
        tooltip: "The portion of risk retained by the insurer. First layer to absorb losses.",
    },
    {
        id: "proportional",
        label: "Proportional Treaties",
        sublabel: "Quota Share / Surplus",
        color: "hsl(var(--forest))",
        height: "h-20",
        tooltip: "Shares premium and losses proportionally with reinsurers. Provides capital relief and spread of risk.",
    },
    {
        id: "working-xol",
        label: "Excess of Loss (Working Layer)",
        sublabel: "Large individual claims",
        color: "hsl(var(--gold))",
        height: "h-16",
        tooltip: "Covers individual large claims above retention. More frequently triggered than Cat layer.",
    },
    {
        id: "cat-xol",
        label: "Catastrophe XOL",
        sublabel: "Extreme events",
        color: "hsl(var(--terracotta))",
        height: "h-14",
        tooltip: "Protection against catastrophic losses (e.g., natural disasters). Rarely triggered, high limits.",
    },
];

/**
 * Visual representation of a reinsurance program structure
 * Shows layered tower of coverage from retention to catastrophe
 */
const ReinsuranceTower = () => {
    const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Tower structure */}
            <div className="relative">
                {/* Flow arrows on sides - hidden on mobile */}
                <div className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 flex-col items-center gap-2 text-xs text-muted-foreground">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-[10px] rotate-[-90deg] whitespace-nowrap mb-2 text-white/50">Premium</span>
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="text-lg"
                            style={{ color: "hsl(var(--gold))" }}
                        >
                            ↑
                        </motion.div>
                    </motion.div>
                </div>

                <div className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 flex-col items-center gap-2 text-xs text-muted-foreground">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-col items-center"
                    >
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            className="text-lg"
                            style={{ color: "hsl(var(--forest))" }}
                        >
                            ↓
                        </motion.div>
                        <span className="text-[10px] rotate-[90deg] whitespace-nowrap mt-2 text-white/50">Recoveries</span>
                    </motion.div>
                </div>

                {/* Stacked layers - anime.js inspired staggered animation */}
                <div className="flex flex-col-reverse gap-1">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={layer.id}
                            initial={{ opacity: 0, scaleY: 0, y: 20 }}
                            whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.15 + index * 0.12,
                                ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
                            }}
                            onMouseEnter={() => setHoveredLayer(layer.id)}
                            onMouseLeave={() => setHoveredLayer(null)}
                            className={`
                ${layer.height} 
                rounded-lg px-4 py-2 flex flex-col justify-center relative cursor-default
                transition-all duration-200 origin-bottom
                ${hoveredLayer === layer.id ? "scale-[1.02] shadow-lg z-10" : ""}
              `}
                            style={{
                                background: layer.color,
                                boxShadow: hoveredLayer === layer.id
                                    ? `0 8px 24px ${layer.color}40`
                                    : undefined
                            }}
                        >
                            <span className="text-white text-sm font-medium">{layer.label}</span>
                            {layer.sublabel && (
                                <span className="text-white/70 text-xs">{layer.sublabel}</span>
                            )}

                            {/* Tooltip */}
                            {hoveredLayer === layer.id && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 p-3 bg-foreground text-background text-xs rounded-lg shadow-xl z-20"
                                >
                                    {layer.tooltip}
                                    <div
                                        className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px]"
                                        style={{ borderRightColor: "hsl(var(--foreground))" }}
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Legend / explanation */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-6 text-center text-xs text-white/40"
            >
                <p>Hover over layers for details</p>
            </motion.div>
        </div>
    );
};

export default ReinsuranceTower;
