"use client";

import Link from "@/ui/navigation/Link";
import { usePathname } from "next/navigation";
import Search from "@/ui/controls/Search";

const menuItems = [
  { name: "overview", path: "/overview" },
  { name: "validators", path: "/validators" },
];

const Menu = () => {
  const pathName = usePathname().split("/")[1];

  return (
    <div className="flex h-16 items-center">
      <div className="flex flex-grow">
        {menuItems.map((item) => (
          <div key={item.path} className="mr-3">
            <Link active={item.name === pathName} path={item.path}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <Search />
    </div>
  );
};

export default Menu;
