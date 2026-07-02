/**
 * Unified scroll event bus.
 * A single passive `window.scroll` listener shared by every scroll-aware hook.
 * Automatically attaches/detaches as consumers subscribe/unsubscribe.
 */

const subscribers = new Set<() => void>();
let bound = false;

const handler = () => {
    subscribers.forEach((fn) => fn());
};

export const subscribeToScroll = (listener: () => void): (() => void) => {
    subscribers.add(listener);

    if (!bound) {
        window.addEventListener("scroll", handler, { passive: true });
        bound = true;
    }

    return () => {
        subscribers.delete(listener);

        if (subscribers.size === 0 && bound) {
            window.removeEventListener("scroll", handler);
            bound = false;
        }
    };
};
