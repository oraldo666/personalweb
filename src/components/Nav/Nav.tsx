import { useState } from "react";
import { LayoutGroup, motion, useMotionValueEvent, useScroll } from "motion/react";
import { FiMenu } from "react-icons/fi";
import { NAV, SPY_IDS } from "../../data/nav";
import { profile } from "../../data/profile";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { EASE } from "../../lib/motion";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import s from "./Nav.module.css";

interface NavProps {
  menuOpen: boolean;
  onMenuChange: (open: boolean) => void;
}

export default function Nav({ menuOpen, onMenuChange }: NavProps) {
  const active = useScrollSpy(SPY_IDS);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 240 && !menuOpen);
    setScrolled(y > 24);
  });

  return (
    <>
      <motion.header
        className={s.header}
        data-scrolled={scrolled || undefined}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <a href="#home" className={s.brand} aria-label="Orald Hysaj, back to top">
          <Logo />
          <span className={s.brandText}>{profile.name}</span>
        </a>

        <nav className={s.nav} aria-label="Primary">
          <LayoutGroup id="primary-nav">
            <ul className={s.list} role="list">
              {NAV.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={s.link}
                      data-active={isActive || undefined}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className={s.indicator}
                          transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        />
                      )}
                      <span className={s.linkLabel}>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>
        </nav>

        <div className={s.actions}>
          <ThemeToggle />
          <a href={profile.cv} className={s.cv} download="Orald-Hysaj-CV.pdf">
            CV
          </a>
          <button
            type="button"
            className={s.menuBtn}
            onClick={() => onMenuChange(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => onMenuChange(false)} active={active} />
    </>
  );
}
