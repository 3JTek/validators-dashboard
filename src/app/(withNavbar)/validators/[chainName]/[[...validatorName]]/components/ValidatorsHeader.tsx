import Search from "@/ui/controls/Search";
import Heading from "@/ui/typography/Heading";

const ValidatorsHeader = () => {
  return (
    <div className="flex items-center w-full h-16">
      <div className="flex-grow">
        <Heading type="h3">Top MEV Validators on Osmosis</Heading>
      </div>
      <div>
        <Search placeholder="Filter" />
      </div>
    </div>
  );
};

export default ValidatorsHeader;
