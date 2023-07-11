import { create as createStore } from "zustand";
import { devtools } from "zustand/middleware";
import _ from "lodash";
// Services
import productsService from "src/services/products/products.service";
// Types
import type {
  Product,
  ProductWithId,
} from "src/components/cards/Product/Product.types";
// Utils
import {
  ORDER_CART_ITEMS_KEY,
  addOrderCartItem,
  updateLocalStorageOrderCartItem,
} from "src/utils/orderCart.helper";

export type ProductState = {
  isLoading: boolean;
  data: Product[];
  orderCartItems: Product[];
  getAll: (filter?: GetAllFilter) => Promise<void>;
  create: (product: Product) => Promise<Product>;
  setOrderCartItems: (products: Product[]) => void;
  addOrderCartItem: (product: Product) => void;
  incrementCartItemQuantity: (productId: number) => void;
  decrementCartItemQuantity: (productId: number) => void;
  updateOrderCartItem: (product: ProductWithId) => void;
};

export type GetAllFilter = {
  name?: string;
  code?: string;
  categoryId?: number;
};

const useProductStore = createStore<ProductState>()(
  devtools((set) => ({
    isLoading: false,
    data: [],
    orderCartItems: [],
    getAll: async (filter?: GetAllFilter) => {
      set(() => ({ isLoading: true }));
      const products = await productsService.getAll(filter);
      return set(() => ({ isLoading: false, data: products }));
    },
    create: async (product: Product | FormData): Promise<Product> => {
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
          addOrderCartItem({ ...product, quantity: 1, isSelected: false });
          orderCartItems.push({ ...product, quantity: 1, isSelected: false });
        }
        localStorage.setItem(
          ORDER_CART_ITEMS_KEY,
          JSON.stringify(orderCartItems)
        );
        return { orderCartItems: orderCartItems };
      });
    },
    incrementCartItemQuantity: (productId: number) => {
      return set((state) => {
        const updatedOrderCartItems = _.cloneDeep(state.orderCartItems);
        const updatedCartItem = _.find(updatedOrderCartItems, {
          id: productId,
        });
        if (updatedCartItem) {
          updatedCartItem.quantity += 1;
          localStorage.setItem(
            ORDER_CART_ITEMS_KEY,
            JSON.stringify(updatedOrderCartItems)
          );
        }
        return { orderCartItems: updatedOrderCartItems };
      });
    },
    decrementCartItemQuantity: (productId: number) => {
      return set((state) => {
        const updatedOrderCartItems = _.cloneDeep(state.orderCartItems);
        const updatedCartItem = _.find(updatedOrderCartItems, {
          id: productId,
        });
        if (updatedCartItem && updatedCartItem.quantity > 0) {
          updatedCartItem.quantity -= 1;
          localStorage.setItem(
            ORDER_CART_ITEMS_KEY,
            JSON.stringify(updatedOrderCartItems)
          );
        }
        return { orderCartItems: updatedOrderCartItems };
      });
    },
    updateOrderCartItem: (product: ProductWithId) => {
      updateLocalStorageOrderCartItem(product);
      return set((state) => {
        const orderCartItems = state.orderCartItems;
        const wantedOrderCartItem = orderCartItems.find(
          (orderCartItem) => orderCartItem.id === product.id
        );
        if (!wantedOrderCartItem) return state;
        Object.assign(wantedOrderCartItem, product);
        return { orderCartItems };
      });
    },
  }))
);

export default useProductStore;
