import { useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../lib/themeContext";
import { applyTheme, readInitialTheme, readStoredTheme, storeTheme } from "../lib/theme";
import type { Theme, ThemeContextValue } from "../types";

/** Owns the theme state; used once by <ThemeProvider>. */
export function useThemeState(): ThemeContextValue {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    storeTheme(next);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Follow the OS preference only while the visitor has not chosen a theme.
  useEffect(() => {
    if (readStoredTheme()) return undefined;
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => {
      const next: Theme = event.matches ? "light" : "dark";
      setThemeState(next);
      applyTheme(next);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return { theme, setTheme, toggle };
}

/** Reads the theme from context. */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
