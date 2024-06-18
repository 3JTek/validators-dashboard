import Link from "../Link";

const navbarItems = [
  { name: "home", link: "/" },
  { name: "github", link: "https://github.com/skip-mev/block-sdk" },
  { name: "career", link: "https://skip-protocol.notion.site/Skip-Open-Positions-a80c9cd99f2247118f89706f07fb563a" },
  { name: "contact", link: "https://x.com/skipprotocol" },
];

const NavBarItems = () => {
  return (
    <div className="mr-24 flex items-center">
      {navbarItems.map((item: any) => (
        <div key={item.name} className="px-4">
          <Link url={item.link}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavBarItems;
