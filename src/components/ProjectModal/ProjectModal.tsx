import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { EASE } from "../../lib/motion";
import type { Project } from "../../types";
import Chip from "../Chip/Chip";
import ProjectArt from "../ProjectArt/ProjectArt";
import s from "./ProjectModal.module.css";

const FOCUSABLE = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = Boolean(project);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className={s.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.article
            ref={panelRef}
            className={s.panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-${project.slug}-title`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className={s.close}
              onClick={onClose}
              aria-label="Close case study"
            >
              <FiX aria-hidden="true" />
            </button>

            <div className={s.cover}>
              <ProjectArt kind={project.art} />
            </div>

            <div className={s.content}>
              <p className="mono">
                {project.client} · {project.place} · {project.period}
              </p>
              <h3 id={`project-${project.slug}-title`} className={s.title}>
                {project.title}
              </h3>
              <p className={s.lead}>{project.summary}</p>

              <dl className={s.facts}>
                <div>
                  <dt className="mono">Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt className="mono">Period</dt>
                  <dd>{project.period}</dd>
                </div>
                <div>
                  <dt className="mono">Client</dt>
                  <dd>{project.nda ? "Name withheld under NDA" : project.client}</dd>
                </div>
              </dl>

              <section className={s.block} aria-labelledby={`project-${project.slug}-challenge`}>
                <h4 id={`project-${project.slug}-challenge`}>The challenge</h4>
                <p>{project.challenge}</p>
              </section>

              <section className={s.block} aria-labelledby={`project-${project.slug}-built`}>
                <h4 id={`project-${project.slug}-built`}>What I built</h4>
                <ul className={s.list}>
                  {project.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className={s.block} aria-labelledby={`project-${project.slug}-outcome`}>
                <h4 id={`project-${project.slug}-outcome`}>Outcome</h4>
                <p>{project.outcome}</p>
              </section>

              <section className={s.block} aria-labelledby={`project-${project.slug}-stack`}>
                <h4 id={`project-${project.slug}-stack`}>Stack</h4>
                <ul className={s.tags} role="list">
                  {project.stack.map((tag) => (
                    <li key={tag}>
                      <Chip>{tag}</Chip>
                    </li>
                  ))}
                </ul>
              </section>

              {project.links?.repo && (
                <a href={project.links.repo} className={s.link} target="_blank" rel="noreferrer">
                  View the source on GitHub <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
