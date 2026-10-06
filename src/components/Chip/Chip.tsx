import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import s from "./Chip.module.css";

interface ChipProps {
  children: ReactNode;
  tone?: "default" | "accent";
  size?: "md" | "sm";
  className?: string;
}

export default function Chip({ children, tone = "default", size = "md", className }: ChipProps) {
  return (
    <span className={cx(s.chip, tone === "accent" && s.accent, size === "sm" && s.sm, className)}>
      {children}
    </span>
  );
}
