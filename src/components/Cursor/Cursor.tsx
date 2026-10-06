import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useIsTouch } from "../../hooks/useIsTouch";
import s from "./Cursor.module.css";

const INTERACTIVE =
  "[data-cursor], a, button, [role='button'], input, textarea, select, label, summary";

type CursorMode = "default" | "link" | "view" | "press";

export default function Cursor() {
  const isTouch = useIsTouch();
  const reduced = useReducedMotion() === true;
  const enabled = !isTouch && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;
    const root = document.documentElement;
    root.dataset.cursor = "custom";

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onOver = (event: Event) => {
      const target = event.target instanceof Element ? event.target.closest(INTERACTIVE) : null;
      setMode(
        target ? (target.getAttribute("data-cursor") as CursorMode | null) || "link" : "default",
      );
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setMode((m) => (m === "default" ? "press" : m));
    const onUp = () => setMode((m) => (m === "press" ? "default" : m));

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      delete root.dataset.cursor;
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div className={s.root} aria-hidden="true" data-mode={mode} data-visible={visible || undefined}>
      <motion.div className={s.dot} style={{ x, y }} />
      <motion.div className={s.ring} style={{ x: ringX, y: ringY }}>
        <span className={s.label}>View</span>
      </motion.div>
    </div>
  );
}
