import { motion } from "motion/react";
import { education, languages } from "../../data/education";
import { formatYearPeriod } from "../../lib/format";
import { cx } from "../../lib/cx";
import { fadeUp } from "../../lib/motion";
import Chip from "../../components/Chip/Chip";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Reveal, RevealGroup } from "../../components/Reveal/Reveal";
import s from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section section--line" aria-labelledby="education-title">
      <div className={cx("container", s.grid)}>
        <SectionHeading
          index="05"
          label="Education"
          id="education-title"
          title="An unusual route in."
        >
          <p>
            Before writing software I trained as a lawyer. Reading statutes turned out to be good
            preparation for reading specs, and for caring about compliance, privacy and the edge
            cases that end up in court.
          </p>
        </SectionHeading>

        <div className={s.cards}>
          <RevealGroup className={s.degrees}>
            {education.map((item) => (
              <motion.article key={item.id} variants={fadeUp} className={s.degree}>
                <p className="mono">{formatYearPeriod(item)}</p>
                <h3 className={s.degreeTitle}>{item.degree}</h3>
                <p className={s.school}>{item.school}</p>
                <p className={s.place}>{item.location}</p>
              </motion.article>
            ))}
          </RevealGroup>

          <Reveal className={s.languages} delay={0.15}>
            <h3 className={s.langTitle}>Languages</h3>
            <ul role="list" className={s.langList}>
              {languages.map((language) => (
                <li key={language.name}>
                  <div className={s.langHead}>
                    <span className={s.langName}>{language.name}</span>
                    <Chip tone="accent" size="sm">
                      {language.level}
                    </Chip>
                  </div>
                  <p className={s.langDetail}>{language.detail}</p>
                  {language.cefr && (
                    <ul className={s.cefr} role="list">
                      {language.cefr.map((entry) => (
                        <li key={entry.skill}>
                          <span className="mono">{entry.skill}</span>
                          <span>{entry.level}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
