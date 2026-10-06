import type { ReactNode } from "react";
import { ThemeContext } from "../lib/themeContext";
import { useThemeState } from "../hooks/useTheme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const value = useThemeState();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
