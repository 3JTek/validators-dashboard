import Heading from "@/ui/typography/Heading";
import Head from "next/head";

import PaymentIcon from "@/assets/icons/payment.svg";
import Image from "next/image";

import CurrencyText from "@/ui/formatting/Currency";
import { Currency } from "@/helpers/currencyFormatter";

type ValidatorsDetailsSectionItemProps = {
  title: string;
  value: number;
};

const ValidatorsDetailsSectionItem = ({ title, value }: ValidatorsDetailsSectionItemProps) => {
  return (
    <div>
      <div className="mb-1">
        <Image src={PaymentIcon} alt="Payment Icon" />
      </div>
      <div className="mb-1">
        <p className="text-sm text-gray-100">{title}</p>
      </div>
      <div className="mb-10">
        <CurrencyText value={value} currency={Currency.USD}></CurrencyText>
      </div>
    </div>
  );
};

export default ValidatorsDetailsSectionItem;
