import type { ComponentPropsWithoutRef } from "react";
import { useJobCard } from "./context";

const logos = import.meta.glob("../../assets/*.svg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

export default function JobCardLogo({
  className,
  ...props
}: ComponentPropsWithoutRef<"img">) {
  const { company, logo } = useJobCard();
  const logoFileName = logo.split("/").pop();
  const logoPath = Object.entries(logos).find(([path]) =>
    path.endsWith(`/${logoFileName}`)
  )?.[1];

  return (
    <img
      {...props}
      className={`size-12 ${className ?? ""}`}
      src={logoPath}
      alt={`${company} Logo`}
    />
  );
}
