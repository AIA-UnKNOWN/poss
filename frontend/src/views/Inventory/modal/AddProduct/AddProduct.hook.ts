import { useState } from "react";
// Store
import useProductStore from "src/store/products";
// Types
import { AddProductProps } from './AddProduct.types';

const useAddProduct = ({ toggleModal }: AddProductProps) => {
  const productStore = useProductStore();
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (files?.[0]) formData.append('productImage', files[0]);
    await productStore.create(formData);
    await productStore.getAll();
    toggleModal?.();
  }

  return {
    setFiles,
    handleSubmit,
  }
}

export default useAddProduct;