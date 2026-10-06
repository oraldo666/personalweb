import { useEffect, type CSSProperties } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useIsTouch } from "../../hooks/useIsTouch";
import { cx } from "../../lib/cx";
import type { OrbitIcon } from "../../types";
import s from "./Orbit.module.css";

const SPRING = { stiffness: 60, damping: 18, mass: 0.8 };

/** Ring of technology icons orbiting a glowing core; tilts gently toward the pointer. */
export default function Orbit({ items, className }: { items: OrbitIcon[]; className?: string }) {
  const reduced = useReducedMotion() === true;
  const isTouch = useIsTouch();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, SPRING);
  const sry = useSpring(ry, SPRING);

  useEffect(() => {
    if (reduced || isTouch) return undefined;
    const onMove = (event: PointerEvent) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      ry.set(nx * 18);
      rx.set(-ny * 18);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, isTouch, rx, ry]);

  const count = items.length;

  return (
    <div className={cx(s.scene, className)} aria-hidden="true">
      <motion.div className={s.orbit} style={{ rotateX: srx, rotateY: sry }}>
        <div className={s.glow} />
        <div className={s.core}>
          <span className={s.coreDot} />
        </div>
        <div className={s.ringInner} />
        <div className={s.satellite}>
          <span />
        </div>
        <div className={s.ring}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={s.item}
              style={{ "--a": `${(360 / count) * index}deg` } as CSSProperties}
            >
              <div className={s.icon} title={item.label}>
                <item.Icon />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
