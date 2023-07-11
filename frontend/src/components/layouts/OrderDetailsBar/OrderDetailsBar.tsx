import "./OrderDetailsBar.style.scss";
import React from "react";
// Types
import type { OrderDetailsBarProps } from "./OrderDetailsBar.types";
// Components
import Product from "src/components/cards/Product";
import Button from "src/components/Button";
import SalesInfo from "src/components/cards/SalesInfo/SalesInfo";
import EmptyState from "src/components/cards/EmptyState";
import Input from "src/components/Input/Input";
import Modal from "src/components/Modal";
// Modals
import Checkout from "src/views/modals/Checkout";
// Hooks
import useOrderDetailsBar from "./OrderDetailsBar.hook";

const OrderDetailsBar: React.FC<OrderDetailsBarProps> = (props) => {
  const { products } = props;
  const subtotal = products
    .filter((product) => product.isSelected)
    .reduce(
      (initialAmount, product) =>
        initialAmount + product.price * product.quantity,
      0
    );
  const {
    selectedOrderCartItems,
    isModalOpen,
    modalLabel,
    // Functions
    toggleModal,
    selectAllOrderCartItems,
    removeSelectedOrderCartItems,
  } = useOrderDetailsBar();

  const renderModalContent = () => {
    switch (modalLabel) {
      case "CHECKOUT":
        return (
          <Checkout subtotal={subtotal} onCloseModal={() => toggleModal()} />
        );
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onCloseModal={() => toggleModal()}>
        {renderModalContent()}
      </Modal>

      <div className="order-details-bar">
        <div className="order-items-container">
          <span className="label">Order Cart</span>
          {products.length > 0 ? (
            <div className="order-items">
              <div className="order-cart-actions-container">
                <Input
                  type="checkbox"
                  onChange={(e) => selectAllOrderCartItems(e.target.checked)}
                />
                <div className="order-cart-actions">
                  <Button
                    disabled={!selectedOrderCartItems.length}
                    text="Remove"
                    size="sm"
                    onClick={removeSelectedOrderCartItems}
                  />
                </div>
              </div>
              {products?.map((product) => (
                <Product key={product.id} view="order-item" product={product} />
              ))}
            </div>
          ) : (
            <EmptyState
              text="No items in your cart."
              className="order-cart-items-empty-state"
            />
          )}
        </div>
        <div className="order-amount-info">
          <div className="sales-info-container">
            <SalesInfo subTotal={subtotal} />
          </div>
          <Button text="Checkout" onClick={() => toggleModal("CHECKOUT")} />
        </div>
      </div>
    </>
  );
};

export default OrderDetailsBar;
