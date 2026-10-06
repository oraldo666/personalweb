import type { PointerEvent, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import { useIsTouch } from "../../hooks/useIsTouch";
import { cx } from "../../lib/cx";
import s from "./Button.module.css";

const SPRING = { stiffness: 300, damping: 20, mass: 0.4 };

type Variant = "primary" | "ghost" | "solid";
type Size = "md" | "sm";

interface ButtonOwnProps {
  /** Render an anchor (default) or a native button. */
  as?: "a" | "button";
  variant?: Variant;
  size?: Size;
  /** Pull toward the pointer on hover (disabled on touch and reduced motion). */
  magnetic?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export type ButtonProps = ButtonOwnProps &
  Omit<HTMLMotionProps<"a">, keyof ButtonOwnProps | "style">;

export default function Button({
  as = "a",
  variant = "primary",
  size = "md",
  magnetic = true,
  icon,
  children,
  className,
  ...rest
}: ButtonProps) {
  const reduced = useReducedMotion() === true;
  const isTouch = useIsTouch();
  const enabled = magnetic && !reduced && !isTouch;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.28);
  };
  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = (as === "button" ? motion.button : motion.a) as typeof motion.a;
  return (
    <Tag
      className={cx(s.btn, s[variant], s[size], className)}
      style={{ x: sx, y: sy }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      <span className={s.label}>{children}</span>
      {icon && (
        <span className={s.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </Tag>
  );
}
