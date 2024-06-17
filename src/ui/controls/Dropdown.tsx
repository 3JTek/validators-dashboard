import Image from "next/image";

import ArrowDropdownLight from "@/assets/icons/arrow_drop_down_light.svg";
import ArrowDropdownDark from "@/assets/icons/arrow_drop_down_dark.svg";

type DropdownProps = {
  text: string;
  type: "light" | "dark";
};

const Dropdown = ({ text, type }: DropdownProps) => {
  return (
    <button
      className={`rounded-md px-3 py-2 ${type === "light" ? "bg-white text-black" : "bg-gray-200 bg-opacity-10 text-white"}`}
    >
      <div className="flex">
        <span className="mr-2">{text}</span>
        <Image src={type === "light" ? ArrowDropdownDark : ArrowDropdownLight} alt="arrow-icon"></Image>
      </div>
    </button>
  );
};

export default Dropdown;
