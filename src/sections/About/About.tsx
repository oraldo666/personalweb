import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { profile } from "../../data/profile";
import { useIsTouch } from "../../hooks/useIsTouch";
import { cx } from "../../lib/cx";
import { fadeUp, scaleIn } from "../../lib/motion";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Reveal, RevealGroup } from "../../components/Reveal/Reveal";
import s from "./About.module.css";

const TILT = { stiffness: 150, damping: 20, mass: 0.6 };

function PortraitCard() {
  const reduced = useReducedMotion() === true;
  const isTouch = useIsTouch();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, TILT);
  const sry = useSpring(ry, TILT);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced || isTouch) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  };
  const onPointerLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const { portrait } = profile;
  return (
    <div className={s.portraitScene} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <motion.figure className={s.portrait} style={{ rotateX: srx, rotateY: sry }}>
        <img
          src={portrait.src}
          srcSet={`${portrait.srcSmall} 640w, ${portrait.src} 1200w`}
          sizes="(max-width: 960px) 80vw, 38vw"
          width="1200"
          height="1500"
          alt={portrait.alt}
          loading="lazy"
          decoding="async"
        />
        <figcaption className={s.caption}>
          <span className={s.captionDot} aria-hidden="true" />
          <span className="mono">{profile.location}</span>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className={cx("section", s.about)} aria-labelledby="about-title">
      <div className={cx("container", s.grid)}>
        <Reveal className={s.portraitCol} variants={scaleIn}>
          <PortraitCard />
        </Reveal>

        <div className={s.copy}>
          <SectionHeading
            index="01"
            label="About"
            id="about-title"
            title={
              <>
                Hi, I&apos;m <span className="accent">Aldo</span>.
              </>
            }
          />

          <RevealGroup className={s.paragraphs}>
            {profile.about.map((paragraph, index) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                variants={fadeUp}
                className={index === 0 ? s.leadParagraph : undefined}
              >
                {paragraph}
              </motion.p>
            ))}
          </RevealGroup>

          <Reveal as="dl" className={s.facts}>
            {profile.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="mono">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
