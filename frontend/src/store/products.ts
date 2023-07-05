import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import _ from 'lodash';
// Services
import productsService from "src/services/products/products.service";
// Types
import type { Product } from "src/components/cards/Product/Product.types";
// Utisl
import { ORDER_CART_ITEMS_KEY, addOrderCartItem } from "src/utils/orderCart.helper";

export type ProductState = {
  data: Product[],
  orderCartItems: Product[],
  getAll: () => Promise<void>,
  create: (product: Product) => Promise<Product>,
  setOrderCartItems: (products: Product[]) => void,
  addOrderCartItem: (product: Product) => void,
  incrementCartItemQuantity: (productId: number) => void,
  decrementCartItemQuantity: (productId: number) => void,
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
      return set((state) => {
        const orderCartItems = _.cloneDeep(state.orderCartItems);
        const orderCartItem = _.find(orderCartItems, { id: product.id });
        if (orderCartItem) {
          orderCartItem.quantity += 1;
        } else {
          addOrderCartItem(product);
          orderCartItems.push(product);
        }
        localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(orderCartItems));
        return { orderCartItems: orderCartItems };
      });
    },
    incrementCartItemQuantity: (productId: number) => {
      return set((state) => {
        const updatedOrderCartItems = _.cloneDeep(state.orderCartItems);
        const updatedCartItem = _.find(updatedOrderCartItems, { id: productId });
        if (updatedCartItem) {
          updatedCartItem.quantity += 1;
          localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(updatedOrderCartItems));
        }
        return { orderCartItems: updatedOrderCartItems };
      });
    },
    decrementCartItemQuantity: (productId: number) => {
      return set((state) => {
        const updatedOrderCartItems = _.cloneDeep(state.orderCartItems);
        const updatedCartItem = _.find(updatedOrderCartItems, { id: productId });
        if (updatedCartItem && updatedCartItem.quantity > 0) {
          updatedCartItem.quantity -= 1;
          localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(updatedOrderCartItems));
        }
        return { orderCartItems: updatedOrderCartItems };
      });
    },
  }))
);

export default useProductStore;