import type { Profile, Social } from "../types";

export const github: Social = {
  id: "github",
  label: "GitHub",
  handle: "oraldo666",
  url: "https://github.com/oraldo666",
};

export const profile: Profile = {
  firstName: "Orald",
  lastName: "Hysaj",
  name: "Orald Hysaj",
  nickname: "Aldo",
  title: "Senior Frontend & Mobile Developer",
  tagline:
    "I build secure, fast web and mobile products for marketplaces, fintech and media teams, from Stripe checkouts and KYC flows to the interfaces people use every day.",
  summary:
    "Frontend and mobile engineer with 4+ years building production apps in React, Next.js, TypeScript and React Native, across marketplaces, fintech/crypto and media. Strong focus on performance, payments, real-time features and production reliability.",
  location: "Tirana, Albania",
  availability: "Open to remote roles",
  careerStart: "2022-07-01",
  email: "orald.hysaj@hotmail.com",
  whatsapp: { display: "+1 929 284 8122", url: "https://wa.me/19292848122" },
  cv: "/Orald-Hysaj-CV.pdf",
  siteUrl: "https://aldo666.netlify.app",
  siteRepo: "https://github.com/oraldo666/personalweb",
  portrait: {
    src: "/portrait.jpg",
    srcSmall: "/portrait-sm.jpg",
    alt: "Black and white portrait of Orald Hysaj",
  },
  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "oraldo-hysaj",
      url: "https://www.linkedin.com/in/oraldo-hysaj/",
    },
    github,
    {
      id: "facebook",
      label: "Facebook",
      handle: "oraldo.hysaj",
      url: "https://www.facebook.com/oraldo.hysaj/",
    },
    {
      id: "youtube",
      label: "YouTube",
      handle: "Orald Hysaj",
      url: "https://www.youtube.com/channel/UCasOkv1YjzwLLEzwX3yjd2g",
    },
  ],
  about: [
    "I'm a frontend and mobile engineer from Tirana, Albania. Over the last four years I've shipped production apps for remote teams in Rovereto, Vilnius, New York and London: a five-language used-bike marketplace, a crypto exchange, a digital-content streaming platform and data tools for the maritime industry.",
    "My route in was unusual. I studied law at the University of Tirana and was partway through a master's in criminal law when I started teaching myself Python in 2021. Django came first, then JavaScript, React and React Native. The legal training never left: it shows up as real care for compliance, privacy and security, from KYC onboarding and Stripe checkout flows to fraud-triggered login challenges.",
    "Today I'm the main frontend contributor on BikeFlip, owning features end to end from Figma to Playwright tests. I care about performance you can measure, payments and real-time features that never fail silently, and the unglamorous details, like theming and internationalisation, done properly.",
  ],
  facts: [
    { label: "Based in", value: "Tirana, Albania" },
    { label: "Currently", value: "Software Frontend Developer at BikeFlip (remote)" },
    { label: "Languages", value: "Albanian (native), English (C1)" },
    { label: "Availability", value: "Open to remote roles" },
  ],
  stats: [
    { id: "years", label: "Years shipping production apps", suffix: "+" },
    { id: "companies", value: 4, label: "Companies, all remote" },
    { id: "locales", value: 5, label: "Locales live on BikeFlip" },
    { id: "countries", value: 4, label: "Countries worked with" },
  ],
};
