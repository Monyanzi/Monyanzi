export type Theme = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "afg_theme";

export const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
};

export const applyTheme = (theme: Theme) => {
  if (typeof document === "undefined") return;
  const effective = theme === "system" ? getSystemTheme() : theme;
  const root = document.documentElement;

  if (effective === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Sync meta theme-color for iOS status bar / Chrome
  let metaTheme = document.querySelector('meta[name="theme-color"]');
  if (!metaTheme) {
    metaTheme = document.createElement("meta");
    metaTheme.setAttribute("name", "theme-color");
    document.head.appendChild(metaTheme);
  }
  metaTheme.setAttribute("content", effective === "dark" ? "#141414" : "#f6f4ee");

  window.dispatchEvent(new CustomEvent("theme-changed", { detail: { theme, effective } }));
};

export const setTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;
  if (theme === "system") {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } else {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
  applyTheme(theme);
};

export const toggleTheme = () => {
  const current = getStoredTheme();
  const effective = current === "system" ? getSystemTheme() : current;
  setTheme(effective === "dark" ? "light" : "dark");
};

// Initial listener for OS preference changes
if (typeof window !== "undefined") {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getStoredTheme() === "system") {
      applyTheme("system");
    }
  });
}

