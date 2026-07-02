import { useEffect, RefObject } from "react";

export const useFocusTrap = (
    isOpen: boolean,
    onClose: () => void,
    containerRef: RefObject<HTMLElement | null>
) => {
    useEffect(() => {
        if (!isOpen) return;

        const previouslyFocused = document.activeElement as HTMLElement | null;
        const containerEl = containerRef.current;

        const getFocusableElements = () => {
            if (!containerEl) return [];
            return Array.from(
                containerEl.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");
        };

        const focusFirst = () => {
            const focusables = getFocusableElements();
            if (focusables.length > 0) {
                focusables[0].focus();
            } else {
                containerEl?.focus();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (e.key !== "Tab") return;
            const focusables = getFocusableElements();
            if (focusables.length === 0) return;

            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement;

            if (e.shiftKey && active === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        requestAnimationFrame(focusFirst);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            previouslyFocused?.focus();
        };
    }, [isOpen, onClose, containerRef]);
};
