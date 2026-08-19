import type { ComponentPropsWithoutRef } from "react";
import { useJobCard } from "./context";

export default function JobCardInfo({
  className,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const { position, postedAt, contract, location } = useJobCard();

  return (
    <section {...props} className={className}>
      <h4 className="text-lg font-semibold text-green-900 transition-colors hover:text-green-400">
        {position}
      </h4>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 text-base">
        <span>{postedAt}</span>
        <span aria-hidden="true">•</span>
        <span>{contract}</span>
        <span aria-hidden="true">•</span>
        <span>{location}</span>
      </div>
    </section>
  );
}
