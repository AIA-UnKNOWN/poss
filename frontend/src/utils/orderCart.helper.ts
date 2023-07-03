import _ from 'lodash';
import { Product } from 'src/components/cards/Product/Product.types';

export const ORDER_CART_ITEMS_KEY = 'oc-items';

const getOrderCartItems = () : Product[] => {
  const items = localStorage.getItem(ORDER_CART_ITEMS_KEY);
  if (!items) {
    const initializedOrderItems = JSON.stringify([]);
    localStorage.setItem(ORDER_CART_ITEMS_KEY, initializedOrderItems);
    return JSON.parse(initializedOrderItems);
  };
  return JSON.parse(items);
}

const addOrderCartItem = (product: Product) => {
  let items = getOrderCartItems();
  const isItemExist = checkIfItemExist(product, items);
  if (!isItemExist) items.push(product);
  localStorage.setItem(ORDER_CART_ITEMS_KEY, JSON.stringify(items));
}

const checkIfItemExist = (product: Product, products: Product[]) : boolean => {
  const productFound = products.find(p => p.id === product.id);
  return !_.isEmpty(productFound);
}

export {
  getOrderCartItems,
  addOrderCartItem,
}