"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ValidatorData } from "./useFetchValidatorData";

interface ValidatorDataContext extends PropsWithChildren {
  validatorSelected: ValidatorData | null | undefined;
  setValidatorSelected: (validatorSelected: ValidatorData | null | undefined) => void;
}

const ValidatorDataContextProvider = createContext<ValidatorDataContext | null>(null);

export const ValidatorDataProvider = ({ children }: PropsWithChildren) => {
  const [validatorSelected, setValidatorSelected] = useState<ValidatorData | null | undefined>(undefined);

  return (
    <ValidatorDataContextProvider.Provider
      value={{
        validatorSelected,
        setValidatorSelected,
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
