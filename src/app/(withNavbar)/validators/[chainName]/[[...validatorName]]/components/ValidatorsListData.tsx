"use client";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { useCallback, useMemo, useRef } from "react";

import { Currency, currencyFormatter } from "@/helpers/currencyFormatter";

import { RowClassRules } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { ValidatorData } from "./useFetchValidatorData";
import { useValidatorDataContext } from "./useValidatorDataContext";

const tableCustomization = `
  .ag-theme-quartz-dark {
    --ag-borders: none;
    --ag-font-size: 14px;
    --ag-font-family: inherit;
    --ag-foreground-color: rgb(255,255,255);
    --ag-background-color: #1C1D1E;
    --ag-header-foreground-color: #F3F6F880;
    --ag-header-font-size: 12px;
    --ag-header-background-color: #1C1D1E;
  }

  .ag-header{
    border-bottom: none;
  }

  .ag-row{
    border-bottom: none;
  }
    
  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within{
    border:none;
    outline: none;
  }

  .ag-header-custom{
    font-size: 12px;
  }
`;

type ValidatorListProps = {
  validatorData: ValidatorData[] | null | undefined;
};

type ValidatorRow = {
  "#": number;
  Validator: string;
  "MEV Rev - Total": number;
  "MEV Rev - Kept": number;
  Bundles: number;
};

const ValidatorsListData = ({ validatorData }: ValidatorListProps) => {
  const { setValidatorSelected } = useValidatorDataContext();

  const gridRef = useRef<AgGridReact<ValidatorRow>>(null);

  const formatInUsd = useMemo(
    () =>
      ({ value }: { value: number }) =>
        currencyFormatter(value, Currency.USD),
    [],
  );

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const rowData: ValidatorRow[] = useMemo(
    () =>
      validatorData!.map((validator, index) => ({
        "#": index + 1,
        Validator: validator.Name,
        "MEV Rev - Total": validator.TotalMEVRevenue,
        "MEV Rev - Kept": validator.TotalMEVShared,
        Bundles: validator.bundles,
      })),
    [validatorData],
  );

  const columnDefs = useMemo(
    () => [
      {
        field: "#",
        width: 50,
        headerClass: "ag-header-custom",
      },
      {
        field: "Validator",
        flex: 2,
        headerClass: "ag-header-custom",
        cellStyle: { color: "#6398FF" },
      },
      {
        field: "MEV Rev - Total",
        flex: 2,
        headerClass: "ag-header-custom",
        valueFormatter: formatInUsd,
      },
      {
        field: "MEV Rev - Kept",
        flex: 2,
        headerClass: "ag-header-custom",
        valueFormatter: formatInUsd,
      },
      {
        field: "Bundles",
        flex: 2,
        headerClass: "ag-header-custom",
        valueFormatter: formatInUsd,
      },
    ],
    [],
  );

  const rowClassRules = useMemo<RowClassRules>(() => {
    return {};
  }, [validatorData]);

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current!.api.getSelectedRows();

    if (!selectedRows.length) return;

    const validatorDetails = validatorData!.find((validator) => validator.Name === selectedRows[0].Validator);

    setValidatorSelected(validatorDetails || null);
  }, [validatorData]);

  return (
    <>
      <style>{tableCustomization}</style>
      <div style={containerStyle}>
        <div style={gridStyle} className={"ag-theme-quartz-dark"}>
          <AgGridReact
            ref={gridRef}
            rowSelection="single"
            onSelectionChanged={onSelectionChanged}
            rowData={rowData}
            columnDefs={columnDefs}
            rowClassRules={rowClassRules}
          />
        </div>
      </div>
    </>
  );
};

export default ValidatorsListData;
