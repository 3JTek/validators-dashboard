"use client";

import Link from "@/ui/navigation/Link";
import { usePathname } from "next/navigation";
import Search from "@/ui/controls/Search";

type MenuProps = {
  items: { name: string; path: string }[];
  activeIndex?: number;
};

const Menu = ({ items, activeIndex }: MenuProps) => {
  return (
    <div className="flex h-16 items-center">
      {items.map((item, index) => (
        <div key={item.path} className="mr-3">
          <Link active={index === activeIndex} path={item.path}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
