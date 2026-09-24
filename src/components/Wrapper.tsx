import type { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <main className="w-full">{children}</main>;
};

export default Wrapper;
