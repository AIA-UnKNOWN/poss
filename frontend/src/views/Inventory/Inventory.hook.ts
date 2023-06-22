import { useEffect } from "react";
// Store
import useProductStore from "src/store/products";
import useCategoryStore from "src/store/categories";

const useInventory = () => {
  const productStore = useProductStore();
  const categoryStore = useCategoryStore();

  useEffect(() => {
    productStore.getAll();
    categoryStore.getAll();
  }, []);

  return {
    products: productStore.data,
    categories: categoryStore.data,
  }
}

export default useInventory;