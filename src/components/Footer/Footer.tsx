import { FiArrowUp } from "react-icons/fi";
import { profile } from "../../data/profile";
import { cx } from "../../lib/cx";
import Logo from "../Logo/Logo";
import s from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={cx("container", s.inner)}>
        <div className={s.brand}>
          <Logo size={22} />
          <span className={s.name}>{profile.name}</span>
          <span className={s.sep} aria-hidden="true" />
          <span className={s.muted}>{profile.location}</span>
        </div>
        <p className={s.muted}>
          Designed and built by {profile.name}. React 19, Vite and motion. Static, no backend.
        </p>
        <div className={s.right}>
          <span className={s.muted}>© {year}</span>
          <a href="#home" className={s.top}>
            Back to top <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
