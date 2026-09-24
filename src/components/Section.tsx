import type { ReactNode } from "react";
import { cn } from "../utils/cn";

const Section = ({
  theme = "default",
  className,
  children,
}: {
  theme?: "primary" | "secondary" | "default";
  className: string;
  children: ReactNode;
}) => {
  const bg =
    {
      primary: "bg-primary",
      secondary: "bg-secondary",
      default: "bg-white",
    }[theme] || "default";

  return (
    <section className={cn(bg, className)}>
      <div className="box-container">{children}</div>
    </section>
  );
};

export default Section;
