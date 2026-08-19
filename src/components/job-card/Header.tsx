import type { ComponentPropsWithoutRef } from "react";
import { useJobCard } from "./context";

export function JobCardTags({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const { new: newJob, featured } = useJobCard();

  if (!newJob && !featured) {
    return null;
  }

  return (
    <div
      {...props}
      className={`flex gap-2 text-xs font-semibold uppercase text-white ${className ?? ""}`}
    >
      {newJob && (
        <span className="rounded-full bg-green-400 px-2 py-1">New!</span>
      )}
      {featured && (
        <span className="rounded-full bg-green-900 px-2 py-1">Featured!</span>
      )}
    </div>
  );
}

export default function JobCardHeader({
  className,
  ...props
}: ComponentPropsWithoutRef<"header">) {
  const { company } = useJobCard();

  return (
    <header {...props} className={`min-w-0 ${className ?? ""}`}>
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-semibold text-green-400">{company}</h4>
        <JobCardTags />
      </div>
    </header>
  );
}
