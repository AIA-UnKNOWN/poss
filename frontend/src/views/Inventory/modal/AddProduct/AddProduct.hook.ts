// Store
import useProductStore from "src/store/products";
// Types
import { AddProductProps } from './AddProduct.types';

const useAddProduct = ({ toggleModal }: AddProductProps) => {
  const productStore = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await productStore.create(formData);
    await productStore.getAll();
    toggleModal?.();
  }

  return {
    handleSubmit,
  }
}

export default useAddProduct;