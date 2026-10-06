import type { ReactNode } from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

type MotionTag = "div" | "section" | "article" | "ul" | "ol" | "li" | "dl" | "p" | "span";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "custom" | "children"> {
  as?: MotionTag;
  children?: ReactNode;
  delay?: number;
  variants?: Variants;
}

/** Animates its children in once they scroll into view. */
export function Reveal({
  as = "div",
  children,
  delay = 0,
  variants = fadeUp,
  ...rest
}: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={variants}
      custom={delay}
      {...rest}
    >
      {children}
    </Tag>
  );
}

interface RevealGroupProps extends Omit<HTMLMotionProps<"div">, "variants" | "children"> {
  as?: MotionTag;
  children?: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
}

/** A container whose motion children (with `variants`) animate in a stagger. */
export function RevealGroup({
  as = "div",
  children,
  staggerChildren = 0.08,
  delayChildren = 0,
  ...rest
}: RevealGroupProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={stagger(staggerChildren, delayChildren)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
