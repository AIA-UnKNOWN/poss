import { useState } from "react";
import Swal from "sweetalert2";
// Constants
import { TAX_SALES } from "src/components/cards/SalesInfo/SalesInfo";
// Store
import useProductStore from "src/store/products";
// Utils
import { ORDER_CART_ITEMS_KEY } from "src/utils/orderCart.helper";

const useCheckoutModal = (props) => {
  const productStore = useProductStore();
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
    removeSelectedOrderCartItems();
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

  const removeSelectedOrderCartItems = () => {
    const unselectedOrderCartItems = productStore.orderCartItems.filter(
      (orderCartItem) => !orderCartItem.isSelected
    );
    productStore.setOrderCartItems(unselectedOrderCartItems);
    localStorage.setItem(
      ORDER_CART_ITEMS_KEY,
      JSON.stringify(unselectedOrderCartItems)
    );
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