import Link from "next/link";
import NavBarCtas from "./NavBarCtas";
import NavBarItems from "./NavBarItems";
import NavBarTitle from "./NavBarTitle";

const NavBar = () => {
  return (
    <nav className="flex h-16 flex-row items-center">
      <NavBarTitle />
      <NavBarItems></NavBarItems>
      <NavBarCtas />
    </nav>
  );
};

export default NavBar;
