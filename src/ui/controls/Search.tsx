import MagnifierIcon from "@/assets/icons/magnifier.svg";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type SearchProps = {
  placeholder: string;
  icons?: StaticImageData[];
};

const SearchIcon = ({ icon }: { icon: StaticImageData }) => (
  <div className="relative mr-0.5 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-10">
    <div className="absolute bottom-0 -translate-y-1">
      <Image src={icon} alt="search" width={8} />
    </div>
  </div>
);

const Search = ({ placeholder, icons = [] }: SearchProps) => {
  return (
    <div className="flex items-center rounded-md border border-gray-100 px-2 py-1">
      <div className="mr-1">
        <Image src={MagnifierIcon} alt="search" width={20} height={20} />
      </div>
      <input type="text" placeholder={placeholder} className="bg-transparent" />
      {icons.map((icon) => (
        <SearchIcon key={icon.src} icon={icon} />
      ))}
    </div>
  );
};

export default Search;
