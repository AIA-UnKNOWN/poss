import { create } from "zustand";
import { devtools } from 'zustand/middleware';
// Services
import productsService from "src/services/products/products.service";
// Types
import type { Product } from "src/components/cards/Product/Product.types";
// Utisl
import { getOrderCartItems, addOrderCartItem } from "src/utils/orderCart.helper";

export type ProductState = {
  data: Product[],
  orderCartItems: Product[],
  getAll: () => Promise<void>,
  create: (product: Product) => Promise<Product>,
  addOrderCartItem: (product: Product) => void,
}

const useProductStore = create<ProductState>()(
  devtools(set => ({
    data: [],
    orderCartItems: getOrderCartItems(),
    getAll: async () => {
      const products = await productsService.getAll();
      return set(() => ({ data: products }));
    },
    create: async (product: Product | FormData) : Promise<Product> => {
      const createdProduct = await productsService.create(product);
      return createdProduct;
    },
    addOrderCartItem: (product: Product) => {
      addOrderCartItem(product);
      return set(state => {
        const productFound = state.orderCartItems.find(orderCartItem => orderCartItem.id === product.id);
        return {
          orderCartItems: productFound
          ? state.orderCartItems
          : [...state.orderCartItems, product],
        };
      });
    }
  }))
);

export default useProductStore;