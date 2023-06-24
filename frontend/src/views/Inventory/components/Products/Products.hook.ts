import { useEffect } from "react";
// Store
import useProductStore from "src/store/products";

const useProducts = () => {
  const productStore = useProductStore();

  useEffect(() => {
    productStore.getAll();
  }, []);

  return {
    products: productStore.data,
  }
}

export default useProducts;