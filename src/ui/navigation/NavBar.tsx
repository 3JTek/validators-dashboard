import NavBarCtas from "./NavBarCtas";
import NavBarItems from "./NavBarItems";
import NavBarTitle from "./NavBarTitle";

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center py-4">
      <NavBarTitle />
      <NavBarItems></NavBarItems>
      <NavBarCtas />
    </nav>
  );
};

export default NavBar;
