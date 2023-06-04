export type Product = {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  code?: string;
  photoUrl?: string;
  categoryId?: number;
}

export interface QuantityControllers {
  onIncrement?: (incrementedQuantity: number) => any;
  onDecrement?: (decrementedQauntity: number) => any;
}

export interface ProductProps extends QuantityControllers {
  product: Product;
  view?: 'default' | 'order-item';
}

export interface ProductHook extends QuantityControllers {
  quantity: number;
}