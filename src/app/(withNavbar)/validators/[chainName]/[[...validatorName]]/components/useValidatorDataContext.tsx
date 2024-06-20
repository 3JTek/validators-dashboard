"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ValidatorData } from "./useFetchValidatorData";

interface ValidatorDataContext extends PropsWithChildren {
  selectedValidator: ValidatorData | null | undefined;
  setValidatorSelected: (validatorSelected: ValidatorData | null | undefined) => void;
  search: string;
  updateSearch: (search: string) => void;
}

const ValidatorDataContextProvider = createContext<ValidatorDataContext | null>(null);

export const ValidatorDataProvider = ({ children }: PropsWithChildren) => {
  const [selectedValidator, setSelectedValidator] = useState<ValidatorData | null | undefined>(undefined);
  const [search, setSearch] = useState<string>("");

  //TODO: implement reducer instead of creating login in provider
  const updateSearch = (search: string) => {
    setSearch(search);
    setSelectedValidator(null);
  };

  return (
    <ValidatorDataContextProvider.Provider
      value={{
        selectedValidator,
        setValidatorSelected: setSelectedValidator,
        search,
        updateSearch,
      }}
    >
      {children}
    </ValidatorDataContextProvider.Provider>
  );
};

export const useValidatorDataContext = () => {
  const context = useContext(ValidatorDataContextProvider);

  if (!context) {
    throw new Error("useValidatorDataContext must be used within a ValidatorDataProvider");
  }
  return context;
};
