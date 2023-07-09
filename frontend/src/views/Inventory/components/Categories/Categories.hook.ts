import { useEffect, useState } from "react";
// Store
import useCategoryStore from "src/store/categories";
import useProductStore from 'src/store/products';

const useCategories = () => {
  const categoryStore = useCategoryStore();
  const productStore = useProductStore();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  useEffect(() => {
    categoryStore.getAll();
  }, []);

  const handleClickCategory = (categoryId: number) => {
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null);
      productStore.getAll();
      return;
    }
    productStore.getAll({ categoryId: categoryId });
    setSelectedCategoryId(categoryId);
  }
  
  return {
    categories: categoryStore.data,
    selectedCategoryId,
    // Functions
    handleClickCategory,
  }
}

export default useCategories;