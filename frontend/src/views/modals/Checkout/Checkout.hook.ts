import { useState } from "react";
import Swal from "sweetalert2";
// Constants
import { TAX_SALES } from "src/components/cards/SalesInfo/SalesInfo";

const useCheckoutModal = (props) => {
  const { subtotal, onCloseModal } = props;
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

  const pay = () => {
    if (
      amountChange === "" || // If no amount change calculated
      parseInt(amountChange) < 0 || // If amount change is less than zero (means debt)
      amountReceived === "" // If no amount received
    )
      return;
    onCloseModal?.();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Paid successfully!",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        title: "poss-swal-popup-title",
      },
    });
  };

  return {
    amountChange,
    amountReceived,
    // Functions
    handleAmountReceivedChange,
    handleAmountChangeChange,
    pay,
  };
};

export default useCheckoutModal;
