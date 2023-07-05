import { create } from "zustand";
import { devtools } from 'zustand/middleware';
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
    },
    incrementCartItemQuantity: async (productId: number) => {
      const products = await productsService.getAll();
      const wantedProductIndex = products.findIndex(p => p.id === productId);
      if (wantedProductIndex === -1) return;
      const wantedProduct = products[wantedProductIndex];
      wantedProduct.quantity++;
      localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(products));
      await productsService.update(wantedProduct);
      return set(() => ({ orderCartItems: products }));
    },
    decrementCartItemQuantity: async (productId: number) => {
      const products = await productsService.getAll();
      const wantedProductIndex = products.findIndex(p => p.id === productId);
      if (wantedProductIndex === -1) return;
      const wantedProduct = products[wantedProductIndex];
      if (wantedProduct.quantity > 0) wantedProduct.quantity--;
      localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(products));
      await productsService.update(wantedProduct);
      return set(() => ({ orderCartItems: products }));
    },
  }))
);

export default useProductStore;