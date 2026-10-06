import { motion, useScroll, useSpring } from "motion/react";
import s from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className={s.bar} style={{ scaleX }} aria-hidden="true" />;
}
