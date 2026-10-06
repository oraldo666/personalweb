import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiCheck, FiCopy, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../../data/profile";
import { cx } from "../../lib/cx";
import { scaleIn } from "../../lib/motion";
import Button from "../../components/Button/Button";
import GitHubStreak from "../../components/GitHubStreak/GitHubStreak";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { Reveal } from "../../components/Reveal/Reveal";
import s from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section
      id="contact"
      className={cx("section section--line", s.contact)}
      aria-labelledby="contact-title"
    >
      <div className={s.glow} aria-hidden="true" />
      <div className={cx("container", s.grid)}>
        <div className={s.main}>
          <SectionHeading
            index="06"
            label="Contact"
            id="contact-title"
            title={
              <>
                Let&apos;s build <span className="accent">something.</span>
              </>
            }
          >
            <p>
              I&apos;m open to remote frontend and mobile roles, and to contract work on
              marketplaces, fintech and media products. Email or WhatsApp is the fastest way to
              reach me.
            </p>
          </SectionHeading>

          <Reveal className={s.emailRow} delay={0.1}>
            <a href={`mailto:${profile.email}`} className={s.email}>
              {profile.email}
            </a>
            <button type="button" className={s.copy} onClick={copyEmail}>
              {copied ? (
                <>
                  <FiCheck aria-hidden="true" /> Copied
                </>
              ) : (
                <>
                  <FiCopy aria-hidden="true" /> Copy
                </>
              )}
            </button>
            <span className="visually-hidden" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </Reveal>

          <Reveal className={s.actions} delay={0.2}>
            <Button href={`mailto:${profile.email}`} icon={<FiMail />}>
              Email me
            </Button>
            <Button
              href={profile.whatsapp.url}
              variant="ghost"
              target="_blank"
              rel="noreferrer"
              icon={<FaWhatsapp />}
            >
              WhatsApp
            </Button>
            <Button
              href={profile.cv}
              variant="ghost"
              download="Orald-Hysaj-CV.pdf"
              icon={<FiDownload />}
            >
              Download CV
            </Button>
          </Reveal>

          <Reveal delay={0.3}>
            <SocialLinks showLabels />
          </Reveal>
        </div>

        <Reveal className={s.side} variants={scaleIn} delay={0.2}>
          <GitHubStreak />
        </Reveal>
      </div>
    </section>
  );
}
