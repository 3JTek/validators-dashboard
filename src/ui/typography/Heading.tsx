import { PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren & {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading = ({ type = "h1", children }: HeadingProps) => {
  if (type === "h3") {
    return <h3 className="text-base font-semibold text-white">{children}</h3>;
  }
};

export default Heading;
