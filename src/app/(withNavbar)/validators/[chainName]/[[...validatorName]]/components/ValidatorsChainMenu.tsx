"use client";

import Menu from "@/ui/menu/Menu";
import { usePathname } from "next/navigation";

const urlSegment = "/validators";

const chainMenuItems = [
  { name: "osmosis", path: `${urlSegment}/osmosis` },
  { name: "juno", path: `${urlSegment}/juno` },
  { name: "hub", path: `${urlSegment}/hub` },
  { name: "evmos", path: `${urlSegment}/evmos` },
];

const ValidatorsChainMenu = () => {
  const pathName = usePathname();

  const activeIndex = chainMenuItems.findIndex((item) => item.name === pathName.split("/")[2]);

  return <Menu items={chainMenuItems} activeIndex={activeIndex} />;
};
export default ValidatorsChainMenu;
