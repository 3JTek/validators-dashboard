"use client";

import Search from "@/ui/controls/Search";
import Menu from "@/ui/menu/Menu";
import { usePathname } from "next/navigation";

const mainMenuItems = [
  { name: "overview", path: "/overview" },
  { name: "validators", path: "/validators/osmosis" },
];

const MainMenu = () => {
  const pathName = usePathname();

  const activeIndex = mainMenuItems.findIndex((item) => item.name === pathName.split("/")[1]);

  return (
    <div className="flex items-center">
      <div className="flex-grow">
        <Menu items={mainMenuItems} activeIndex={activeIndex} />
      </div>
      <div>
        <Search placeholder="Search..." />
      </div>
    </div>
  );
};

export default MainMenu;
