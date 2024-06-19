"use client";

import delay from "@/helpers/delay";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { useState, useEffect } from "react";

interface FetchValidatorDataResponse {
  validator_infos: ValidatorData[];
}

export interface ValidatorData {
  Name: string;
  TotalMEVRevenue: number;
  TotalMEVShared: number;
  bundles: number;
}

type State = {
  data: ValidatorData[] | null | undefined;
  error: string | null | undefined;
  isLoading: boolean;
};

const useFetchValidatorData = (chainName: string) => {
  const [state, dispatch] = useState<State>({ data: undefined, error: null, isLoading: true });

  const resetData = () => {
    dispatch({ data: undefined, error: undefined, isLoading: false });
  };

  useEffect(() => {
    const fetchValidatorData = async () => {
      try {
        dispatch({ data: undefined, error: undefined, isLoading: true });

        const apiCall = axios<FetchValidatorDataResponse>(
          `https://skip-select.s3.amazonaws.com/${chainName}/validators.json`,
        );

        delay(2000); //This is a UI trick to keep a consistent loading time and avoid screen flicking.

        const [response] = await Promise.all([apiCall, delay(2000)]);

        dispatch({ data: response.data.validator_infos, error: null, isLoading: false });
      } catch (error: AxiosError | any) {
        let message: string;

        if (error?.response?.status === HttpStatusCode.Forbidden) {
          message = "We have no data yet for this chain";
        } else {
          message = "An error occurred while fetching data";
        }

        dispatch({ data: null, error: message, isLoading: false });
      }
    };

    if (chainName) {
      fetchValidatorData();
    } else {
      resetData;
    }
  }, [chainName]);

  return state;
};

export default useFetchValidatorData;
