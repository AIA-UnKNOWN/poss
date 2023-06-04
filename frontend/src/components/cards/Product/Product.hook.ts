import { useState } from "react";
import type { ProductHook } from "./Product.types";


const useProduct = ({
  quantity,
  onIncrement,
  onDecrement,
}: ProductHook) => {
  const [productQuantity, setProductQuantity] = useState<number>(quantity || 0);

  const incrementQuantity = () => {
    setProductQuantity(prevProductQuantity => {
      const incrementedQuantity = prevProductQuantity + 1;
      onIncrement?.(incrementedQuantity);
      return incrementedQuantity;
    });
  }

  const decrementQuantity = () => {
    if (productQuantity <= 1) return;
    setProductQuantity(prevProductQuantity => {
      const decrementedQauntity = prevProductQuantity - 1;
      onDecrement?.(decrementedQauntity);
      return decrementedQauntity;
    });
  }

  return {
    // States
    productQuantity,
    // Functions
    incrementQuantity,
    decrementQuantity,
  }
}

export default useProduct;