import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  hasConsentBeenGiven,
  acceptAllCookies,
  rejectAllCookies,
  setConsentPreferences,
} from "@/utils/cookieConsent";

interface CookieConsentProps {
  onConsentChange?: () => void;
}

const CookieConsent = ({ onConsentChange }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    if (!hasConsentBeenGiven()) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    acceptAllCookies();
    setIsVisible(false);
    onConsentChange?.();
  }, [onConsentChange]);

  const handleRejectAll = useCallback(() => {
    rejectAllCookies();
    setIsVisible(false);
    onConsentChange?.();
  }, [onConsentChange]);

  const handleSavePreferences = useCallback(() => {
    setConsentPreferences({
      analytics: analyticsEnabled,
      marketing: false,
    });
    setIsVisible(false);
    onConsentChange?.();
  }, [analyticsEnabled, onConsentChange]);

  const toggleDetails = useCallback(() => {
    setShowDetails((prev) => !prev);
  }, []);

  const toggleAnalytics = useCallback(() => {
    setAnalyticsEnabled((prev) => !prev);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6"
        >
          <div className="max-w-4xl mx-auto rounded-lg border border-border bg-surface shadow-card-elevated">
            <div className="p-5 lg:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <div className="flex-1">
                  <p className="font-mono text-[10px] font-semibold text-foreground-subtle mb-1">
                    Privacy
                  </p>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    Essential storage saves theme preferences. Optional cookies measure readership.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 lg:flex-shrink-0">
                  <button
                    onClick={handleRejectAll}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface-2"
                  >
                    Essential only
                  </button>
                  <button
                    onClick={toggleDetails}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface-2"
                  >
                    Configure
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent"
                  >
                    Accept all
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5 mt-5 border-t border-border">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-foreground">Essential storage</p>
                            <p className="text-xs text-foreground-muted">Saves theme and consent preferences</p>
                          </div>
                          <span className="font-mono text-[10px] text-accent font-semibold">
                            Always active
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-foreground">Analytics</p>
                            <p className="text-xs text-foreground-muted">Anonymous pageview telemetry</p>
                          </div>
                          <button
                            onClick={toggleAnalytics}
                            aria-label="Toggle analytics cookies"
                            className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                              analyticsEnabled ? "bg-accent" : "bg-surface-2 border border-border"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                                analyticsEnabled ? "translate-x-5" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={handleSavePreferences}
                        className="mt-5 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent"
                      >
                        Save preferences
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
