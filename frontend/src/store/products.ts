import { create } from "zustand";
import { devtools } from 'zustand/middleware';
// Services
import productsService from "src/services/products/products.service";
// Types
import type { Product } from "src/components/cards/Product/Product.types";
// Utisl
import { addOrderCartItem } from "src/utils/orderCart.helper";

export type ProductState = {
  data: Product[],
  orderCartItems: Product[],
  getAll: () => Promise<void>,
  create: (product: Product) => Promise<Product>,
  setOrderCartItems: (products: Product[]) => void,
  addOrderCartItem: (product: Product) => void,
}

const useProductStore = create<ProductState>()(
  devtools(set => ({
    data: [],
    orderCartItems: [],
    getAll: async () => {
      const products = await productsService.getAll();
      return set(() => ({ data: products }));
    },
    create: async (product: Product | FormData) : Promise<Product> => {
      const createdProduct = await productsService.create(product);
      return createdProduct;
    },
    setOrderCartItems: (products: Product[]) => {
      return set(() => ({ orderCartItems: products }));
    },
    addOrderCartItem: (product: Product) => {
      addOrderCartItem(product);
      return set(state => {
        const productFound = state.orderCartItems.find(orderCartItem => orderCartItem.id === product.id);
        return {
          orderCartItems: productFound
            ? state.orderCartItems.map(orderCartItem => {
              if (orderCartItem.id !== product.id) return orderCartItem;
              return { ...orderCartItem, quantity: orderCartItem.quantity + 1 };
            })
            : [...state.orderCartItems, product],
        };
      });
    }
  }))
);

export default useProductStore;