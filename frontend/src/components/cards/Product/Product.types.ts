export type Product = {
  name: string;
  price: number;
  quantity?: number;
  description?: string;
  code?: string;
  photoUrl?: string;
  categoryId?: number;
}

export interface ProductProps {
  product: Product;
  view?: 'default' | 'order-item';
}