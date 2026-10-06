import { AnimatePresence, motion } from "motion/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";
import { EASE } from "../../lib/motion";
import s from "./ThemeToggle.module.css";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className={[s.toggle, className].filter(Boolean).join(" ")}
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className={s.icon}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.28, ease: EASE }}
        >
          {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
