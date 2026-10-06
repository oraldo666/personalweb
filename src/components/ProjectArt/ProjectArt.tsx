import { useId } from "react";
import { cx } from "../../lib/cx";
import type { ArtKind } from "../../types";
import s from "./ProjectArt.module.css";

const CANDLES: Array<[number, number, number, "up" | "down"]> = [
  [40, 120, 60, "up"],
  [82, 95, 70, "down"],
  [124, 110, 50, "up"],
  [166, 90, 75, "up"],
  [208, 70, 60, "down"],
  [250, 85, 55, "up"],
  [292, 55, 70, "up"],
  [334, 40, 65, "up"],
];

/** Generated cover illustrations; one per case study so no client screenshots are needed. */
export default function ProjectArt({ kind, className }: { kind: ArtKind; className?: string }) {
  const uid = useId().replace(/:/g, "");
  const grad = `${uid}-grad`;
  const dots = `${uid}-dots`;

  return (
    <svg
      className={cx(s.art, s[kind], className)}
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={grad} cx="0.25" cy="0.2" r="0.9">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="0.55" stopColor="var(--accent-2)" stopOpacity="0.12" />
          <stop offset="1" stopColor="var(--accent-2)" stopOpacity="0" />
        </radialGradient>
        <pattern id={dots} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="currentColor" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill={`url(#${grad})`} />
      <rect width="400" height="240" fill={`url(#${dots})`} />

      {kind === "bike" && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="110" cy="158" r="54" opacity="0.75" />
          <circle cx="290" cy="158" r="54" opacity="0.75" />
          <circle cx="110" cy="158" r="6" fill="var(--accent)" stroke="none" />
          <circle cx="290" cy="158" r="6" fill="var(--accent)" stroke="none" />
          <g opacity="0.35">
            <path d="M110 104v108M56 158h108M72 120l76 76M148 120l-76 76" />
            <path d="M290 104v108M236 158h108M252 120l76 76M328 120l-76 76" />
          </g>
          <path d="M110 158 L172 78 L250 78 L290 158 Z" stroke="var(--accent)" strokeWidth="3" />
          <path d="M172 78 L205 158 L110 158" stroke="var(--accent)" strokeWidth="3" />
          <path d="M250 78 L240 60 M160 70 L190 70" stroke="var(--accent-2)" strokeWidth="4" />
          <circle cx="205" cy="158" r="9" fill="var(--bg)" stroke="var(--accent)" strokeWidth="3" />
        </g>
      )}

      {kind === "exchange" && (
        <g>
          {CANDLES.map(([x, y, h, dir]) => (
            <g key={x}>
              <line
                x1={x + 10}
                y1={y - 18}
                x2={x + 10}
                y2={y + h + 18}
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.4"
              />
              <rect
                x={x}
                y={y}
                width="20"
                height={h}
                rx="3"
                fill={dir === "up" ? "var(--accent)" : "var(--accent-2)"}
                opacity={dir === "up" ? 0.9 : 0.75}
              />
            </g>
          ))}
          <path
            d="M20 190 C 90 180, 120 150, 170 140 S 260 120, 300 85 S 360 60, 390 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            opacity="0.7"
            strokeLinecap="round"
          />
          <circle cx="390" cy="40" r="7" fill="var(--accent)" />
          <circle cx="390" cy="40" r="16" fill="var(--accent)" opacity="0.25" />
        </g>
      )}

      {kind === "stream" && (
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="52" y="44" width="236" height="152" rx="18" opacity="0.75" />
          <rect
            x="52"
            y="44"
            width="236"
            height="26"
            rx="18"
            fill="currentColor"
            opacity="0.08"
            stroke="none"
          />
          <circle cx="72" cy="57" r="4" fill="var(--accent)" stroke="none" />
          <circle cx="86" cy="57" r="4" fill="currentColor" opacity="0.4" stroke="none" />
          <path d="M152 100 L204 130 L152 160 Z" fill="var(--accent)" stroke="none" />
          <path
            d="M300 90 a40 40 0 0 1 0 80"
            stroke="var(--accent-2)"
            strokeWidth="3"
            opacity="0.9"
            strokeLinecap="round"
          />
          <path
            d="M318 72 a66 66 0 0 1 0 116"
            stroke="var(--accent-2)"
            strokeWidth="3"
            opacity="0.55"
            strokeLinecap="round"
          />
          <path
            d="M336 54 a92 92 0 0 1 0 152"
            stroke="var(--accent-2)"
            strokeWidth="3"
            opacity="0.3"
            strokeLinecap="round"
          />
          <g fill="var(--accent)" stroke="none" opacity="0.9">
            <rect x="78" y="176" width="6" height="10" rx="2" />
            <rect x="90" y="170" width="6" height="16" rx="2" />
            <rect x="102" y="178" width="6" height="8" rx="2" />
            <rect x="114" y="166" width="6" height="20" rx="2" />
            <rect x="126" y="174" width="6" height="12" rx="2" />
          </g>
        </g>
      )}

      {kind === "maritime" && (
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path
            d="M-10 150 C 40 130, 80 170, 130 150 S 220 130, 270 150 S 360 170, 410 150"
            opacity="0.6"
          />
          <path
            d="M-10 178 C 40 158, 80 198, 130 178 S 220 158, 270 178 S 360 198, 410 178"
            opacity="0.4"
          />
          <path
            d="M-10 206 C 40 186, 80 226, 130 206 S 220 186, 270 206 S 360 226, 410 206"
            opacity="0.25"
          />
          <circle cx="300" cy="88" r="56" opacity="0.7" />
          <circle cx="300" cy="88" r="34" opacity="0.4" />
          <circle cx="300" cy="88" r="12" opacity="0.3" />
          <path
            d="M300 88 L300 32 A56 56 0 0 1 352 70 Z"
            fill="var(--accent)"
            opacity="0.35"
            stroke="none"
          />
          <line x1="300" y1="88" x2="300" y2="32" stroke="var(--accent)" strokeWidth="2.5" />
          <circle cx="326" cy="60" r="5" fill="var(--accent)" stroke="none" />
          <circle cx="278" cy="110" r="4" fill="var(--accent-2)" stroke="none" />
          <path
            d="M70 128 L90 96 L110 128 Z M60 128 H120"
            stroke="var(--accent-2)"
            strokeWidth="3"
          />
        </g>
      )}

      {kind === "site" && (
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="60" y="40" width="280" height="170" rx="16" opacity="0.7" />
          <rect
            x="60"
            y="40"
            width="280"
            height="30"
            rx="16"
            fill="currentColor"
            opacity="0.08"
            stroke="none"
          />
          <circle cx="80" cy="55" r="4" fill="var(--accent)" stroke="none" />
          <circle cx="94" cy="55" r="4" fill="var(--accent-2)" stroke="none" />
          <circle cx="108" cy="55" r="4" fill="currentColor" opacity="0.4" stroke="none" />
          <rect
            x="84"
            y="94"
            width="120"
            height="14"
            rx="7"
            fill="currentColor"
            opacity="0.6"
            stroke="none"
          />
          <rect
            x="84"
            y="118"
            width="170"
            height="8"
            rx="4"
            fill="currentColor"
            opacity="0.3"
            stroke="none"
          />
          <rect
            x="84"
            y="134"
            width="140"
            height="8"
            rx="4"
            fill="currentColor"
            opacity="0.3"
            stroke="none"
          />
          <rect x="84" y="162" width="72" height="24" rx="12" fill="var(--accent)" stroke="none" />
          <circle
            cx="280"
            cy="130"
            r="36"
            stroke="var(--accent-2)"
            strokeDasharray="4 6"
            opacity="0.8"
          />
          <circle cx="280" cy="130" r="8" fill="var(--accent-2)" stroke="none" />
          <path
            d="M292 150 L318 176 L306 178 L312 192 L304 196 L298 182 L288 190 Z"
            fill="var(--text)"
            stroke="var(--bg)"
            strokeWidth="2"
          />
        </g>
      )}
    </svg>
  );
}
