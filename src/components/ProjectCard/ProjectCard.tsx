import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUp } from "../../lib/motion";
import { cx } from "../../lib/cx";
import type { Project } from "../../types";
import Chip from "../Chip/Chip";
import ProjectArt from "../ProjectArt/ProjectArt";
import s from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project, opener: HTMLElement | null) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const openFromCard = (event: MouseEvent<HTMLElement>) => {
    const button = event.currentTarget.querySelector("button");
    onOpen(project, button);
  };
  return (
    <motion.article
      className={cx(s.card, s[project.size])}
      variants={fadeUp}
      onClick={openFromCard}
      data-cursor="view"
      aria-labelledby={`project-${project.slug}-card-title`}
    >
      <div className={s.cover}>
        <ProjectArt kind={project.art} />
      </div>
      <div className={s.body}>
        <p className={cx("mono", s.meta)}>
          {project.client}
          {project.nda && (
            <span className={s.nda} title="Client name withheld under a non-disclosure agreement">
              NDA
            </span>
          )}{" "}
          · {project.period}
        </p>
        <h3 id={`project-${project.slug}-card-title`} className={s.title}>
          {project.title}
        </h3>
        <p className={s.summary}>{project.summary}</p>
        <ul className={s.tags} role="list">
          {project.stack.slice(0, 4).map((tag) => (
            <li key={tag}>
              <Chip size="sm">{tag}</Chip>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={s.open}
          onClick={(event) => {
            event.stopPropagation();
            onOpen(project, event.currentTarget);
          }}
          aria-haspopup="dialog"
        >
          Open case study <FiArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}
