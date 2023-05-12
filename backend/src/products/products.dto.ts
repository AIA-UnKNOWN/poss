import { Category } from "src/categories/entity/category.entity";

export interface ProductDto {
  name: string;
  quantity: number;
  description?: string;
  code?: string;
  photoUrl?: string;
  categoryId?: number;
  category?: Category;
}