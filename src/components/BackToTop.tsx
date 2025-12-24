import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 p-3 bg-foreground text-background border border-border hover:bg-foreground/90 transition-all duration-300 shadow-lg group"
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
