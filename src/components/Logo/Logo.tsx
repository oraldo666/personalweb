import s from "./Logo.module.css";

/** Orbit mark: a ring, a core and a small satellite. Matches /favicon.svg. */
export default function Logo({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={[s.logo, className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="32"
        cy="32"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.9"
      />
      <circle cx="32" cy="32" r="8" className={s.accent} />
      <circle cx="46.8" cy="17.2" r="5" className={s.accent} />
    </svg>
  );
}
