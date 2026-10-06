import type { Variants } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({ opacity: 1, transition: { duration: 0.8, ease: EASE, delay } }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export const lineReveal: Variants = {
  hidden: { y: "150%" },
  show: (delay: number = 0) => ({ y: 0, transition: { duration: 1, ease: EASE, delay } }),
};

export const stagger = (staggerChildren = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
