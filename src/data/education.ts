import type { Degree, Language } from "../types";

export const education: Degree[] = [
  {
    id: "msc",
    degree: "Master in Criminal Law",
    school: "University of Tirana, Faculty of Law",
    location: "Tirana, Albania",
    start: "2019-09",
    end: "2021-09",
    current: true,
  },
  {
    id: "llb",
    degree: "Bachelor of Law",
    school: "University of Tirana, Faculty of Law",
    location: "Tirana, Albania",
    start: "2016-09",
    end: "2019-09",
    current: false,
  },
];

export const languages: Language[] = [
  { name: "Albanian", level: "Native", detail: "Mother tongue" },
  {
    name: "English",
    level: "C1",
    detail: "Professional working proficiency",
    cefr: [
      { skill: "Listening", level: "C1" },
      { skill: "Reading", level: "C1" },
      { skill: "Speaking", level: "B2–C1" },
      { skill: "Writing", level: "B2" },
    ],
  },
];
