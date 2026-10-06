import s from "./Marquee.module.css";

interface MarqueeProps {
  items: string[];
  label?: string;
}

export default function Marquee({ items, label = "Technologies I work with" }: MarqueeProps) {
  const renderList = (hidden: boolean) => (
    <ul className={s.list} role="list" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={s.item}>
          <span className={s.dot} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={s.marquee} role="region" aria-label={label}>
      <div className={s.track}>
        {renderList(false)}
        {renderList(true)}
      </div>
    </div>
  );
}
