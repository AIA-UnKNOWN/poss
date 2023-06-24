import { useEffect, useState } from "react";
// Store
import useProductStore from "src/store/products";
import useCategoryStore from "src/store/categories";

const useInventory = () => {
  const productStore = useProductStore();
  const categoryStore = useCategoryStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    productStore.getAll();
    categoryStore.getAll();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return {
    products: productStore.data,
    categories: categoryStore.data,
    isModalOpen,
    toggleModal,
  }
}

export default useInventory;