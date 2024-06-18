import CommandKeyIcon from "@/assets/icons/command_key.svg";
import KKeyIcon from "@/assets/icons/k_key.svg";
import MagnifierIcon from "@/assets/icons/magnifier.svg";
import Image from "next/image";

const Search = () => {
  return (
    <div className="flex items-center rounded-md border border-opacity-10 px-2 py-1">
      <div className="mr-1">
        <Image src={MagnifierIcon} alt="search" width={20} height={20} />
      </div>
      <input type="text" placeholder="Search..." className="bg-transparent" />
      <div className="relative mr-0.5 flex h-5 w-5 items-center justify-center rounded bg-gray-100 bg-opacity-10">
        <div className="absolute bottom-0 -translate-y-1">
          <Image src={CommandKeyIcon} alt="search" width={8} />
        </div>
      </div>
      <div className="relative flex h-5 w-5 items-center justify-center rounded bg-gray-100 bg-opacity-10">
        <div className="absolute bottom-0 -translate-y-1">
          <Image src={KKeyIcon} alt="search" width={8} />
        </div>
      </div>
    </div>
  );
};

export default Search;
