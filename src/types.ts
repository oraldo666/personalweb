import type { IconType } from "react-icons";

export type Theme = "dark" | "light";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
}

export type SocialId = "linkedin" | "github" | "facebook" | "youtube";

export interface Social {
  id: SocialId;
  label: string;
  handle: string;
  url: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Stat {
  id: string;
  label: string;
  value?: number;
  suffix?: string;
}

export interface Portrait {
  src: string;
  srcSmall: string;
  alt: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  name: string;
  nickname: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  /** ISO date of the first professional role; drives the "years" counter. */
  careerStart: string;
  email: string;
  whatsapp: { display: string; url: string };
  cv: string;
  siteUrl: string;
  siteRepo: string;
  portrait: Portrait;
  socials: Social[];
  about: string[];
  facts: Fact[];
  stats: Stat[];
}

export interface Period {
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM", or null when unknown */
  end: string | null;
  current: boolean;
}

export interface Highlight {
  label?: string;
  text: string;
}

export interface Job extends Period {
  id: string;
  company: string;
  role: string;
  location: string;
  remote: boolean;
  summary: string;
  highlights: Highlight[];
  stack: string[];
}

export type ArtKind = "bike" | "exchange" | "stream" | "maritime" | "site";
export type CardSize = "wide" | "tall" | "half" | "banner";

export interface Project {
  slug: string;
  title: string;
  client: string;
  place: string;
  period: string;
  role: string;
  art: ArtKind;
  size: CardSize;
  summary: string;
  challenge: string;
  built: string[];
  outcome: string;
  stack: string[];
  links?: { repo?: string; live?: string };
}

export type TileSize = "sm" | "md" | "lg" | "xl";

export interface SkillGroup {
  id: string;
  title: string;
  size: TileSize;
  items: string[];
}

export interface Degree extends Period {
  id: string;
  degree: string;
  school: string;
  location: string;
}

export interface CefrEntry {
  skill: string;
  level: string;
}

export interface Language {
  name: string;
  level: string;
  detail: string;
  cefr?: CefrEntry[];
}

export interface OrbitIcon {
  id: string;
  label: string;
  Icon: IconType;
}

export interface NavItem {
  id: string;
  label: string;
}
