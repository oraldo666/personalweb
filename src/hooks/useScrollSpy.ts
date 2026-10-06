import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing a thin band in the middle of the viewport.
 * `ids` should be a stable array (module-level constant).
 */
export function useScrollSpy(
  ids: readonly string[],
  rootMargin = "-45% 0px -50% 0px",
): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin, threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return active;
}
