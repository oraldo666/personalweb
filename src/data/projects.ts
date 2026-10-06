/**
 * Case studies for the Work section. `art` picks the generated cover illustration,
 * `size` controls the bento placement: "wide" | "tall" | "half" | "banner".
 */
import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "bikeflip",
    title: "BikeFlip marketplace",
    client: "BikeFlip",
    place: "Rovereto, Italy",
    period: "2025 – present",
    role: "Main frontend contributor",
    art: "bike",
    size: "wide",
    summary:
      "A five-language European marketplace for used bikes, components and clothing, with Stripe checkout and real-time chat.",
    challenge:
      "A production SSR marketplace in EN, DE, IT, ES and FR that had grown fast: too much JavaScript on first load, search that fought SEO, a checkout with race conditions and error reporting nobody could hear.",
    built: [
      "Search rebuilt on collection URLs for all three product types, with redirects, URL sync, canonical and hreflang tags, sitemap and breadcrumbs.",
      "Stripe checkout hardening: fixed a race between order acceptance and payment capture, and silent failures when booking pickups.",
      "Lazy-loaded Stripe.js, analytics and SEO data, per-page translation bundles and instant signed-in state on first paint.",
      "Listing creation with direct-to-S3 uploads, a live condition rating and AI-suggested specs, built from Figma designs.",
      "Real-time messaging on Pusher / Laravel Echo, plus a Castle.io-triggered one-time-code login challenge.",
      "Sentry reporting with grouped noise (92% of network errors were crawlers), Playwright e2e suites, Node 24 migration and GitHub Actions CI.",
    ],
    outcome:
      "Smaller initial JavaScript, search pages that index properly in five locales, and a checkout and error pipeline the team can trust.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "SWR",
      "Stripe",
      "Pusher",
      "Sentry",
      "Amplitude",
      "Playwright",
    ],
  },
  {
    slug: "niza",
    title: "Crypto exchange mobile app",
    client: "NIZA Global",
    place: "Vilnius, Lithuania",
    period: "2024",
    role: "Web & Mobile Developer",
    art: "exchange",
    size: "tall",
    summary:
      "React Native trading and exchange app with launchpad and airdrop features, Sumsub KYC and a light/dark, multilingual UI.",
    challenge:
      "Fintech users expect a trading app that is fast, compliant and consistent on every screen, in every language, on both platforms.",
    built: [
      "Trading and exchange modules, launchpad and airdrop integrations in React Native.",
      "Payment flows with Sumsub KYC verification for compliant, low-friction onboarding.",
      "UI refactor to a consistent design system with light/dark mode and i18n shared across web and mobile.",
      "Performance work and cryptographic safeguards for data integrity and transaction security.",
    ],
    outcome:
      "A consistent, compliant mobile experience on iOS and Android with onboarding that meets KYC requirements.",
    stack: ["React Native", "React", "Sumsub KYC", "i18n"],
  },
  {
    slug: "media-platform",
    title: "Creator streaming platform",
    client: "Media client",
    nda: true,
    place: "New York, USA",
    period: "2023",
    role: "Software Developer",
    art: "stream",
    size: "half",
    summary:
      "Video streaming and paid digital content with an internal wallet, AI chat and a full admin dashboard, built from architecture to deployment.",
    challenge:
      "Launch a complete digital-content platform, user app and back office included, with streaming, purchases and moderation tooling from day one.",
    built: [
      "Video streaming and purchase of digital content (videos, images) with an internal wallet for payments.",
      "AI-powered chat to drive engagement.",
      "Profiles, content upload and editing, third-party sign-in.",
      "Admin panel for content, users, transactions and settings.",
    ],
    outcome:
      "A full platform and admin dashboard shipped end to end, from architecture to deployment.",
    stack: ["React", "Video streaming", "Payments & wallets", "AI chat"],
  },
  {
    slug: "marine",
    title: "Maritime data platform",
    client: "Marine Data Cloud Ltd",
    place: "London, UK",
    period: "2022 – 2024",
    role: "Web & Mobile Developer",
    art: "maritime",
    size: "half",
    summary:
      "Responsive web and mobile products for the maritime industry on a Strapi API, tuned for page speed and SEO.",
    challenge:
      "Turn complex maritime data workflows into products that work on a ship's phone as well as an office desktop.",
    built: [
      "Responsive interfaces in React, Next.js and React Native.",
      "REST APIs and data models in Strapi supporting complex workflows.",
      "Page speed and SEO improvements, secure coding against XSS and SQL injection.",
      "Deployments, hosting and direct client communication on requirements and delivery.",
    ],
    outcome:
      "Data-driven web and mobile apps delivered and hosted end to end for maritime clients.",
    stack: ["React", "Next.js", "React Native", "Strapi", "REST APIs"],
  },
  {
    slug: "site",
    title: "This portfolio",
    client: "Personal",
    place: "Open source",
    period: "2026",
    role: "Design & code",
    art: "site",
    size: "banner",
    summary:
      "The site you are reading: React 19, TypeScript and Vite 8 on a token-based design system, with light and dark themes, scroll-driven motion and generated artwork.",
    challenge:
      "Build a portfolio that shows how I work today: a considered design system, motion that serves the content, strong accessibility and SEO, and a content model that stays easy to update.",
    built: [
      "Design tokens for colour, type and spacing driving both themes, with the choice applied before first paint so there is never a flash.",
      "Motion for staggered reveals, a scroll-linked timeline, magnetic buttons, a custom cursor and case-study modals, all honouring reduced-motion preferences.",
      "Typed content model: every word on the page lives in TypeScript data files, so updates never touch components.",
      "Self-hosted variable fonts, hand-drawn SVG illustrations, an Open Graph card and structured data for rich sharing and search results.",
    ],
    outcome:
      "Lighthouse 99 for performance and 100 for accessibility, best practices and SEO, on a codebase that passes strict TypeScript and ESLint checks.",
    stack: ["React 19", "TypeScript", "Vite 8", "motion", "CSS Modules"],
    links: { repo: "https://github.com/oraldo666/personalweb" },
  },
];
