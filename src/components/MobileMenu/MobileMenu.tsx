import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowDown, FiX } from "react-icons/fi";
import { NAV } from "../../data/nav";
import { profile } from "../../data/profile";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { fadeUp, stagger } from "../../lib/motion";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SocialLinks from "../SocialLinks/SocialLinks";
import s from "./MobileMenu.module.css";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  active: string | null;
}

export default function MobileMenu({ open, onClose, active }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;
    const opener = document.activeElement;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className={s.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={s.blob} aria-hidden="true" />
          <div className={s.top}>
            <a href="#home" className={s.brand} onClick={onClose} aria-label="Back to top">
              <Logo />
              <span>{profile.name}</span>
            </a>
            <div className={s.topActions}>
              <ThemeToggle />
              <button
                ref={closeRef}
                type="button"
                className={s.close}
                onClick={onClose}
                aria-label="Close menu"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </div>

          <motion.ul
            className={s.list}
            role="list"
            variants={stagger(0.06, 0.08)}
            initial="hidden"
            animate="show"
          >
            {NAV.map((item, index) => (
              <motion.li key={item.id} variants={fadeUp}>
                <a
                  href={`#${item.id}`}
                  className={s.link}
                  onClick={onClose}
                  data-active={active === item.id || undefined}
                >
                  <span className={s.index}>0{index + 1}</span>
                  <span className={s.label}>{item.label}</span>
                  <FiArrowDown className={s.arrow} aria-hidden="true" />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className={s.bottom}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            <a href={profile.cv} className={s.cv} download="Orald-Hysaj-CV.pdf" onClick={onClose}>
              Download CV
            </a>
            <SocialLinks />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
