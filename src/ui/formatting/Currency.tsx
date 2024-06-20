import { Currency, currencyFormatter } from "@/helpers/currencyFormatter";

type CurrencyTextProps = {
  value: number;
  currency: Currency;
};

const CurrencyText = ({ value, currency }: CurrencyTextProps) => {
  let formattedValue = currencyFormatter(value, currency);

  return <span>{formattedValue}</span>;
};

export default CurrencyText;
