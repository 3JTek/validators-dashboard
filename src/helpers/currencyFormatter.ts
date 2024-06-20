export enum Currency {
  USD = "USD",
  EUR = "EUR",
}

export const currencyFormatter = (value: number, currency: string) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  });
};
