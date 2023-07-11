import _ from "lodash";
import {
  Product,
  ProductWithId,
} from "src/components/cards/Product/Product.types";

export const ORDER_CART_ITEMS_KEY = "oc-items";

const getOrderCartItems = (): Product[] => {
  const items = localStorage.getItem(ORDER_CART_ITEMS_KEY);
  if (!items) {
    const initializedOrderItems = JSON.stringify([]);
    localStorage.setItem(ORDER_CART_ITEMS_KEY, initializedOrderItems);
    return JSON.parse(initializedOrderItems);
  }
  return JSON.parse(items);
};

const addLocalStorageOrderCartItem = (product: Product) => {
  let items = getOrderCartItems();
  const isItemExist = checkIfItemExist(product, items);
  if (!isItemExist) {
    items.push(product);
  } else {
    items = items.map((item) => {
      if (item.id !== product.id) return item;
      return { ...item, quantity: item.quantity + 1 };
    });
  }
  localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(items));
};

const checkIfItemExist = (product: Product, products: Product[]): boolean => {
  const productFound = products.find((p) => p.id === product.id);
  return !_.isEmpty(productFound);
};

const updateLocalStorageOrderCartItem = (product: ProductWithId) => {
  const items = getOrderCartItems();
  const wantedOrderCartItem = items.find(
    (orderCartItem) => orderCartItem.id === product.id
  );
  if (!wantedOrderCartItem) return;
  Object.assign(wantedOrderCartItem, product);
  localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(items));
};

export {
  getOrderCartItems,
  addLocalStorageOrderCartItem,
  updateLocalStorageOrderCartItem,
};
