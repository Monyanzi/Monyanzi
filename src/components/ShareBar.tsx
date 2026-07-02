import { useState, useCallback } from "react";
import { Link2, Mail, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ShareBarProps {
    url: string;
    title: string;
    className?: string;
    variant?: "inline" | "sidebar";
}

const ShareBar = ({ url, title, className = "", variant = "inline" }: ShareBarProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* Clipboard API unavailable */
        }
    }, [url]);

    const mailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`;

    const isSidebar = variant === "sidebar";

    return (
        <div className={`flex ${isSidebar ? "flex-col" : ""} items-center gap-2 ${className}`.trim()}>
            {isSidebar && (
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-foreground-subtle mb-1">
                    Share
                </span>
            )}
            {/* Email share */}
            <a
                href={mailUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share via email"
                className={`${isSidebar ? "w-10 h-10" : "w-9 h-9"} rounded-full flex items-center justify-center border border-border bg-surface text-foreground-muted 
            hover:text-foreground hover:border-jacarta/20 hover:bg-jacarta/5 transition-all duration-200 hover:-translate-y-0.5`}
            >
                <Mail className={`${isSidebar ? "w-4 h-4" : "w-3.5 h-3.5"}`} />
            </a>
            {/* Copy link */}
            <button
                onClick={handleCopy}
                aria-label="Copy link"
                className={`${isSidebar ? "w-10 h-10" : "w-9 h-9"} rounded-full flex items-center justify-center border border-border bg-surface text-foreground-muted 
           hover:text-foreground hover:border-jacarta/20 hover:bg-jacarta/5 transition-all duration-200 hover:-translate-y-0.5 relative`}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                        <motion.span
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Check className={`${isSidebar ? "w-4 h-4" : "w-3.5 h-3.5"} text-jacarta`} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Link2 className={`${isSidebar ? "w-4 h-4" : "w-3.5 h-3.5"}`} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
};

export default ShareBar;
