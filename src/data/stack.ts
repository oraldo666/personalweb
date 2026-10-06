import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiStripe,
  SiPython,
  SiDjango,
  SiStrapi,
  SiGit,
  SiDocker,
  SiSentry,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { OrbitIcon } from "../types";

/** Icons orbiting the hero name. Order is the clockwise order on the ring. */
export const orbitIcons: OrbitIcon[] = [
  { id: "react", label: "React", Icon: SiReact },
  { id: "nextjs", label: "Next.js", Icon: SiNextdotjs },
  { id: "typescript", label: "TypeScript", Icon: SiTypescript },
  { id: "react-native", label: "React Native", Icon: TbBrandReactNative },
  { id: "nodejs", label: "Node.js", Icon: SiNodedotjs },
  { id: "stripe", label: "Stripe", Icon: SiStripe },
  { id: "python", label: "Python", Icon: SiPython },
  { id: "django", label: "Django", Icon: SiDjango },
  { id: "strapi", label: "Strapi", Icon: SiStrapi },
  { id: "git", label: "Git", Icon: SiGit },
  { id: "docker", label: "Docker", Icon: SiDocker },
  { id: "sentry", label: "Sentry", Icon: SiSentry },
  { id: "javascript", label: "JavaScript", Icon: SiJavascript },
];

/** Plain labels for the marquee strip. */
export const marqueeItems: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Stripe",
  "Playwright",
  "SWR",
  "Zustand",
  "Tailwind CSS",
  "Sentry",
  "Pusher",
  "Sumsub KYC",
  "next-intl",
  "Django",
  "Strapi",
  "MySQL",
  "GitHub Actions",
];
