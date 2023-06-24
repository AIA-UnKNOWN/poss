import { useEffect } from "react";
// Store
import useCategoryStore from "src/store/categories";


const useCategories = () => {
  const categoryStore = useCategoryStore();

  useEffect(() => {
    categoryStore.getAll();
  }, []);
  
  return {
    categories: categoryStore.data,
  }
}

export default useCategories;