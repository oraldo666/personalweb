import { useCallback, useRef, useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { RevealGroup } from "../../components/Reveal/Reveal";
import s from "./Work.module.css";

export default function Work() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const active = projects.find((project) => project.slug === activeSlug) ?? null;

  const open = useCallback((project: Project, opener: HTMLElement | null) => {
    openerRef.current = opener ?? null;
    setActiveSlug(project.slug);
  }, []);

  const close = useCallback(() => {
    setActiveSlug(null);
    const opener = openerRef.current;
    if (opener instanceof HTMLElement) opener.focus();
  }, []);

  return (
    <section id="work" className="section section--line" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          index="03"
          label="Selected work"
          id="work-title"
          title="Products I've shipped."
        >
          <p>
            Client work from the last four years. Screenshots stay with the clients, so each card
            opens a short case study instead: the challenge, what I built and what came out of it.
          </p>
        </SectionHeading>

        <RevealGroup className={s.grid} staggerChildren={0.1}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={open} />
          ))}
        </RevealGroup>
      </div>

      <ProjectModal project={active} onClose={close} />
    </section>
  );
}
