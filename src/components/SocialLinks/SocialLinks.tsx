import type { IconType } from "react-icons";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import type { SocialId } from "../../types";
import { profile } from "../../data/profile";
import { cx } from "../../lib/cx";
import s from "./SocialLinks.module.css";

const ICONS: Record<SocialId, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

export default function SocialLinks({
  showLabels = false,
  className,
}: {
  showLabels?: boolean;
  className?: string;
}) {
  return (
    <ul className={cx(s.list, showLabels && s.labelled, className)} role="list">
      {profile.socials.map((social) => {
        const Icon = ICONS[social.id];
        return (
          <li key={social.id}>
            <a
              href={social.url}
              className={s.link}
              target="_blank"
              rel="noreferrer me"
              aria-label={showLabels ? undefined : social.label}
              title={social.label}
            >
              {Icon && <Icon aria-hidden="true" />}
              {showLabels && <span>{social.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
