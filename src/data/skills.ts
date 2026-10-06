/** Skill groups from the CV. `size` controls the bento tile span. */
import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    size: "md",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS / SCSS", "Python", "SQL"],
  },
  {
    id: "web",
    title: "Web",
    size: "md",
    items: [
      "React",
      "Next.js (SSR / SSG)",
      "SWR",
      "React Context",
      "Zustand",
      "Formik + Yup",
      "next-intl (i18n)",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    size: "sm",
    items: ["React Native", "Light / dark theming", "Multilingual apps", "iOS & Android delivery"],
  },
  {
    id: "ui",
    title: "UI",
    size: "sm",
    items: [
      "SCSS Modules",
      "Tailwind CSS",
      "Ant Design",
      "Bootstrap",
      "Responsive design",
      "Figma handoff",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    size: "sm",
    items: ["REST APIs", "Axios", "Node.js", "Django / Django REST", "Strapi", "MySQL"],
  },
  {
    id: "integrations",
    title: "Integrations",
    size: "lg",
    items: [
      "Stripe",
      "Pusher / Laravel Echo",
      "Sumsub KYC",
      "Amplitude",
      "Sentry",
      "Builder.io",
      "Google Maps",
      "AWS S3",
      "Castle.io",
      "Cloudflare Turnstile",
      "NextAuth (OAuth)",
    ],
  },
  {
    id: "testing",
    title: "Testing & tooling",
    size: "sm",
    items: [
      "Playwright (e2e)",
      "GitHub Actions CI",
      "Git (GitHub, Bitbucket)",
      "Postman",
      "Docker",
    ],
  },
  {
    id: "practices",
    title: "Practices",
    size: "xl",
    items: [
      "Performance optimisation",
      "SEO (canonical, hreflang, sitemaps)",
      "Web security (CSRF, XSS)",
      "Agile / Scrum",
      "Clean, maintainable code",
    ],
  },
];
