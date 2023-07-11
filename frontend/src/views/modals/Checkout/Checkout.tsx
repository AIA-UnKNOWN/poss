import "./Checkout.style.scss";
// Components
import Button from "src/components/Button";
import Input from "src/components/Input";
import SalesInfo from "src/components/cards/SalesInfo";
// Hooks
import useCheckoutModal from "./Checkout.hook";

const Checkout = (props) => {
  const { subtotal } = props;
  const {
    amountChange,
    amountReceived,
    // Functions
    handleAmountReceivedChange,
    handleAmountChangeChange,
    pay,
  } = useCheckoutModal(props);

  return (
    <div className="modal-content">
      <p className="modal-title">Checkout</p>
      <div className="checkout-modal-content">
        <div className="sales-info-container">
          <SalesInfo subTotal={subtotal} />
        </div>
        <Input
          type="number"
          placeholder="Amount received"
          value={amountReceived}
          onChange={(e) => handleAmountReceivedChange(e.target.value)}
        />
        <Input
          disabled
          type="number"
          placeholder="Amount change"
          value={amountChange}
          onChange={(e) => handleAmountChangeChange(e.target.value)}
        />
      </div>
      <Button text={"Pay"} onClick={pay} />
    </div>
  );
};

export default Checkout;
