import type { IconType } from "react-icons";
import { motion } from "motion/react";
import {
  FiCheckCircle,
  FiCode,
  FiCompass,
  FiGlobe,
  FiLayout,
  FiLink,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";
import { skillGroups } from "../../data/skills";
import { cx } from "../../lib/cx";
import { fadeUp } from "../../lib/motion";
import Chip from "../../components/Chip/Chip";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Reveal, RevealGroup } from "../../components/Reveal/Reveal";
import s from "./Skills.module.css";

const ICONS: Record<string, IconType> = {
  languages: FiCode,
  web: FiGlobe,
  mobile: FiSmartphone,
  ui: FiLayout,
  integrations: FiLink,
  backend: FiServer,
  testing: FiCheckCircle,
  practices: FiCompass,
};

export default function Skills() {
  return (
    <section id="skills" className="section section--line" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading index="04" label="Skills" id="skills-title" title="The toolbox.">
          <p>
            Frontend first, mobile close behind, and enough backend to ship a feature end to end.
            Everything here has been used in production.
          </p>
        </SectionHeading>

        <RevealGroup className={s.grid} staggerChildren={0.06}>
          {skillGroups.map((group) => {
            const Icon = ICONS[group.id] ?? FiCode;
            return (
              <motion.article
                key={group.id}
                variants={fadeUp}
                className={cx(s.tile, s[group.size])}
                aria-labelledby={`skills-${group.id}`}
              >
                <header className={s.tileHead}>
                  <span className={s.tileIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 id={`skills-${group.id}`} className={s.tileTitle}>
                    {group.title}
                  </h3>
                  <span className={cx("mono", s.count)}>
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </header>
                <ul className={s.chips} role="list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </RevealGroup>

        <Reveal className={s.now}>
          <span className={cx("mono", s.nowLabel)}>Right now</span>
          <p>
            Deep in a Next.js 16 / React 19 codebase at BikeFlip: Stripe checkout, real-time chat on
            Pusher, Playwright coverage and performance work across five locales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
