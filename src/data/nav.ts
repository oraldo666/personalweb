import type { NavItem } from "../types";

export const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const SPY_IDS = ["home", ...NAV.map((item) => item.id)];
