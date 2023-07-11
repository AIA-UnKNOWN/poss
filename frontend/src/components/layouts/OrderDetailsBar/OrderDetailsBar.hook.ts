import { useEffect, useState } from "react";
// Utils
import {
  ORDER_CART_ITEMS_KEY,
  getOrderCartItems,
} from "src/utils/orderCart.helper";
// Store
import useProductStore from "src/store/products";
// Types
import { Product } from "src/components/cards/Product/Product.types";

const useOrderDetailsBar = () => {
  const productStore = useProductStore();
  const [selectedOrderCartItems, setSelectedOrderCartItems] = useState<
    Product[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");

  useEffect(() => {
    getSelectedProducts();
  }, [JSON.stringify(productStore.orderCartItems)]);

  const getSelectedProducts = () => {
    const orderCartItems = productStore.orderCartItems;
    setSelectedOrderCartItems(
      orderCartItems.filter((orderCartItem) => orderCartItem.isSelected)
    );
  };

  const selectAllOrderCartItems = (isChecked: boolean) => {
    const orderCartItems = getOrderCartItems();
    const selectedOrderCartItems = orderCartItems.map((orderCartItem) => ({
      ...orderCartItem,
      isSelected: isChecked,
    }));
    setSelectedOrderCartItems(selectedOrderCartItems);
    productStore.setOrderCartItems(selectedOrderCartItems);
  };

  const removeSelectedOrderCartItems = () => {
    const selectedOrderCartItemIds = selectedOrderCartItems.map(
      (selectedOrderCartItem) => selectedOrderCartItem.id
    );
    // Remove items from localStorage
    const localStorageOrderCartItems = getOrderCartItems();
    localStorage.setItem(
      ORDER_CART_ITEMS_KEY,
      JSON.stringify(
        localStorageOrderCartItems.filter(
          (orderCartItem) =>
            !selectedOrderCartItemIds.includes(orderCartItem.id)
        )
      )
    );
    // Remove items from global state
    const orderCartItems = productStore.orderCartItems;
    productStore.setOrderCartItems(
      orderCartItems.filter(
        (orderCartItem) => !selectedOrderCartItemIds.includes(orderCartItem.id)
      )
    );
  };

  const toggleModal = (label?: string) => {
    setIsModalOpen(!isModalOpen);
    if (!label) return;
    setModalLabel(label);
  };

  return {
    selectedOrderCartItems,
    isModalOpen,
    modalLabel,
    // Functions
    toggleModal,
    selectAllOrderCartItems,
    removeSelectedOrderCartItems,
  };
};

export default useOrderDetailsBar;
