import { motion } from "motion/react";

interface ReinsuranceLayer {
    id: string;
    label: string;
    sublabel: string;
    color: string;
    height: string;
}

// Using design system colors: Navy, Gold, Forest, Terracotta
const layers: ReinsuranceLayer[] = [
    {
        id: "retention",
        label: "Net Retention",
        sublabel: "Risk kept on own book",
        color: "hsl(var(--navy))",
        height: "h-20",
    },
    {
        id: "proportional",
        label: "Proportional Treaties",
        sublabel: "Quota Share / Surplus",
        color: "hsl(var(--forest))",
        height: "h-16",
    },
    {
        id: "working-xol",
        label: "Excess of Loss",
        sublabel: "Large individual claims",
        color: "hsl(var(--gold))",
        height: "h-14",
    },
    {
        id: "cat-xol",
        label: "Catastrophe XOL",
        sublabel: "Extreme events",
        color: "hsl(var(--terracotta))",
        height: "h-12",
    },
];

/**
 * Visual representation of a reinsurance program structure
 * Shows layered tower of coverage from retention to catastrophe
 * Static design - no hover tooltips for cleaner mobile/desktop experience
 */
const ReinsuranceTower = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            {/* Tower structure with integrated labels */}
            <div className="flex gap-4 items-stretch">
                {/* Tower bars */}
                <div className="flex-1 flex flex-col-reverse gap-1">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={layer.id}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                            className={`${layer.height} rounded-r-lg flex items-center justify-between px-4 origin-left`}
                            style={{ background: layer.color }}
                        >
                            <span className="text-white text-xs sm:text-sm font-medium truncate">
                                {layer.label}
                            </span>
                            <span className="text-white/60 text-[10px] sm:text-xs">
                                {layer.sublabel}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Flow arrows */}
                <div className="flex flex-col justify-between items-center py-2 text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                        <motion.span
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-lg"
                            style={{ color: "hsl(var(--gold))" }}
                        >
                            ↑
                        </motion.span>
                        <span className="text-[9px] -rotate-90 whitespace-nowrap">Premium</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[9px] rotate-90 whitespace-nowrap">Recoveries</span>
                        <motion.span
                            animate={{ y: [0, 3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                            className="text-lg"
                            style={{ color: "hsl(var(--forest))" }}
                        >
                            ↓
                        </motion.span>
                    </div>
                </div>
            </div>

            {/* Legend - simple key */}
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>↑ Premium flows up into layers</span>
                <span>↓ Recoveries flow down from reinsurers</span>
            </div>
        </div>
    );
};

export default ReinsuranceTower;
