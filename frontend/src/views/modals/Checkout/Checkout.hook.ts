import { useState } from "react";
// Constants
import { TAX_SALES } from "src/components/cards/SalesInfo/SalesInfo";

const useCheckoutModal = (props) => {
  const { subtotal } = props;
  const [amountReceived, setAmountReceived] = useState("");
  const [amountChange, setAmountChange] = useState("");

  const handleAmountReceivedChange = (amountReceived: string) => {
    if (amountReceived.length === 1 && amountReceived === "0") return;
    setAmountReceived(amountReceived);
    const total = parseInt(amountReceived) - TAX_SALES;
    setAmountChange(`${total - subtotal}`);
  };

  const handleAmountChangeChange = (amountChange: string) => {
    if (amountChange.length === 1 && amountChange === "0") return;
    setAmountChange(amountChange);
  };

  return {
    amountChange,
    amountReceived,
    // Functions
    handleAmountReceivedChange,
    handleAmountChangeChange,
  };
};

export default useCheckoutModal;
