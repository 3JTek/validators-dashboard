"use client";

import React from "react";
import ChainMenu from "./components/ValidatorsChainMenu";
import ValidatorsDetailsSection from "./components/ValidatorsDetailsSection";
import ValidatorsHeader from "./components/ValidatorsHeader";
import ValidatorsList from "./components/ValidatorsList";
import useFetchValidatorData from "./components/useFetchValidatorData";

export default function Page({ params }: { params: { chainName: string; validatorName: string } }) {
  const { chainName, validatorName } = params;

  const { data, error, isLoading } = useFetchValidatorData(chainName);

  return (
    <div>
      <ChainMenu />
      <div className="flex">
        <div className="flex-grow">
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {data && (
            <>
              <div className="flex h-[430px] max-w-[902px] flex-col">
                <ValidatorsHeader />
                <ValidatorsList validatorData={data} />
              </div>
            </>
          )}
        </div>
        <div>
          <ValidatorsDetailsSection />
        </div>
      </div>
    </div>
  );
}
