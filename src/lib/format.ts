import type { Period } from "../types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-07" -> "Jul 2025" */
export function formatMonth(ym: string | null | undefined): string {
  if (!ym) return "";
  const [year, month] = ym.split("-").map(Number);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

/** Month-granularity period. Unknown end dates render the start only (never invented). */
export function formatPeriod({ start, end, current }: Period): string {
  const from = formatMonth(start);
  if (current) return `${from} – Present`;
  if (end) return `${from} – ${formatMonth(end)}`;
  return from;
}

/** Year-granularity period, e.g. "2016 – 2019" or "2019 – Present". */
export function formatYearPeriod({ start, end, current }: Period): string {
  const from = start ? start.slice(0, 4) : "";
  if (current) return `${from} – Present`;
  if (end) return `${from} – ${end.slice(0, 4)}`;
  return from;
}

export function yearsSince(isoDate: string, now: Date = new Date()): number {
  const elapsed = now.getTime() - new Date(isoDate).getTime();
  return Math.max(0, Math.floor(elapsed / (365.25 * 24 * 60 * 60 * 1000)));
}
