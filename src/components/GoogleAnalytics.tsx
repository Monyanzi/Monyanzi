import { useEffect } from "react";
import { hasAnalyticsConsent } from "@/utils/cookieConsent";

interface GoogleAnalyticsProps {
    measurementId: string;
}

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
    useEffect(() => {
        const trimmedMeasurementId = measurementId.trim();
        if (!trimmedMeasurementId || !hasAnalyticsConsent()) {
            return;
        }

        if (typeof window.gtag === "function") {
            return;
        }

        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: unknown[]) {
            window.dataLayer.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", trimmedMeasurementId, {
            anonymize_ip: true,
            cookie_flags: "SameSite=None;Secure",
        });

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trimmedMeasurementId}`;
        document.head.appendChild(script);

        return () => {
            const existingScript = document.querySelector(
                `script[src*="${trimmedMeasurementId}"]`
            );
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [measurementId]);

    return null;
};

export default GoogleAnalytics;
