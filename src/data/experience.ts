/**
 * Work history, most recent first. Dates are "YYYY-MM".
 * `end: null` with `current: false` means the end date is not yet known; the UI then shows the
 * start date only rather than inventing one.
 */
import type { Job } from "../types";

export const experience: Job[] = [
  {
    id: "bikeflip",
    company: "BikeFlip",
    role: "Software Frontend Developer",
    location: "Rovereto, Italy",
    remote: true,
    start: "2025-07",
    end: null,
    current: true,
    summary:
      "Used-bike marketplace for bikes, components and clothing serving five European locales. Main frontend contributor on a production SSR marketplace in EN, DE, IT, ES and FR, shipping features end to end across search, listings, checkout, payments and real-time chat.",
    highlights: [
      {
        label: "Performance",
        text: "Made Stripe.js, analytics and SEO data load only when needed and limited each page to the translations it uses, shrinking initial JavaScript. Added instant signed-in state on first paint.",
      },
      {
        label: "Search & SEO",
        text: "Rebuilt search on collection URLs for all three product types, with redirects, URL sync, canonical and hreflang tags, sitemap and breadcrumbs.",
      },
      {
        label: "Checkout & payments",
        text: "Worked on the Stripe checkout flow; fixed a race between order acceptance and payment capture, and silent failures when booking pickups.",
      },
      {
        label: "Security",
        text: "Built an email one-time-code login challenge triggered by Castle.io fraud detection.",
      },
      {
        label: "Listing creation",
        text: "Built direct-to-S3 image uploads, a live condition rating, AI-suggested specs and new pickers from Figma designs.",
      },
      {
        label: "Reliability",
        text: "Set up Sentry reporting and cut alert noise; found production error reporting was silent and grouped network errors that were 92% crawler traffic.",
      },
      {
        label: "Real-time chat",
        text: "Built messaging features on Pusher / Laravel Echo: pending-action notifier, options menu with block and archive, shipping-label actions.",
      },
      {
        label: "Quality & infra",
        text: "Wrote Playwright e2e suites with mocked APIs, migrated the app to Node 24 and maintained GitHub Actions CI.",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "SWR",
      "Stripe",
      "Pusher",
      "Amplitude",
      "Sentry",
      "Playwright",
    ],
  },
  {
    id: "niza",
    company: "NIZA Global",
    role: "Web & Mobile Developer",
    location: "Vilnius, Lithuania",
    remote: true,
    start: "2024-01",
    end: "2025-10",
    current: false,
    summary: "Fintech and crypto exchange; web and React Native apps.",
    highlights: [
      {
        label: "Mobile",
        text: "Built core mobile features in React Native: trading and exchange modules, launchpad and airdrop integrations.",
      },
      {
        label: "Payments & KYC",
        text: "Built payment flows with Sumsub KYC verification for compliant, low-friction onboarding.",
      },
      {
        label: "Design system",
        text: "Led a UI refactor to a consistent design system, with light/dark mode and multilingual (i18n) support across web and mobile.",
      },
      {
        label: "Performance & security",
        text: "Improved app performance and applied cryptographic safeguards for data integrity and transaction security.",
      },
    ],
    stack: ["React Native", "React", "Sumsub KYC", "i18n", "Fintech"],
  },
  {
    id: "media-platform",
    company: "Digital content platform",
    nda: true,
    role: "Software Developer",
    location: "New York, USA",
    remote: true,
    start: "2023-10",
    end: "2026-07",
    current: false,
    summary:
      "Digital content platform; built the user app and admin dashboard from architecture to deployment.",
    highlights: [
      {
        label: "Streaming & payments",
        text: "Built video streaming and purchase of digital content (videos, images), with an internal wallet for payments.",
      },
      { label: "AI", text: "Integrated an AI-powered chat to drive user engagement." },
      {
        label: "User features",
        text: "Built profiles, content upload and editing, and third-party sign-in.",
      },
      {
        label: "Admin",
        text: "Built the admin panel for content, users, transactions and settings.",
      },
    ],
    stack: ["React", "Video streaming", "Payments & wallets", "AI chat", "Admin dashboard"],
  },
  {
    id: "mdc",
    company: "Marine Data Cloud Ltd",
    role: "Web & Mobile Developer",
    location: "London, UK",
    remote: true,
    start: "2022-07",
    end: "2024-02",
    current: false,
    summary: "Data-driven web and mobile products for the maritime industry.",
    highlights: [
      {
        label: "Frontend",
        text: "Built responsive web and mobile interfaces in React, Next.js and React Native.",
      },
      {
        label: "Backend",
        text: "Built REST APIs and data models in Strapi to support complex workflows.",
      },
      {
        label: "Performance & security",
        text: "Improved page speed and SEO, and applied secure coding practices against XSS and SQL injection.",
      },
      {
        label: "Delivery",
        text: "Managed deployments and hosting, and worked directly with clients on requirements and delivery.",
      },
    ],
    stack: ["React", "Next.js", "React Native", "Strapi", "REST APIs", "SEO"],
  },
];
