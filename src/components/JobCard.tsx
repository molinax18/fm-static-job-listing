import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { JobUI } from "../types/job";
import { JobCardContext } from "./job-card/context";
import JobCardHeader, { JobCardTags } from "./job-card/Header";
import JobCardInfo from "./job-card/Info";
import JobCardLogo from "./job-card/Logo";
import JobCardTechnologies from "./job-card/Technologies";

interface JobCardProps extends ComponentPropsWithoutRef<"article"> {
  job: JobUI;
  children: ReactNode;
}

function JobCard({ job, children, className, ...props }: JobCardProps) {
  const isFeatured = job.featured;

  return (
    <JobCardContext.Provider value={job}>
      <article
        {...props}
        className={`relative grid gap-4 rounded-sm border-l-4 bg-white p-6 shadow-sm ${
          isFeatured ? "border-green-400" : "border-transparent"
        } ${className ?? ""}`}
      >
        {children}
      </article>
    </JobCardContext.Provider>
  );
}

JobCard.Header = JobCardHeader;
JobCard.Logo = JobCardLogo;
JobCard.Tags = JobCardTags;
JobCard.Info = JobCardInfo;
JobCard.Technologies = JobCardTechnologies;

export default JobCard;
