import { useState } from "react";
// Store
import useProductStore from "src/store/products";
import useCategoryStore from "src/store/categories";
// Types
import { AddProductProps } from './AddProduct.types';
import type { Option } from "react-dropdown";

const useAddProduct = ({ toggleModal }: AddProductProps) => {
  const productStore = useProductStore();
  const categoryStore = useCategoryStore();
  const [category, setCategory] = useState<Option | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [formError, setFormError] = useState({
    name: '',
    quantity: '',
    price: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      if (category?.value) formData.append('categoryId', category.value);
      if (files?.[0]) formData.append('productImage', files[0]);
      await productStore.create(formData);
      await productStore.getAll();
      toggleModal?.();
    } catch(error) {
      setFormError(error?.response?.data?.error || {});
    }
  }

  return {
    categories: categoryStore.data.map(category => ({
      label: category.name,
      value: category.id,
    })),
    formError,
    setCategory,
    setFiles,
    handleSubmit,
  }
}

export default useAddProduct;