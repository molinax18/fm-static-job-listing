import type { ComponentPropsWithoutRef } from "react";
import { useJobCard } from "./context";

export default function JobCardTechnologies({
  className,
  ...props
}: ComponentPropsWithoutRef<"footer">) {
  const { role, level, languages, tools } = useJobCard();
  const technologies = [role, level, ...languages, ...tools];

  return (
    <footer {...props} className={`flex flex-wrap gap-4 ${className ?? ""}`}>
      {technologies.map((technology) => (
        <span
          key={technology}
          className="bg-green-50 px-3 py-2 font-semibold text-green-400"
        >
          {technology}
        </span>
      ))}
    </footer>
  );
}
