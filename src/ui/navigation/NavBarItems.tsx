const navbarItems = [
  { name: "Home", link: "/" },
  { name: "Github", link: "https://github.com/skip-mev/block-sdk" },
  { name: "Career", link: "https://skip-protocol.notion.site/Skip-Open-Positions-a80c9cd99f2247118f89706f07fb563a" },
  { name: "Contact", link: "https://x.com/skipprotocol" },
];

const NavBarItems = () => {
  return (
    <div className="mr-24 flex items-center">
      {navbarItems.map((item: any) => (
        <div className="px-4 text-sm text-gray-200">
          <a href={item.link}>{item.name}</a>
        </div>
      ))}
    </div>
  );
};

export default NavBarItems;
