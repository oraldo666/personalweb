import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE } from "../../lib/motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, suffix = "", duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduced = useReducedMotion() === true;

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return undefined;
    if (reduced) {
      el.textContent = `${value}${suffix}`;
      return undefined;
    }
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {reduced ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}
