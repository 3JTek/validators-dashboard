import { PropsWithChildren } from "react";

const ValidatorsList = ({ children }: PropsWithChildren) => {
  return <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-300">{children}</div>;
};

export default ValidatorsList;
