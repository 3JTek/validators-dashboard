import Dropdown from "../../controls/Dropdown";

const NavBarCtas = () => {
  return (
    <div className="flex items-center">
      <div className="mr-6">
        <Dropdown text="Sign" type="light"></Dropdown>
      </div>

      <div>
        <Dropdown text="Connect Wallet" type="dark"></Dropdown>
      </div>
    </div>
  );
};

export default NavBarCtas;
