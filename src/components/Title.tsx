import { type ReactNode } from "react";

const Title = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return <h1 className={className}>{children}</h1>;
};

export default Title;
