import type { Job } from "../types/job";
import { useState } from "react";
import JobCard from "./JobCard";
import jobList from "../../data.json";

export default function JobListingContainer() {
  const [jobs, setJobs] = useState<Job[]>(jobList as Job[]);

  return (
    <section className="flex flex-col gap-16 md:gap-12 pb-10">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          className="sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-x-6 sm:gap-y-1 sm:py-8 sm:pl-10 lg:gap-x-8 lg:pl-10"
        >
          <JobCard.Logo className="absolute left-6 top-0 -translate-y-1/2 sm:static sm:col-start-1 sm:row-span-2 sm:translate-y-0 sm:size-20" />
          <JobCard.Header className="max-sm:pt-4 sm:col-start-2 sm:row-start-1" />
          <JobCard.Info className="sm:col-start-2 sm:row-start-2" />
          <hr className="border-gray-400/30 sm:hidden" />
          <JobCard.Technologies className="sm:col-start-3 sm:row-span-2" />
        </JobCard>
      ))}
    </section>
  );
}
