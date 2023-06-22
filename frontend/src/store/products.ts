import { create } from "zustand";
import { devtools } from 'zustand/middleware';
// Services
import productsService from "src/services/products/products.service";
// Types
import type { Product } from "src/components/cards/Product/Product.types";

export type ProductState = {
  data: Product[],
  getAll: () => Promise<void>,
}

const useProductStore = create<ProductState>()(
  devtools(set => ({
    data: [],
    getAll: async () => {
      const products = await productsService.getAll();
      return set(() => ({ data: products }));
    },
  }))
);

export default useProductStore;