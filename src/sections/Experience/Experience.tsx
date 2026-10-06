import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { FiDownload } from "react-icons/fi";
import { experience } from "../../data/experience";
import { profile } from "../../data/profile";
import { cx } from "../../lib/cx";
import Button from "../../components/Button/Button";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import { Reveal } from "../../components/Reveal/Reveal";
import s from "./Experience.module.css";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.7"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section
      id="experience"
      className={cx("section section--line")}
      aria-labelledby="experience-title"
    >
      <div className={cx("container", s.grid)}>
        <div className={s.aside}>
          <SectionHeading
            index="02"
            label="Experience"
            id="experience-title"
            title="Four companies, four countries, one remote desk."
          >
            <p>
              Since 2022 I&apos;ve worked with product teams in Italy, Lithuania, the United States
              and the United Kingdom, always remotely from Albania. Here is what I shipped with each
              of them.
            </p>
          </SectionHeading>
          <Reveal delay={0.2}>
            <Button
              href={profile.cv}
              variant="ghost"
              size="sm"
              download="Orald-Hysaj-CV.pdf"
              icon={<FiDownload />}
            >
              Full CV (PDF)
            </Button>
          </Reveal>
        </div>

        <div className={s.timeline}>
          <div className={s.rail} aria-hidden="true">
            <motion.div className={s.railProgress} style={{ scaleY }} />
          </div>
          <ol ref={listRef} className={s.list} role="list">
            {experience.map((job) => (
              <TimelineItem key={job.id} job={job} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
