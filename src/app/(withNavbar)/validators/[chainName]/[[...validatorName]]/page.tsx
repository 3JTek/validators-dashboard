"use client";

import ChainMenu from "./components/ValidatorsChainMenu";
import ValidatorsDetailsSection from "./components/ValidatorsDetailsSection";
import ValidatorsHeader from "./components/ValidatorsHeader";
import ValidatorsList from "./components/ValidatorsList";
import ValidatorsListData from "./components/ValidatorsListData";
import ValidatorsListError from "./components/ValidatorsListError";
import ValidatorsListLoading from "./components/ValidatorsListLoading";
import useFetchValidatorData from "./components/useFetchValidatorData";
import useFilterValidatorData from "./components/useFilterValidatorData";

export default function Page({ params }: { params: { chainName: string; validatorName: string } }) {
  const { chainName, validatorName } = params;

  const { data, error, isLoading } = useFetchValidatorData(chainName);

  const filteredData = useFilterValidatorData(data);

  return (
    <div>
      <ChainMenu />
      <div className="flex">
        <div className="flex-grow">
          <div className="flex h-[430px] max-w-[902px] flex-col">
            <ValidatorsHeader />
            <ValidatorsList>
              {isLoading && <ValidatorsListLoading />}
              {error && <ValidatorsListError error={error} />}
              {filteredData && <ValidatorsListData validatorData={filteredData} />}
            </ValidatorsList>
          </div>
        </div>
        <ValidatorsDetailsSection />
      </div>
    </div>
  );
}
