import { useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

interface ParallaxConfig {
    /** Speed multiplier. Positive = moves with scroll, negative = moves against */
    speed?: number;
    /** Start offset in viewport (0 = top, 1 = bottom) */
    offsetStart?: number;
    /** End offset in viewport */
    offsetEnd?: number;
}

interface UseParallaxResult {
    ref: React.RefObject<HTMLDivElement>;
    y: MotionValue<number>;
    opacity?: MotionValue<number>;
    scale?: MotionValue<number>;
}

/**
 * Custom hook for creating parallax scroll effects
 * Inspired by DIA Studio's kinetic design philosophy
 */
export function useParallax({
    speed = 0.5,
    offsetStart = 0,
    offsetEnd = 1,
}: ParallaxConfig = {}): UseParallaxResult {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${offsetStart} start`, `${offsetEnd} end`],
    });

    // Calculate parallax translation based on speed
    // A speed of 0.5 means element moves at half the scroll speed
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

    return { ref, y };
}

/**
 * Hook for elements that fade and move as they enter/exit viewport
 */
export function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

    return { ref, opacity, y };
}

/**
 * Hook for multi-layer parallax backgrounds (DIA Studio style)
 * Creates depth with different speeds for each layer
 */
export function useMultiLayerParallax(layerCount: number = 3) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const layers = Array.from({ length: layerCount }, (_, i) => {
        const speed = (i + 1) * 0.15; // Layer 1: 0.15, Layer 2: 0.3, Layer 3: 0.45
        return {
            y: useTransform(scrollYProgress, [0, 1], [0, speed * 150]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]),
        };
    });

    return { ref, layers, scrollYProgress };
}
