import { createContext, useContext } from "react";
import type { JobUI } from "../../types/job";

export const JobCardContext = createContext<JobUI | null>(null);

export function useJobCard() {
  const job = useContext(JobCardContext);

  if (!job) {
    throw new Error("JobCard components must be used inside JobCard");
  }

  return job;
}
