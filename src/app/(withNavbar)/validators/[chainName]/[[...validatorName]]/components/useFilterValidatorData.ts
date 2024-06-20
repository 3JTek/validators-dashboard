import { useEffect, useState } from "react";

import { useValidatorDataContext } from "./useValidatorDataContext";
import { ValidatorData } from "./useFetchValidatorData";

export default function useFilterValidatorData(data: ValidatorData[] | null | undefined) {
  const { search } = useValidatorDataContext();

  const [filteredData, setFilteredData] = useState<ValidatorData[] | null>(null);

  useEffect(() => {
    if (search && data) {
      setFilteredData(data.filter((validator) => validator.Name.toLowerCase().includes(search.toLowerCase())));
    } else if (!search && data) {
      setFilteredData(data);
    } else if (!search && !data) {
      setFilteredData(null);
    }
  }, [search, data]);

  return filteredData;
}
