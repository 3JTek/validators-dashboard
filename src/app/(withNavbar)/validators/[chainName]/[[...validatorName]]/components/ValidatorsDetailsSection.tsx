import Heading from "@/ui/typography/Heading";
import ValidatorsDetailsSectionItem from "./ValidatorsDetailsSectionItem";
import { useValidatorDataContext } from "./useValidatorDataContext";

const ValidatorsDetailsSection = () => {
  const { selectedValidator } = useValidatorDataContext();

  if (!selectedValidator) return null;

  const displayedValues = [
    {
      title: "Number of bundles",
      value: selectedValidator.bundles,
    },
    {
      title: "Total MEV Revenue",
      value: selectedValidator.TotalMEVRevenue,
    },
    {
      title: "Total MEV Shared",
      value: selectedValidator.TotalMEVShared,
    },
  ];

  return (
    <div className="rounded-lg border border-gray-100 px-11 py-12">
      <div className="mb-8">
        <Heading type="h3">Osmosis Validator Stats</Heading>
      </div>
      {displayedValues.map(({ title, value }) => (
        <ValidatorsDetailsSectionItem key={title} title={title} value={value}></ValidatorsDetailsSectionItem>
      ))}
    </div>
  );
};

export default ValidatorsDetailsSection;
