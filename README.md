# Orald Hysaj — Portfolio

Personal site of Orald (Aldo) Hysaj, Senior Frontend & Mobile Developer. Live at
[aldo666.netlify.app](https://aldo666.netlify.app).

A single-page portfolio built on a token-based design system with light and dark themes,
scroll-driven motion and a typed content model. Lighthouse scores 99 for performance and 100 for
accessibility, best practices and SEO. Content is plain TypeScript data, so updating the CV never
means touching a component.

## Stack

| Layer     | Choice                                                                       |
| --------- | ---------------------------------------------------------------------------- |
| Framework | React 19 + TypeScript (strict)                                               |
| Build     | Vite 8                                                                       |
| Motion    | [`motion`](https://motion.dev) (scroll reveals, shared layout, springs)      |
| Styling   | CSS Modules on a token-based design system, dark + light themes              |
| Fonts     | Self-hosted variable fonts via Fontsource: Fraunces, Manrope, JetBrains Mono |
| Icons     | react-icons                                                                  |
| Quality   | ESLint 10 (typescript-eslint, react-hooks, react-refresh), Prettier          |
| Hosting   | Netlify (`netlify.toml`), publish dir `dist`                                 |

## Scripts

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build  -> dist/
npm run preview    # serve the production build
npm run lint       # eslint .
npm run typecheck  # tsc -b --noEmit
npm run format     # prettier --write .
```

Requires Node 22.12+ (Netlify builds on Node 24, pinned in `netlify.toml`).

## Editing content

Everything shown on the page lives in `src/data/`:

| File            | What it holds                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------- |
| `profile.ts`    | Name, title, tagline, bio paragraphs, location, email, WhatsApp, socials, stats               |
| `experience.ts` | Work history. Dates are `YYYY-MM`; `end: null` + `current: false` renders the start date only |
| `projects.ts`   | Case studies for the Work section (`art` picks the cover illustration, `size` the bento slot) |
| `skills.ts`     | Skill groups and their chips                                                                  |
| `education.ts`  | Degrees and languages                                                                         |
| `stack.ts`      | Icons on the hero orbit and labels in the marquee                                             |
| `nav.ts`        | Section ids and labels                                                                        |

Types for all of the above are in `src/types.ts`.

Static assets (CV PDF, portrait, favicons, Open Graph image) live in `public/`. Replace
`public/Orald-Hysaj-CV.pdf` to update the downloadable CV.

## Structure

```
index.html              entry, meta tags, pre-paint theme script
src/
  main.tsx              fonts, global styles, React root
  App.tsx               page composition
  styles/               tokens.css (design tokens, both themes), global.css
  data/                 all content
  types.ts              shared data types
  lib/                  theme helpers, motion variants, formatters
  hooks/                useTheme, useScrollSpy, useMediaQuery, useIsTouch, useLockBodyScroll
  components/           Nav, MobileMenu, Cursor, Orbit, Marquee, Reveal, Button, ProjectCard, ...
  sections/             Hero, About, Experience, Work, Skills, Education, Contact
```

## Accessibility and motion

- Semantic landmarks, skip link, visible focus rings, keyboard-operable menu and modals.
- `prefers-reduced-motion` disables the marquee, orbit, custom cursor and transform animations
  (`<MotionConfig reducedMotion="user">`); content remains fully visible.
- Theme follows the OS until the visitor picks one; the choice is stored in `localStorage` and
  applied before first paint to avoid a flash.
