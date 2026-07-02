export interface ConsentPreferences {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    timestamp: number;
}

const CONSENT_KEY = 'cookie_consent';

export const getConsentPreferences = (): ConsentPreferences | null => {
    try {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch {
        return null;
    }
    return null;
};

export const setConsentPreferences = (preferences: Omit<ConsentPreferences, 'essential' | 'timestamp'>): void => {
    const fullPreferences: ConsentPreferences = {
        essential: true,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        timestamp: Date.now(),
    };

    try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(fullPreferences));
    } catch {
        return;
    }
};

export const hasConsentBeenGiven = (): boolean => {
    return getConsentPreferences() !== null;
};

export const hasAnalyticsConsent = (): boolean => {
    const prefs = getConsentPreferences();
    return prefs?.analytics ?? false;
};

export const acceptAllCookies = (): void => {
    setConsentPreferences({
        analytics: true,
        marketing: true,
    });
};

export const rejectAllCookies = (): void => {
    setConsentPreferences({
        analytics: false,
        marketing: false,
    });
};
