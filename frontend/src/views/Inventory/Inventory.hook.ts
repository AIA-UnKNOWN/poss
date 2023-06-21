import { useEffect } from "react";
// Store
import useProductStore from "src/store/products";

const useInventory = () => {
  const productStore = useProductStore();

  useEffect(() => {
    productStore.getAll();
  }, []);

  return {
    products: productStore.data,
  }
}

export default useInventory;