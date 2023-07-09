import { IsNotEmpty, IsOptional } from 'class-validator';
import { Category } from "src/modules/categories/entity/category.entity";

export class ProductDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  price: number;

  @IsOptional()
  description?: string;

  @IsOptional()
  code?: string;
  
  @IsOptional()
  photoUrl?: string;
  
  @IsOptional()
  categoryId?: number;
  
  @IsOptional()
  category?: Category;
}

export class FindAllFilter {

  @IsOptional()
  name?: string;

  @IsOptional()
  code?: string;

  @IsOptional()
  categoryId?: number;

}