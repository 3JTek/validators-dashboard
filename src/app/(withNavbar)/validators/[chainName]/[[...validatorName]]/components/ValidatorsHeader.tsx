import Search from "@/ui/controls/Search";
import Heading from "@/ui/typography/Heading";
import { useValidatorDataContext } from "./useValidatorDataContext";

const ValidatorsHeader = () => {
  const { updateSearch } = useValidatorDataContext();

  return (
    <div className="flex h-16 w-full items-center">
      <div className="flex-grow">
        <Heading type="h3">Top MEV Validators on Osmosis</Heading>
      </div>
      <div>
        <Search placeholder="Filter" handleChange={updateSearch} />
      </div>
    </div>
  );
};

export default ValidatorsHeader;
