import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { cx } from "../../lib/cx";
import { RevealGroup } from "../Reveal/Reveal";
import s from "./SectionHeading.module.css";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  id: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  index,
  label,
  title,
  id,
  align = "left",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <RevealGroup className={cx(s.heading, align === "center" && s.center, className)}>
      <motion.p variants={fadeUp} className={cx("mono", s.eyebrow)}>
        <span className={s.index}>{index}</span>
        <span className={s.dash} aria-hidden="true" />
        {label}
      </motion.p>
      <motion.h2 variants={fadeUp} id={id} className={s.title}>
        {title}
      </motion.h2>
      {children && (
        <motion.div variants={fadeUp} className={s.extra}>
          {children}
        </motion.div>
      )}
    </RevealGroup>
  );
}
