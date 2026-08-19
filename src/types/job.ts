export type Language = "HTML" | "CSS" | "JavaScript" | "Python" | "Ruby";
export type Tool = "React" | "Sass" | "RoR" | "Vue" | "Django";

export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Language[];
  tools: Tool[];
}

export type JobUI = Omit<Job, "id">;
