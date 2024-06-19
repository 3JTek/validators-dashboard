import Heading from "@/ui/typography/Heading";
import Head from "next/head";

import PaymentIcon from "@/assets/icons/payment.svg";
import Image from "next/image";

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
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ValidatorsDetailsSectionItem;
