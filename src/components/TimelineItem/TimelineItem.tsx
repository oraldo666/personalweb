import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { formatPeriod } from "../../lib/format";
import { cx } from "../../lib/cx";
import type { Job } from "../../types";
import Chip from "../Chip/Chip";
import { Reveal } from "../Reveal/Reveal";
import s from "./TimelineItem.module.css";

const PREVIEW = 4;

export default function TimelineItem({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = job.highlights.length > PREVIEW;
  const shown = expanded || !canExpand ? job.highlights : job.highlights.slice(0, PREVIEW);
  const hiddenCount = job.highlights.length - PREVIEW;
  const listId = `${job.id}-highlights`;

  return (
    <Reveal as="li" className={s.item} data-current={job.current || undefined}>
      <div className={s.marker} aria-hidden="true">
        <span />
      </div>
      <article className={s.card} aria-labelledby={`${job.id}-company`}>
        <header className={s.head}>
          <p className={cx("mono", s.period)}>
            <time>{formatPeriod(job)}</time>
            {job.current && <span className={s.now}>Now</span>}
          </p>
          <h3 id={`${job.id}-company`} className={s.company}>
            {job.company}
          </h3>
          <p className={s.role}>
            {job.role} · {job.location}
            {job.remote && " · Remote"}
          </p>
        </header>

        <p className={s.summary}>{job.summary}</p>

        <ul id={listId} className={s.highlights}>
          {shown.map((item) => (
            <li key={item.text}>
              {item.label && <strong>{item.label}. </strong>}
              {item.text}
            </li>
          ))}
        </ul>

        {canExpand && (
          <button
            type="button"
            className={s.more}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={listId}
          >
            {expanded ? (
              <>
                Show less <FiChevronUp aria-hidden="true" />
              </>
            ) : (
              <>
                Show {hiddenCount} more <FiChevronDown aria-hidden="true" />
              </>
            )}
          </button>
        )}

        <ul className={s.stack} role="list">
          {job.stack.map((tag) => (
            <li key={tag}>
              <Chip size="sm">{tag}</Chip>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
