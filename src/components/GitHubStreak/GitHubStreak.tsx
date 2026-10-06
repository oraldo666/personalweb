import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { github } from "../../data/profile";
import { useTheme } from "../../hooks/useTheme";
import type { Theme } from "../../types";
import s from "./GitHubStreak.module.css";

const PALETTES: Record<Theme, Record<string, string>> = {
  dark: {
    background: "141419",
    border: "26262d",
    stroke: "26262d",
    ring: "f2b544",
    fire: "f2b544",
    currStreakNum: "f2efe8",
    sideNums: "f2efe8",
    currStreakLabel: "f2b544",
    sideLabels: "9c998f",
    dates: "6b6962",
  },
  light: {
    background: "fffdf9",
    border: "e6dfd2",
    stroke: "e6dfd2",
    ring: "d99c1f",
    fire: "d99c1f",
    currStreakNum: "121214",
    sideNums: "121214",
    currStreakLabel: "8a5a00",
    sideLabels: "5f5c55",
    dates: "8c887f",
  },
};

/** Live GitHub streak card from streak-stats.demolab.com, recoloured to match the active theme. */
export default function GitHubStreak() {
  const { theme } = useTheme();
  const params = new URLSearchParams({
    user: github.handle,
    hide_border: "true",
    ...PALETTES[theme],
  });
  const src = `https://streak-stats.demolab.com?${params.toString()}`;

  return (
    <div className={s.card}>
      <div className={s.head}>
        <span className={s.icon}>
          <FaGithub aria-hidden="true" />
        </span>
        <div className={s.titles}>
          <p className={s.title}>On GitHub</p>
          <p className={s.sub}>@{github.handle} · contribution streak</p>
        </div>
        <a
          href={github.url}
          className={s.link}
          target="_blank"
          rel="noreferrer me"
          aria-label="Open GitHub profile"
        >
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <a href={github.url} className={s.imgLink} target="_blank" rel="noreferrer">
        <img
          key={theme}
          src={src}
          alt={`GitHub contribution streak statistics for ${github.handle}`}
          width="495"
          height="195"
          loading="lazy"
          decoding="async"
        />
      </a>
      <p className={s.note}>Live data via streak-stats.demolab.com</p>
    </div>
  );
}
