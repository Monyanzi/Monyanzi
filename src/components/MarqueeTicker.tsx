/**
 * MarqueeTicker - Displays a continuous scrolling list of companies
 * the consultant has worked with or completed projects for.
 * 
 * Designed for a premium, understated aesthetic.
 * Uses pure CSS animation for best performance.
 * 
 * Architecture:
 * - 4 identical text copies placed side-by-side
 * - Animation translates by -25% (one copy width)
 * - When animation resets, position looks identical (seamless loop)
 * - No gaps between copies for continuous flow
 */
const MarqueeTicker = () => {
    const companies = [
        // Direct Experience
        "Old Mutual Insure",
        "Old Mutual Africa Regions",
        "Old Mutual Alternative Risk Transfer",
        "Guy Carpenter",
        "Aon",
        "Resilea",

        // Major European Reinsurers
        "Swiss Re",
        "Munich Re",
        "Hannover Re",
        "SCOR",
        "Lloyd's of London",
        "PartnerRe",
        "MAPFRE RE",

        // Major US & Global Reinsurers
        "Santam Re",
        "Everest Re",
        "Arch Re",
        "MS Amlin",
        "Gen Re",
        "RenaissanceRe",
        "Transatlantic Re",
        "Odyssey Re",
        "Aspen Re",
        "Markel",
        "Sompo International",
        "Tokio Marine",
        "Chubb",
        "Travelers",
        "AXA XL",
    ];

    // Join companies with elegant separator - NO trailing separator
    const content = companies.join("  ·  ");

    return (
        <section className="py-5 border-y border-border/30 overflow-hidden bg-secondary/20">
            {/* Label indicating these are clients/projects */}
            <div className="text-center mb-4">
                <span className="text-xs font-medium text-foreground/60 tracking-[0.15em] uppercase">
                    Companies I've worked with
                </span>
            </div>

            {/* Marquee container - overflow hidden to clip animation */}
            <div className="relative overflow-hidden">
                {/* Gradient fade edges for premium feel */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Marquee track - 4 copies for seamless -25% translation loop */}
                <div className="animate-marquee inline-flex whitespace-nowrap">
                    {[1, 2, 3, 4].map((i) => (
                        <span
                            key={i}
                            className="inline-block flex-shrink-0 text-sm font-medium text-foreground tracking-[0.08em] uppercase px-4"
                            aria-hidden={i > 1 ? "true" : undefined}
                        >
                            {content}  ·
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeTicker;
