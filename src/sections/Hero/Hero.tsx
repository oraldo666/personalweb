import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FiArrowDown, FiDownload, FiMapPin } from "react-icons/fi";
import { profile } from "../../data/profile";
import { orbitIcons } from "../../data/stack";
import { yearsSince } from "../../lib/format";
import { cx } from "../../lib/cx";
import { EASE, fadeUp, lineReveal, stagger } from "../../lib/motion";
import Button from "../../components/Button/Button";
import CountUp from "../../components/CountUp/CountUp";
import Orbit from "../../components/Orbit/Orbit";
import { RevealGroup } from "../../components/Reveal/Reveal";
import s from "./Hero.module.css";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const orbitY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const years = yearsSince(profile.careerStart);
  const stats = profile.stats.map((stat) =>
    stat.id === "years" ? { ...stat, value: years } : stat,
  );

  return (
    <section id="home" ref={ref} className={s.hero} aria-labelledby="hero-title">
      <div className={s.blobA} aria-hidden="true" />
      <div className={s.blobB} aria-hidden="true" />

      <div className={cx("container", s.inner)}>
        <motion.div
          className={s.copy}
          style={{ y: copyY, opacity: copyOpacity }}
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className={cx("mono", s.eyebrow)}>
            <span className={s.pulse} aria-hidden="true" />
            {profile.title}
          </motion.p>

          <h1 id="hero-title" className={s.title}>
            <span className={s.line}>
              <motion.span variants={lineReveal} className={s.word}>
                {profile.firstName}
              </motion.span>
            </span>
            <span className={s.line}>
              <motion.span variants={lineReveal} className={s.word}>
                {profile.lastName}
                <span className={s.period}>.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p variants={fadeUp} className={cx("lead", s.tagline)}>
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className={s.actions}>
            <Button href="#work" icon={<FiArrowDown data-dir="down" />}>
              See my work
            </Button>
            <Button
              href={profile.cv}
              variant="ghost"
              download="Orald-Hysaj-CV.pdf"
              icon={<FiDownload />}
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={s.orbitWrap}
          style={{ y: orbitY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}
        >
          <Orbit items={orbitIcons} />
        </motion.div>
      </div>

      <div className={cx("container", s.footer)}>
        <RevealGroup
          as="ul"
          className={s.stats}
          role="list"
          staggerChildren={0.1}
          delayChildren={0.6}
        >
          {stats.map((stat) => (
            <motion.li key={stat.id} variants={fadeUp}>
              <span className={s.statNum}>
                <CountUp value={stat.value ?? 0} suffix={stat.suffix ?? ""} />
              </span>
              <span className={s.statLabel}>{stat.label}</span>
            </motion.li>
          ))}
        </RevealGroup>

        <p className={cx("mono", s.location)}>
          <FiMapPin aria-hidden="true" />
          {profile.location} · {profile.availability}
        </p>

        <a href="#about" className={s.scrollCue} aria-label="Scroll to the About section">
          <span className={s.scrollLine} aria-hidden="true" />
          <span className="mono">Scroll</span>
        </a>
      </div>
    </section>
  );
}
